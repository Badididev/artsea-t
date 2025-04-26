import { z } from "zod";

export const artistRequestSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be 50 characters or less"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be 50 characters or less"),
  country: z
    .string()
    .length(2, "Country must be a valid ISO 3166-1 alpha-2 code")
    .regex(/^[A-Z]{2}$/, "Country must be a valid ISO 3166-1 alpha-2 code"),
  city: z
    .string()
    .min(1, "City is required")
    .max(100, "City must be 100 characters or less"),
  dateOfBirth: z
    .string()
    .refine(
      (date) => {
        const parsedDate = new Date(date);
        const today = new Date();
        const minAgeDate = new Date(
          today.getFullYear() - 18,
          today.getMonth(),
          today.getDate()
        );
        return (
          parsedDate <= minAgeDate && parsedDate >= new Date(1900, 0, 1)
        );
      },
      "You must be at least 18 years old and the date must be valid"
    ),
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters")
    .max(1000, "Bio must be 1000 characters or less"),
  portfolio: z
    .string()
    .url("Must be a valid URL")
    .min(1, "Portfolio URL is required"),
  experienceYears: z
    .number()
    .min(0, "Experience years cannot be negative")
    .max(100, "Experience years must be realistic"),
  artStyle: z
    .string()
    .min(1, "Art style is required")
    .max(100, "Art style must be 100 characters or less"),
  socialLinks: z.string().optional(),
});

export type ArtistRequestFormValues = z.infer<typeof artistRequestSchema>;