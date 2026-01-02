import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VoiceActivationSection } from "@/components/voice-activation-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProblemSection } from "@/components/problem-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { FeaturesBentoSection } from "@/components/features-bento-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px] opacity-25" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <VoiceActivationSection />
        <HowItWorksSection />
        <ProblemSection />
        <UseCasesSection />
        <FeaturesBentoSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </div>
    </main>
  )
}
