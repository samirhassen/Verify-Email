/* ==========================================================================
   VerifyEmail Component Types
   ========================================================================== */

export type View = "idle" | "typing" | "verifying" | "otp";

// Future props can be added here as needed
export type VerifyEmailProps = Record<string, never>;

export interface EmailValidationResult {
  isValid: boolean;
  domain?: string;
}

export interface OTPVerificationResult {
  success: boolean;
  message?: string;
}
