import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { getPrivyUser } from '@/lib/auth'
import { ArtistRequestWrapper } from '@/components/artist-request-wrapper'

export default async function BecomeArtistPage() {
  const privyUser = await getPrivyUser()

  if (!privyUser) {
    console.log("Redirecting because: no authenticated user");
    redirect('/');
  }

  const user = await prisma.user.findUnique({
    where: { privyId: privyUser.userId },
    include: { artistRequest: true }
  })

  if (!user) {
    console.log("Redirecting because: user not found in database")
    redirect('/login')
  }

  if (user.isArtist) {
    console.log("Redirecting because: user is already an artist")
    redirect('/dashboard/profile')
  }

  // Check if user has an existing request
  if (user.artistRequest) {
    switch (user.artistRequest.status) {
      case 'PENDING':
        return (
          <div className="container max-w-4xl py-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-yellow-100 px-4 py-2 rounded-full text-yellow-800">
                  Application Status: Pending Review
                </div>
              </div>
              <h1 className="text-3xl font-bold">Application Under Review</h1>
              <p className="text-muted-foreground">
                Your artist application is currently being reviewed. We'll notify you once a decision has been made.
              </p>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p>Submission Details:</p>
                <p>Submitted on: {new Date(user.artistRequest.submittedAt).toLocaleDateString()}</p>
                <p>Expected Review Time: 3-5 business days</p>
              </div>
            </div>
          </div>
        )

      case 'APPROVED':
        return (
          <div className="container max-w-4xl py-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 px-4 py-2 rounded-full text-green-800">
                  Application Status: Approved
                </div>
              </div>
              <h1 className="text-3xl font-bold">Congratulations!</h1>
              <p className="text-muted-foreground">
                Your artist application has been approved. You can now access your artist dashboard.
              </p>
              <div className="mt-6">
                <a 
                  href="/dashboard/artist" 
                  className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
                >
                  Go to Artist Dashboard
                </a>
              </div>
            </div>
          </div>
        )

      case 'REJECTED':
        return (
          <div className="container max-w-4xl py-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-100 px-4 py-2 rounded-full text-red-800">
                  Application Status: Rejected
                </div>
              </div>
              <h1 className="text-3xl font-bold">Application Not Approved</h1>
              <p className="text-muted-foreground">
                Unfortunately, your artist application was not approved at this time.
              </p>
              <div className="mt-6">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
                >
                  Submit New Application
                </button>
              </div>
            </div>
          </div>
        )
    }
  }

  // Show the form only for new applications
  return (
    <div className="container max-w-4xl py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Become an Artist</h1>
        <p className="text-muted-foreground mt-2">
          Join our community of talented artists and showcase your work to the world
        </p>
      </div>
      <ArtistRequestWrapper />
    </div>
  )
}