"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sound familiar?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          {/* Story */}
          <div className="space-y-6 text-center">
            <p className="text-xl md:text-2xl text-[#888] italic">{'"You\'ve memorized the script... mostly."'}</p>
            <p className="text-xl md:text-2xl text-[#888] italic">{'"Just one quick glance at my notes..."'}</p>
            <p className="text-xl md:text-2xl text-white font-medium">Eyes dart down. The connection breaks.</p>
            <p className="text-xl md:text-2xl text-[#888]">Your audience notices. You feel it.</p>
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-[#22c55e]/10 to-cyan-500/10 border border-[#22c55e]/20 rounded-2xl p-8 my-12"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">The hard truth</h3>
                <p className="text-[#888] text-lg">People trust what they see. Looking away = losing them.</p>
              </div>
            </div>
          </motion.div>

          {/* Resolution */}
          <p className="text-xl md:text-2xl text-center text-white font-medium">
            Kyuva keeps your eyes where they belong—
            <span className="text-[#22c55e]"> on your audience.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
