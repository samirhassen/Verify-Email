"use client";

import { motion } from "framer-motion";

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
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
    >
      <motion.h3
        className="text-xl font-bold text-gray-800 mb-2"
        whileHover={{ color: "#3B82F6" }}
      >
        {title}
      </motion.h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
