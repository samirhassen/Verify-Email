"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  useReducedMotion,
} from "framer-motion";
import styles from "./VerifyEmail.module.css";
import { View } from "./types";
import { isValidEmail, generateOTPArray } from "./utils";
import { animations } from "../../app/animations";

export default function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [view, setView] = useState<View>("idle");
  const [code, setCode] = useState(generateOTPArray(6));

  const emailRef = useRef<HTMLInputElement>(null);
  const otpRefs = useMemo(
    () => Array.from({ length: 6 }, () => React.createRef<HTMLInputElement>()),
    [],
  );
  const prefersReduced = useReducedMotion();

  const isValid = isValidEmail;

  const goVerifying = async () => {
    if (!isValid(email)) return;
    setView("verifying");
    await new Promise((r) => setTimeout(r, 300));
    setView("otp");
  };

  const back = () => {
    setView((prev) => (prev === "otp" ? "typing" : "idle"));
    setCode(generateOTPArray(6));
  };

  useEffect(() => {
    if (view === "otp") otpRefs[0].current?.focus();
    if (view === "typing") emailRef.current?.focus();
  }, [view, otpRefs]);

  const bezOut = [0.22, 0.61, 0.36, 1] as const; // smooth, slightly springy
  const bezIn = [0.4, 0, 1, 1] as const; // fast exit
  const timings = {
    in: { duration: 0.45, ease: bezOut },
    out: { duration: 0.25, ease: bezIn },
    stag: 0.06,
  };

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: timings.in },
    exit: { opacity: 0, y: prefersReduced ? 0 : -6, transition: timings.out },
  };

  const cardInitial = {
    opacity: 0,
    y: prefersReduced ? 0 : 8,
    scale: prefersReduced ? 1 : 0.995,
  };
  const cardEnter = {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...timings.in, layout: { duration: 0.38, ease: bezOut } },
  };
  const cardExit = {
    opacity: 0,
    scale: prefersReduced ? 1 : 0.995,
    transition: { ...timings.out, layout: { duration: 0.22, ease: bezIn } },
  };

  const otpKeyframes = prefersReduced
    ? { opacity: [0, 1] }
    : { opacity: [0, 1], y: [8, 0], scale: [0.98, 1.02, 1] };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setEmail(v);
    if (v && view === "idle") setView("typing");
  };

  const onCodeChange = (i: number, v: string) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...code];
    next[i] = v;
    setCode(next);
    if (v && i < 5) otpRefs[i + 1].current?.focus();
  };

  const onCodeKeyDown = (
    i: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[i] && i > 0)
      otpRefs[i - 1].current?.focus();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[354px_1fr] min-h-screen">
        {/* LEFT PANEL (kept as-is) */}
        <div className={styles.leftPanel}>
          <div className={styles.onlinemedBrand}>OnlineMed</div>

          <div className={styles.moneyBackGuarantee}>
            <img
              src="/icon.png"
              alt="Money Back Guarantee"
              className={styles.moneyBackGuaranteeIcon}
            />
            <span className={styles.moneyBackGuaranteeText}>
              Money Back Guarantee
            </span>
          </div>

          <h1 className={styles.mainHeadline}>
            Your <span className={styles.highlightText}>Work</span> Note
            <br />
            is Minutes Away
          </h1>

          <p className={styles.description}>
            Note: Due to capacity we are currently only able to provide a
            limited number of notes per day. To see if you qualify please fill
            out the following short survey!
          </p>

          <div className={styles.testimonial}>
            <div className={styles.testimonialCard}>
              <div className="flex items-start gap-3">
                <div className={styles.avatar}>NP</div>
                <div className={styles.userInfo}>
                  <div className={styles.userName}>Nick P.</div>
                  <div className={styles.userLocation}>Student • New York</div>
                </div>
              </div>
              <div className={styles.ratingAndTimestamp}>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img
                      key={i}
                      src="/star.png"
                      alt="star"
                      className={styles.starIcon}
                    />
                  ))}
                </div>
                <div className={styles.timestamp}>1 week ago</div>
              </div>
              <p className={styles.testimonialText}>
                Woke up with severe stomach flu and needed documentation for
                work. The doctor was thorough, professional, and I had my note
                in minutes.
              </p>
            </div>
            <div className={styles.carouselDots}>
              <div className={`${styles.dot} ${styles.dotActive}`} />
              <div className={`${styles.dot} ${styles.dotInactive}`} />
              <div className={`${styles.dot} ${styles.dotInactive}`} />
            </div>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <motion.div
            className={styles.formContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={fadeUp}
          >
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={fadeUp}
            >
              <div className={styles.stepIndicator}>
                Step 3<span className={styles.stepTotal}>/9</span>
              </div>
              <h2 className={styles.question}>What is your email?</h2>
              <p className={styles.subtitle}>This is where we send the note</p>
            </motion.div>

            <LayoutGroup>
              <AnimatePresence mode="popLayout">
                {(view === "idle" ||
                  view === "typing" ||
                  view === "verifying") && (
                  <motion.div
                    key="email"
                    layout
                    layoutId="emailCard"
                    className={styles.morphContainer}
                    {...animations.transformOrigin}
                    initial={cardInitial}
                    animate={cardEnter}
                    exit={cardExit}
                    transition={{ layout: { duration: 0.38, ease: bezOut } }}
                  >
                    <motion.div
                      layoutId="emailHeader"
                      className="h-0 overflow-hidden"
                      aria-hidden
                    />

                    <div className={styles.emailInputContainer}>
                      <input
                        ref={emailRef}
                        type="email"
                        inputMode="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={onEmailChange}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && isValid(email))
                            goVerifying();
                        }}
                        className={styles.emailInput}
                        aria-label="Email address"
                      />

                      <AnimatePresence>
                        {isValid(email) &&
                          (view === "typing" || view === "verifying") && (
                            <motion.span
                              key="spinner"
                              className={
                                styles.loadingSpinner +
                                " h-5 w-5 border-2 border-primary/30 border-t-primary rounded-full"
                              }
                              {...animations.loadingSpinner(
                                prefersReduced ?? false,
                              )}
                              animate={{
                                ...animations.loadingSpinner(
                                  prefersReduced ?? false,
                                ).animate,
                                transition: timings.in,
                              }}
                              exit={{
                                ...animations.loadingSpinner(
                                  prefersReduced ?? false,
                                ).exit,
                                transition: timings.out,
                              }}
                            />
                          )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}

                {view === "otp" && (
                  <motion.div
                    key="otp"
                    layout
                    layoutId="emailCard"
                    className={styles.verificationSection}
                    {...animations.transformOrigin}
                    initial={cardInitial}
                    animate={cardEnter}
                    exit={cardExit}
                    transition={{ layout: { duration: 0.38, ease: bezOut } }}
                  >
                    <motion.div
                      layoutId="emailHeader"
                      className={styles.verificationHeader}
                      {...animations.emailHeader}
                    >
                      <div className={styles.emailInfo}>
                        <span className={styles.emailLabel}>Email</span>
                        <span className={styles.emailAddress}>{email}</span>
                      </div>
                      <button
                        className={styles.changeButton}
                        onClick={() => setView("typing")}
                      >
                        Change
                      </button>
                    </motion.div>

                    <motion.div
                      className={styles.verificationContent}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.7,
                      }}
                    >
                      <h2 className={styles.verificationTitle}>
                        Enter verification code
                      </h2>
                      <p className={styles.verificationSubtitle}>
                        Enter the code sent to{" "}
                        <span className={styles.emailHighlight}>{email}</span>{" "}
                        to use your saved information.
                      </p>

                      <div className={styles.codeInputs}>
                        {code.map((digit, i) => (
                          <motion.input
                            key={i}
                            ref={otpRefs[i]}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            aria-label={`Digit ${i + 1}`}
                            value={digit}
                            onChange={(e) => onCodeChange(i, e.target.value)}
                            onKeyDown={(e) => onCodeKeyDown(i, e)}
                            className={styles.codeInput}
                            initial={
                              prefersReduced
                                ? { opacity: 0 }
                                : { opacity: 0, y: 4, scale: 0.98 }
                            }
                            animate={{
                              ...otpKeyframes,
                              transition: {
                                ...timings.in,
                                delay: i * 0.08 + 1.4,
                              },
                            }}
                          />
                        ))}
                      </div>

                      <div className={styles.resendOption}>
                        <span>{"Didn't receive a code? "}</span>
                        <button className={styles.resendButton}>
                          Send again
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Navigation Buttons - Always Outside OTP Frame */}
                <div className={styles.navigationButtons}>
                  <motion.button
                    className={styles.backButton}
                    onClick={back}
                    whileHover={prefersReduced ? {} : { scale: 1.02 }}
                    whileTap={prefersReduced ? {} : { scale: 0.98 }}
                  >
                    <svg
                      className={styles.backArrow}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Back
                  </motion.button>

                  <motion.button
                    className={
                      view === "otp"
                        ? code.every((c) => c)
                          ? styles.nextButtonEnabled
                          : styles.nextButtonDisabled
                        : isValid(email)
                          ? styles.nextButtonEnabled
                          : styles.nextButtonDisabled
                    }
                    disabled={
                      view === "otp"
                        ? !code.every((c) => c)
                        : !isValid(email) || view === "verifying"
                    }
                    onClick={view === "otp" ? undefined : goVerifying}
                    whileHover={prefersReduced ? {} : { scale: 1.02 }}
                    whileTap={prefersReduced ? {} : { scale: 0.98 }}
                  >
                    {view === "verifying" ? "Sending…" : "Next"}
                  </motion.button>
                </div>
              </AnimatePresence>
            </LayoutGroup>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
