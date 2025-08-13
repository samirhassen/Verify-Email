/* ==========================================================================
   VerifyEmail Component Constants
   ========================================================================== */

export const ANIMATION = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.6,
    SLOW: 1.0,
  },
  EASING: {
    BEZIER_OUT: [0.25, 0.46, 0.45, 0.94],
    BEZIER_IN: [0.55, 0.055, 0.675, 0.19],
  },
  DELAY: {
    HEADER: 0.05,
    CONTENT: 0.7,
    CODE_INPUT: 1.4,
  },
} as const;

export const VALIDATION = {
  MIN_DOMAIN_LENGTH: 2,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

export const LAYOUT = {
  SIDEBAR_WIDTH: 354,
  FORM_MAX_WIDTH: 660,
  INPUT_HEIGHT: 48,
  OTP_INPUT_SIZE: 56,
  BUTTON_HEIGHT: 50,
} as const;
