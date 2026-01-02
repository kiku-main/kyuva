"use client"

import { motion } from "framer-motion"
import { FileText, Play, Mic } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Add Your Script",
      description: "Write notes, paste text, or import from file",
    },
    {
      number: "2",
      icon: Play,
      title: "Press Play",
      description: "Text appears near your camera, invisible to others",
    },
    {
      number: "3",
      icon: Mic,
      title: "Speak Naturally",
      description: "Voice-activated scrolling keeps pace with you",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Three steps to reading naturally
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-bold text-[#22c55e]/20">{step.number}</span>
                  <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#22c55e]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[#888]">{step.description}</p>

                {/* Screenshot placeholder */}
                <div className="mt-6 bg-[#0a0a0a] rounded-lg aspect-video flex items-center justify-center border border-white/5">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#333]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
