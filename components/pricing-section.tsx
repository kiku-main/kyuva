"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full text-[#22c55e] text-sm font-medium mb-6">
            Early Adopter Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">One payment. Yours forever.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-[#888]">forever</span>
            </div>

            <ul className="space-y-3 mb-8">
              {["3 scripts", "Auto-scroll", "Always on Top"].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22c55e]" />
                  <span className="text-[#888]">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="w-full border-white/20 bg-transparent text-white hover:bg-white/5 py-6"
            >
              Download Free
            </Button>
          </motion.div>

          {/* Pro Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-b from-[#22c55e]/10 to-transparent border border-[#22c55e]/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <Sparkles className="w-5 h-5 text-[#22c55e]" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-lg text-[#888] line-through">$29</span>
              <span className="text-4xl font-bold text-white">$19</span>
              <span className="text-[#888]">one-time</span>
            </div>
            <p className="text-sm text-[#888] mb-6">
              <span className="line-through">Total Value: $99+</span>
            </p>

            <ul className="space-y-3 mb-8">
              {["Unlimited scripts", "Voice activation", "Custom hotkeys", "Priority support"].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22c55e]" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-semibold py-6">
              Upgrade to Pro - $19
            </Button>
          </motion.div>
        </div>

        {/* Trust Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-[#888] text-sm mt-8"
        >
          30-day money-back guarantee • Secure checkout by Stripe
        </motion.p>
      </div>
    </section>
  )
}
