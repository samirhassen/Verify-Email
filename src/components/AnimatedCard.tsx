"use client";

import { motion } from "framer-motion";
import styles from "./AnimatedCard.module.css";

interface AnimatedCardProps {
  title: string;
  description: string;
  delay?: number;
}

export default function AnimatedCard({
  title,
  description,
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={styles.card}
    >
      <motion.h3 className={styles.title} whileHover={{ color: "#3B82F6" }}>
        {title}
      </motion.h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}
