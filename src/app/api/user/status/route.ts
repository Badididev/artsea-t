// src/app/api/user/status/route.ts

import { NextResponse } from 'next/server'
import { getPrivyUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
    try {
        const privyUser = await getPrivyUser()

        if (!privyUser) {
            return NextResponse.json(
                { error: "Not authenticated" },
                { status: 401 }
            )
        }

        const user = await prisma.user.findUnique({
            where: { privyId: privyUser.userId },
            select: { 
                isArtist: true,
                artistRequest: {
                    select: {
                        status: true
                    }
                }
            }
        })

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({
            isArtist: user.isArtist,
            artistRequest: user.artistRequest
        })
    } catch (error) {
        console.error('Error checking user status:', error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
