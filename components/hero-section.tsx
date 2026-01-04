"use client"

import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"
import { motion } from "framer-motion"

const APP_STORE_URL = "https://apps.apple.com/app/kyuva/id0000000000" // Update when live
const DMG_DOWNLOAD_URL = "https://github.com/KikuAI-Lab/kyuva/releases/latest/download/Kyuva-1.0.0.dmg"

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
            Your Invisible Teleprompter
          </h1>

          {/* Gradient Subheadline */}
          <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-white to-[#888] bg-clip-text text-transparent mb-8">
            Maintain natural eye contact. Every time.
          </p>

          {/* Three-line description */}
          <div className="flex flex-col gap-2 text-[#888] text-lg mb-10">
            <p>Text appears right next to your camera</p>
            <p>Hidden from screen recordings & video calls</p>
            <p>Voice-activated smooth scrolling</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0a0a0a] font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/20"
              asChild
            >
              <a href={DMG_DOWNLOAD_URL}>
                <Apple className="mr-2 h-5 w-5" />
                Download for Mac — Free
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/5 px-8 py-6 text-lg rounded-xl"
              asChild
            >
              <a href="#features">See It In Action</a>
            </Button>
          </div>

          {/* Platform Badge */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-white text-sm bg-white/10 px-3 py-1.5 rounded-full">
              <Apple className="h-4 w-4" />
              <span>macOS 13+</span>
            </div>
            <div className="flex items-center gap-2 text-[#888] text-sm">
              <span>Windows & iOS coming soon</span>
            </div>
          </div>
        </motion.div>

        {/* Product Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Glow effect behind the screenshot */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-3xl" />

            {/* MacBook mockup */}
            <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-white/10 p-2 shadow-2xl">
              {/* Screen */}
              <div className="bg-[#0a0a0a] rounded-xl overflow-hidden aspect-[16/10] relative">
                {/* Notch/Camera area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a0a] rounded-b-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#333] rounded-full" />
                </div>

                {/* Kyuva overlay demonstration */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 bg-[#1a1a1a]/90 backdrop-blur-xl border border-[#22c55e]/30 rounded-lg px-4 py-3 max-w-xs shadow-lg shadow-[#22c55e]/10">
                  <p className="text-sm text-white/90 leading-relaxed">
                    {"Welcome to our Q3 earnings call. I'm excited to share..."}
                  </p>
                </div>

                {/* Zoom call mockup */}
                <div className="absolute inset-0 top-16 p-4">
                  <div className="grid grid-cols-2 gap-2 h-full">
                    <div className="bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                      <div className="w-20 h-20 bg-[#333] rounded-full" />
                    </div>
                    <div className="bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                      <div className="w-20 h-20 bg-[#333] rounded-full" />
                    </div>
                    <div className="bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                      <div className="w-20 h-20 bg-[#333] rounded-full" />
                    </div>
                    <div className="bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                      <div className="w-20 h-20 bg-[#333] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform requirements */}
          <p className="text-center text-[#888] text-sm mt-6">
            Requires macOS 13.0 or later • Apple Silicon or Intel
          </p>
        </motion.div>
      </div>
    </section>
  )
}
