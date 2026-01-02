"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How does Kyuva stay hidden from screen sharing?",
      answer:
        "Kyuva uses native OS-level window exclusion to mark the overlay as non-capturable. This means screen recording software, video call apps, and streaming tools automatically skip the Kyuva window.",
    },
    {
      question: "Does voice activation record my audio?",
      answer:
        "No. Voice detection happens entirely on your device using local processing. Your audio is never recorded, stored, or sent anywhere. Privacy is built into the core design.",
    },
    {
      question: "Which video apps are supported?",
      answer:
        "Kyuva works with any app—Zoom, Google Meet, Microsoft Teams, OBS, Loom, and more. Since it floats above all windows and is excluded from capture, it's compatible with everything.",
    },
    {
      question: "Is there a subscription?",
      answer:
        "No subscriptions. The Pro version is a one-time purchase of $19. You own it forever, including all future updates.",
    },
    {
      question: "Does it work with external monitors?",
      answer:
        "Yes! You can position the Kyuva overlay on any screen. Most users place it near their webcam, whether that's on an external monitor or their laptop display.",
    },
    {
      question: "Can I use it on multiple devices?",
      answer:
        "Yes. Your Pro license works across all your devices—Mac, Windows, iOS, Android, and browser extensions. Just sign in once on each device.",
    },
    {
      question: "What's the difference between Free and Pro?",
      answer:
        "Free gives you 3 scripts with auto-scroll. Pro unlocks unlimited scripts, voice-activated scrolling, custom hotkeys, and priority support.",
    },
    {
      question: "How do I get a refund?",
      answer:
        "Email us within 30 days of purchase and we'll refund you, no questions asked. We want you to be completely satisfied with Kyuva.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQ</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#888] pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
