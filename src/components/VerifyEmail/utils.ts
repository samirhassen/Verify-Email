/* ==========================================================================
   VerifyEmail Component Utilities
   ========================================================================== */

import { VALIDATION } from "./constants";

/**
 * Validates email format and checks if domain has minimum length
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || !VALIDATION.EMAIL_REGEX.test(email)) {
    return false;
  }

  const domain = email.split("@")[1];
  return Boolean(domain && domain.length >= VALIDATION.MIN_DOMAIN_LENGTH);
};

/**
 * Extracts domain from email address
 */
export const extractDomain = (email: string): string | null => {
  const match = email.match(/@(.+)$/);
  return match ? match[1] : null;
};

/**
 * Formats email for display (truncates if too long)
 */
export const formatEmailForDisplay = (
  email: string,
  maxLength: number = 30,
): string => {
  if (email.length <= maxLength) {
    return email;
  }

  const [localPart, domain] = email.split("@");
  const truncatedLocal =
    localPart.substring(0, maxLength - domain.length - 4) + "...";
  return `${truncatedLocal}@${domain}`;
};

/**
 * Generates OTP code input array
 */
export const generateOTPArray = (length: number = 6): string[] => {
  return Array(length).fill("");
};

/**
 * Checks if OTP is complete
 */
export const isOTPComplete = (otp: string[]): boolean => {
  return otp.every((digit) => digit.length === 1);
};

/**
 * Formats OTP for display
 */
export const formatOTP = (otp: string[]): string => {
  return otp.join("");
};
