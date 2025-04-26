"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { artistRequestSchema, ArtistRequestFormValues } from "@/lib/validations/artist-request";
import styled from "styled-components";
import ReactFlagsSelect from "react-flags-select";

// Styled Components
const FormContainer = styled.div`
  max-width: 672px;
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-family: "Georgia", serif;

  @media (max-width: 640px) {
    width: 95%;
    border-radius: 8px;
  }
`;

const Header = styled.div`
  background-color: #000000;
  padding: 20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media (max-width: 640px) {
    padding: 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

const HeaderTitle = styled.h2`
  font-size: clamp(1.5rem, 5vw, 1.75rem);
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
`;

const HeaderDescription = styled.p`
  font-size: clamp(0.875rem, 4vw, 1rem);
  color: #cccccc;
  text-align: center;
  margin-top: 8px;
`;

const FormContent = styled.div`
  padding: 32px;

  @media (max-width: 640px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 640px) {
    gap: 32px;
  }
`;

const ErrorMessage = styled.div`
  background-color: #fee2e2;
  border: 1px solid #dc2626;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
`;

const SectionTitle = styled.h3`
  font-size: clamp(1.125rem, 4.5vw, 1.25rem);
  font-weight: 600;
  color: #000000;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &[data-isopen="true"]::after {
    content: "\\2212";
  }
  &[data-isopen="false"]::after {
    content: "\\002B";
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #333333;
  margin: 16px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: clamp(0.875rem, 4vw, 1rem);
  font-weight: 500;
  color: #000000;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: clamp(0.75rem, 3.5vw, 0.875rem);
  color: #000000;
  background-color: #f5f5f5;
  border: 1px solid #333333;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  resize: vertical;

  &:focus {
    border-color: #000000;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  &[data-haserror="true"] {
    border-color: #dc2626;
    background-color: #fef2f2;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: clamp(0.75rem, 3.5vw, 0.875rem);
  color: #000000;
  background-color: #f5f5f5;
  border: 1px solid #333333;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #000000;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  &[data-haserror="true"] {
    border-color: #dc2626;
    background-color: #fef2f2;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

const FlagsSelectWrapper = styled.div`
  .rfs {
    width: 100%;
  }

  .rfs__button {
    width: 100%;
    padding: 12px;
    font-size: clamp(0.75rem, 3.5vw, 0.875rem);
    color: #000000;
    background-color: #f5f5f5;
    border: 1px solid #333333;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    font-family: "Georgia", serif;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:focus {
      border-color: #000000;
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
    }

    &[data-haserror="true"] {
      border-color: #dc2626;
      background-color: #fef2f2;
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }
  }

  .rfs__menu {
    border: 1px solid #333333;
    border-radius: 6px;
    background-color: #ffffff;
    font-family: "Georgia", serif;
    max-height: 200px;
    overflow-y: auto;
  }

  .rfs__option {
    color: #000000;
    padding: 12px;
    font-size: clamp(0.75rem, 3.5vw, 0.875rem);
  }

  .rfs__option--is-selected {
    background-color: #000000;
    color: #ffffff;
  }

  .rfs__option:hover {
    background-color: #f5f5f5;
  }

  .rfs__label {
    margin-left: 8px;
  }

  .rfs__search-box {
    padding: 12px;
    border-bottom: 1px solid #333333;
  }

  .rfs__search-box input {
    width: 100%;
    padding: 8px;
    font-size: clamp(0.75rem, 3.5vw, 0.875rem);
    color: #000000;
    background-color: #f5f5f5;
    border: 1px solid #333333;
    border-radius: 6px;
    outline: none;
    font-family: "Georgia", serif;
  }
`;

const HelperText = styled.p`
  margin-top: 8px;
  font-size: clamp(0.625rem, 3vw, 0.75rem);
  color: #666666;
`;

const ErrorText = styled.p`
  margin-top: 8px;
  font-size: clamp(0.625rem, 3vw, 0.75rem);
  color: #dc2626;
  font-weight: 500;
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  font-size: clamp(0.875rem, 4vw, 1rem);
  font-weight: 500;
  color: #ffffff;
  background-color: #000000;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #333333;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Footer = styled.div`
  padding: 20px 32px;
  border-top: 1px solid #333333;
  text-align: center;

  @media (max-width: 640px) {
    padding: 16px 24px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
  }
`;

const FooterText = styled.p`
  font-size: clamp(0.625rem, 3vw, 0.75rem);
  color: #666666;
`;

const Section = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export function ArtistRequestForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [openSections, setOpenSections] = useState({
    personal: true,
    artStyle: false,
  });

  const form = useForm<ArtistRequestFormValues>({
    resolver: zodResolver(artistRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      dateOfBirth: "",
      bio: "",
      portfolio: "",
      experienceYears: 1,
      artStyle: "",
      socialLinks: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: ArtistRequestFormValues) {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const response = await fetch("/api/artist-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit request");

      setFormStatus("success");
      toast.success("Application Submitted", {
        description: "Your artist application has been submitted successfully.",
      });

      setTimeout(() => router.push("/request-submitted"), 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      toast.error("Submission Failed", {
        description: "There was a problem submitting your application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const toggleSection = (section: "personal" | "artStyle") => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <FormContainer>
      <Header>
        <HeaderTitle>Become an Artist</HeaderTitle>
        <HeaderDescription>
          Showcase your creativity and join our platform. Complete the form to apply.
        </HeaderDescription>
      </Header>

      <FormContent>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          {formStatus === "error" && (
            <ErrorMessage role="alert">
              <strong>Error!</strong> There was an error submitting your application. Please verify all fields and try again.
            </ErrorMessage>
          )}

          {/* Personal Information Section */}
          <div>
            <SectionTitle data-isopen={openSections.personal} onClick={() => toggleSection("personal")}>
              Personal Information
            </SectionTitle>
            <Divider />
            <Section $isOpen={openSections.personal}>
              <Grid>
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="e.g., Jane"
                    data-haserror={!!form.formState.errors.firstName}
                    {...form.register("firstName")}
                    aria-invalid={!!form.formState.errors.firstName}
                    aria-describedby="firstName-error"
                  />
                  {form.formState.errors.firstName && (
                    <ErrorText id="firstName-error">{form.formState.errors.firstName.message}</ErrorText>
                  )}
                  <HelperText>Your given name.</HelperText>
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="e.g., Doe"
                    data-haserror={!!form.formState.errors.lastName}
                    {...form.register("lastName")}
                    aria-invalid={!!form.formState.errors.lastName}
                    aria-describedby="lastName-error"
                  />
                  {form.formState.errors.lastName && (
                    <ErrorText id="lastName-error">{form.formState.errors.lastName.message}</ErrorText>
                  )}
                  <HelperText>Your family name.</HelperText>
                </div>
              </Grid>
              <Grid>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <FlagsSelectWrapper>
                    <Controller
                      name="country"
                      control={form.control}
                      render={({ field }) => (
                        <ReactFlagsSelect
                          selected={field.value}
                          onSelect={(code) => field.onChange(code)}
                          searchable
                          searchPlaceholder="Search countries"
                          className="rfs"
                          data-haserror={!!form.formState.errors.country}
                          aria-invalid={!!form.formState.errors.country}
                          aria-describedby="country-error"
                        />
                      )}
                    />
                  </FlagsSelectWrapper>
                  {form.formState.errors.country && (
                    <ErrorText id="country-error">{form.formState.errors.country.message}</ErrorText>
                  )}
                  <HelperText>Your country of residence.</HelperText>
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    type="text"
                    id="city"
                    placeholder="e.g., New York"
                    data-haserror={!!form.formState.errors.city}
                    {...form.register("city")}
                    aria-invalid={!!form.formState.errors.city}
                    aria-describedby="city-error"
                  />
                  {form.formState.errors.city && (
                    <ErrorText id="city-error">{form.formState.errors.city.message}</ErrorText>
                  )}
                  <HelperText>Your city of residence.</HelperText>
                </div>
              </Grid>
              <Grid>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    type="date"
                    id="dateOfBirth"
                    data-haserror={!!form.formState.errors.dateOfBirth}
                    {...form.register("dateOfBirth")}
                    aria-invalid={!!form.formState.errors.dateOfBirth}
                    aria-describedby="dateOfBirth-error"
                  />
                  {form.formState.errors.dateOfBirth && (
                    <ErrorText id="dateOfBirth-error">{form.formState.errors.dateOfBirth.message}</ErrorText>
                  )}
                  <HelperText>Enter your birth date (must be 18 or older).</HelperText>
                </div>
              </Grid>
              <div>
                <Label htmlFor="bio">Artist Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your artistic journey, inspirations, and what drives your creativity..."
                  rows={5}
                  data-haserror={!!form.formState.errors.bio}
                  {...form.register("bio")}
                  aria-invalid={!!form.formState.errors.bio}
                  aria-describedby="bio-error"
                />
                {form.formState.errors.bio && (
                  <ErrorText id="bio-error">{form.formState.errors.bio.message}</ErrorText>
                )}
                <HelperText>This will be displayed on your artist profile.</HelperText>
              </div>
              <Grid>
                <div>
                  <Label htmlFor="portfolio">Portfolio URL</Label>
                  <Input
                    type="url"
                    id="portfolio"
                    placeholder="https://your-portfolio.com"
                    data-haserror={!!form.formState.errors.portfolio}
                    {...form.register("portfolio")}
                    aria-invalid={!!form.formState.errors.portfolio}
                    aria-describedby="portfolio-error"
                  />
                  {form.formState.errors.portfolio && (
                    <ErrorText id="portfolio-error">{form.formState.errors.portfolio.message}</ErrorText>
                  )}
                  <HelperText>Link to your online portfolio (e.g., Behance, ArtStation).</HelperText>
                </div>
                <div>
                  <Label htmlFor="experienceYears">Years of Experience</Label>
                  <Input
                    type="number"
                    id="experienceYears"
                    min="0"
                    data-haserror={!!form.formState.errors.experienceYears}
                    {...form.register("experienceYears", { valueAsNumber: true })}
                    aria-invalid={!!form.formState.errors.experienceYears}
                    aria-describedby="experienceYears-error"
                  />
                  {form.formState.errors.experienceYears && (
                    <ErrorText id="experienceYears-error">{form.formState.errors.experienceYears.message}</ErrorText>
                  )}
                  <HelperText>Years of professional or serious artistic experience.</HelperText>
                </div>
              </Grid>
            </Section>
          </div>

          {/* Art Style & Social Presence Section */}
          <div>
            <SectionTitle data-isopen={openSections.artStyle} onClick={() => toggleSection("artStyle")}>
              Art Style & Social Presence
            </SectionTitle>
            <Divider />
            <Section $isOpen={openSections.artStyle}>
              <div>
                <Label htmlFor="artStyle">Primary Art Style</Label>
                <Input
                  type="text"
                  id="artStyle"
                  placeholder="e.g., Abstract, Realism, Digital Illustration"
                  data-haserror={!!form.formState.errors.artStyle}
                  {...form.register("artStyle")}
                  aria-invalid={!!form.formState.errors.artStyle}
                  aria-describedby="artStyle-error"
                />
                {form.formState.errors.artStyle && (
                  <ErrorText id="artStyle-error">{form.formState.errors.artStyle.message}</ErrorText>
                )}
                <HelperText>Describe your primary artistic style or medium.</HelperText>
              </div>
              <div>
                <Label htmlFor="socialLinks">Social Media Links (Optional)</Label>
                <Textarea
                  id="socialLinks"
                  rows={3}
                  placeholder="e.g., Instagram: https://instagram.com/your-username"
                  data-haserror={!!form.formState.errors.socialLinks}
                  {...form.register("socialLinks")}
                  aria-invalid={!!form.formState.errors.socialLinks}
                  aria-describedby="socialLinks-error"
                />
                {form.formState.errors.socialLinks && (
                  <ErrorText id="socialLinks-error">{form.formState.errors.socialLinks.message}</ErrorText>
                )}
                <HelperText>Share links to your social media profiles (one per line).</HelperText>
              </div>
            </Section>
          </div>

          <SubmitButton type="submit" disabled={isSubmitting || !form.formState.isValid}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </SubmitButton>
        </Form>
      </FormContent>

      <Footer>
        <FooterText>
          Our team reviews applications within 3-5 business days. You'll hear from us soon!
        </FooterText>
      </Footer>
    </FormContainer>
  );
}