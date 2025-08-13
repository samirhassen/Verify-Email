"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to OnlineMed
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your comprehensive online medical platform with beautiful animations
            powered by Framer Motion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedCard
            title="Telemedicine"
            description="Connect with healthcare providers from the comfort of your home"
            delay={0.1}
          />
          <AnimatedCard
            title="Health Records"
            description="Access and manage your medical records securely online"
            delay={0.2}
          />
          <AnimatedCard
            title="Appointments"
            description="Schedule and manage your medical appointments easily"
            delay={0.3}
          />
          <AnimatedCard
            title="Prescriptions"
            description="Get your prescriptions refilled and delivered to your door"
            delay={0.4}
          />
          <AnimatedCard
            title="Health Tips"
            description="Daily health tips and wellness advice from experts"
            delay={0.5}
          />
          <AnimatedCard
            title="Emergency Care"
            description="24/7 emergency medical consultation and support"
            delay={0.6}
          />
        </div>
      </div>
    </main>
  );
}
