import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getPrivyUser } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the authenticated Privy user
  const privyUser = await getPrivyUser();

  // Redirect to home if not authenticated
  if (!privyUser) {
    console.log("Redirecting to /: No authenticated user");
    redirect("/");
  }

  // Fetch user from Prisma using privyId
  const user = await prisma.user.findUnique({
    where: { privyId: privyUser.userId },
    select: { isArtist: true },
  });

  // Redirect to /become-artist if user is not found or not an artist
  if (!user || !user.isArtist) {
    console.log("Redirecting to /become-artist: User not found or not an artist");
    redirect("/become-artist");
  }

  // Render the layout with children (dashboard pages)
  return <>{children}</>;
}