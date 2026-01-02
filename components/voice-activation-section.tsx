"use client"

import { motion } from "framer-motion"
import { Mic, Pause, Shield, Keyboard } from "lucide-react"

export function VoiceActivationSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full text-[#22c55e] text-sm font-medium mb-6">
            The Feature That Changes Everything
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Scroll With Your Voice. Zero Effort.
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-[#888] text-lg">
            <p>
              Speak naturally, and Kyuva scrolls your script in perfect sync. Pause to think, and the text waits with
              you.
            </p>
            <p>No foot pedals. No remote controls. Just your voice guiding the words.</p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Animated Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              {/* Waveform visualization */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#22c55e]/20 rounded-full flex items-center justify-center">
                  <Mic className="w-6 h-6 text-[#22c55e]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-end gap-1 h-8">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 bg-[#22c55e] rounded-full"
                        animate={{
                          height: [8, Math.random() * 24 + 8, 8],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.05,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Scrolling text demo */}
              <div className="bg-[#0a0a0a] rounded-lg p-4 h-48 overflow-hidden relative">
                <motion.div
                  animate={{ y: [-20, -100, -20] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="space-y-3"
                >
                  <p className="text-white/40 text-sm">{"...and that's why our Q3 results exceeded expectations."}</p>
                  <p className="text-white text-sm">
                    {"Looking ahead to Q4, we're focusing on three key initiatives."}
                  </p>
                  <p className="text-white text-sm">
                    First, expanding our enterprise partnerships across Europe and Asia.
                  </p>
                  <p className="text-white/60 text-sm">Second, launching our new AI-powered features in beta.</p>
                  <p className="text-white/40 text-sm">Third, optimizing our customer success operations.</p>
                  <p className="text-white/20 text-sm">{"Let me walk you through each of these in detail..."}</p>
                </motion.div>
                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Benefit Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              {
                icon: Mic,
                title: "Hands-free",
                description: "Focus on your presentation, not on scrolling",
              },
              {
                icon: Pause,
                title: "Smart Pause",
                description: "Automatically stops when you stop speaking",
              },
              {
                icon: Shield,
                title: "Privacy First",
                description: "Audio never leaves your device",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#22c55e]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-[#888] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Manual Control Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
            <Keyboard className="w-4 h-4 text-[#888]" />
            <span className="text-sm text-[#888]">Prefer manual control? Use keyboard, mouse, or tap to scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
