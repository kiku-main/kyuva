"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Apple, Monitor, Smartphone, Chrome } from "lucide-react"

export function FinalCTASection() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/20 to-cyan-500/20 blur-3xl rounded-3xl opacity-30" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              From glancing at notes to owning the room.
              <br />
              <span className="text-[#22c55e]">In 60 seconds.</span>
            </h2>
            <p className="text-lg text-[#888] mb-10 max-w-xl mx-auto">
              {"Download Kyuva. Add your first script. Hit Play. That's it."}
            </p>

            {/* Platform Download Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button size="lg" className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-semibold px-6">
                <Apple className="mr-2 h-5 w-5" />
                Mac
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/5 px-6"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Windows
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/5 px-6"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                iOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/5 px-6"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Android
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/5 px-6"
              >
                <Chrome className="mr-2 h-5 w-5" />
                Chrome Extension
              </Button>
            </div>

            {/* Trust Text */}
            <p className="text-[#888] text-sm">Join 1,000+ creators and professionals</p>

            {/* MacBook Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 max-w-3xl mx-auto"
            >
              <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-white/10 p-2 shadow-2xl">
                <div className="bg-[#0a0a0a] rounded-xl overflow-hidden aspect-[16/10] relative">
                  {/* Camera/Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a0a] rounded-b-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#333] rounded-full" />
                  </div>

                  {/* Kyuva overlay */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#1a1a1a]/90 backdrop-blur-xl border border-[#22c55e]/30 rounded-lg px-4 py-3 max-w-xs shadow-lg shadow-[#22c55e]/10">
                    <p className="text-sm text-white/90 leading-relaxed">
                      {"Thank you for joining us today. I'm thrilled to present..."}
                    </p>
                  </div>

                  {/* Content area */}
                  <div className="absolute inset-0 top-20 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#1a1a1a] rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#333] rounded-full" />
                      </div>
                      <p className="text-[#888] text-sm">Your confident presentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
