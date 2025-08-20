// ==========================================================================
// Animation Constants (Moved from inline styles)
// ==========================================================================

export const animations = {
  // Email Header Animation
  emailHeader: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: 0.05,
    },
  },

  // Verification Content Animation
  verificationContent: {
    initial: { y: 15, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: 0.7,
    },
  },

  // OTP Input Animation
  otpInput: (index: number, prefersReduced: boolean) => ({
    initial: prefersReduced
      ? { opacity: 0 }
      : { opacity: 0, y: 4, scale: 0.98 },
    animate: prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: 0.45,
      ease: [0.22, 0.61, 0.36, 1] as const,
      delay: index * 0.08 + 1.4,
    },
  }),

  // Button Hover Animations
  buttonHover: (prefersReduced: boolean) => ({
    whileHover: prefersReduced ? {} : { scale: 1.02 },
    whileTap: prefersReduced ? {} : { scale: 0.98 },
  }),

  // Loading Spinner Animation
  loadingSpinner: (prefersReduced: boolean) => ({
    initial: {
      opacity: 0,
      scale: prefersReduced ? 1 : 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: prefersReduced ? 1 : 0.9,
    },
  }),

  // Layout Transitions
  layoutTransition: {
    layout: { duration: 0.38, ease: [0.22, 0.61, 0.36, 1] as const },
  },

  // Transform Origin
  transformOrigin: {
    style: { transformOrigin: "top center" },
  },
};
