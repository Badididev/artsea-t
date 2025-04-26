import { NextResponse } from "next/server";
import { z } from "zod";
import { getPrivyUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { artistRequestSchema } from "@/lib/validations/artist-request";

// Type for Privy user (ensure type safety)
interface PrivyUser {
  userId: string;
  [key: string]: any;
}

export async function POST(req: Request) {
  try {
    // Get authenticated user
    const privyUser = await getPrivyUser() as PrivyUser | null;

    if (!privyUser || !privyUser.userId) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { privyId: privyUser.userId },
      include: { artistRequest: true },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Check if user is already an artist
    if (user.isArtist) {
      return NextResponse.json(
        { success: false, error: "User is already an artist" },
        { status: 400 }
      );
    }

    // Validate request body
    const body = await req.json();
    let validatedData;
    try {
      validatedData = artistRequestSchema.parse(body);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return NextResponse.json(
          { success: false, error: "Validation failed", details: error.errors },
          { status: 400 }
        );
      }
      throw error;
    }

    // Validate dateOfBirth format (yyyy-MM-dd)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(validatedData.dateOfBirth)) {
      return NextResponse.json(
        { success: false, error: "Invalid dateOfBirth format. Use yyyy-MM-dd" },
        { status: 400 }
      );
    }
    const dateOfBirth = new Date(validatedData.dateOfBirth);
    if (isNaN(dateOfBirth.getTime())) {
      return NextResponse.json(
        { success: false, error: "Invalid dateOfBirth" },
        { status: 400 }
      );
    }

    // Create or update artist request
    const artistRequest = await prisma.artistRequest.upsert({
      where: { userId: user.id },
      update: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        country: validatedData.country,
        city: validatedData.city,
        dateOfBirth,
        bio: validatedData.bio,
        portfolio: validatedData.portfolio,
        experienceYears: validatedData.experienceYears,
        artStyle: validatedData.artStyle,
        socialLinks: validatedData.socialLinks,
        status: user.artistRequest?.status === "REJECTED" ? "PENDING" : undefined, // Only reset to PENDING if previously REJECTED
        submittedAt: new Date(),
        reviewedAt: user.artistRequest?.status === "REJECTED" ? null : undefined, // Preserve reviewedAt unless REJECTED
      },
      create: {
        userId: user.id,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        country: validatedData.country,
        city: validatedData.city,
        dateOfBirth,
        bio: validatedData.bio,
        portfolio: validatedData.portfolio,
        experienceYears: validatedData.experienceYears,
        artStyle: validatedData.artStyle,
        socialLinks: validatedData.socialLinks,
        status: "PENDING",
        submittedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Artist application submitted successfully",
      data: { artistRequest },
    });
  } catch (error) {
    console.error("Error processing artist request:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to process request",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const privyUser = await getPrivyUser() as PrivyUser | null;

    if (!privyUser || !privyUser.userId) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    const artistRequest = await prisma.artistRequest.findUnique({
      where: {
        userId: (
          await prisma.user.findUnique({
            where: { privyId: privyUser.userId },
            select: { id: true },
          })
        )?.id,
      },
    });

    return NextResponse.json({
      success: true,
      data: { artistRequest },
    });
  } catch (error) {
    console.error("Error fetching artist request:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch request status",
      },
      { status: 500 }
    );
  }
}