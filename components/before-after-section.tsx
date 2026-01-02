"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function BeforeAfterSection() {
  const comparisons = [
    {
      label: "Eyes",
      before: "Darting to notes",
      after: "Locked on camera",
    },
    {
      label: "Delivery",
      before: "Fragmented, hesitant",
      after: "Smooth, confident",
    },
    {
      label: "Audience",
      before: "Distracted, skeptical",
      after: "Engaged, trusting",
    },
    {
      label: "You",
      before: "Anxious, distracted",
      after: "Focused, present",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Before & After Kyuva</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <span className="text-[#22c55e] text-sm font-medium uppercase tracking-wider">{item.label}</span>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500/50 rounded-full" />
                  <span className="text-[#888] text-sm line-through">{item.before}</span>
                </div>

                <div className="flex items-center gap-2 text-[#888]">
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full" />
                  <span className="text-white font-medium">{item.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
