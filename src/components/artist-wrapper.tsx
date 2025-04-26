"use client";

import { useState } from "react";
import styled from "styled-components";

// Styled Components
const Form = styled.form`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 576px) {
    margin-top: 16px;
  AccumulationContext
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-family: "Georgia", serif;

  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 576px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-family: "Georgia", serif;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 576px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: #000000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #333333;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #666666;
    cursor: not-allowed;
  }

  @media (max-width: 576px) {
    padding: 10px 18px;
    font-size: 14px;
  }
`;

const ErrorMessage = styled.p`
  color: #721c24;
  font-size: 14px;
  font-family: "Georgia", serif;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const SuccessMessage = styled.p`
  color: #155724;
  font-size: 14px;
  font-family: "Georgia", serif;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

interface ArtistRequestWrapperProps {
  userId: string;
}

export function ArtistRequestWrapper({ userId }: ArtistRequestWrapperProps) {
  const [portfolio, setPortfolio] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/artist-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          portfolio,
          bio,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSuccess("Application submitted successfully!");
      setPortfolio("");
      setBio("");
    } catch (err) {
      setError("An error occurred while submitting your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="url"
        placeholder="Portfolio URL"
        value={portfolio}
        onChange={(e) => setPortfolio(e.target.value)}
        required
      />
      <Textarea
        placeholder="Tell us about yourself"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </SubmitButton>
    </Form>
  );
}