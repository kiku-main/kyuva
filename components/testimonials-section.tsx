"use client"

import { motion } from "framer-motion"
import { Star, TrendingUp } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I thought I was a natural presenter. Kyuva proved I can be even better.",
      author: "Sarah Chen",
      role: "Product Manager",
    },
    {
      quote: "My YouTube watch time increased 40% after using Kyuva. Eye contact matters.",
      author: "Marcus Johnson",
      role: "Content Creator",
    },
    {
      quote: "Game changer for webinars. Eight hours of teaching, zero awkward pauses.",
      author: "Dr. Emily Woods",
      role: "Online Educator",
    },
    {
      quote: "Finally, a teleprompter that doesn't make me look like I'm reading.",
      author: "Alex Rivera",
      role: "Sales Director",
    },
    {
      quote: "The voice activation is magic. It feels like the text reads my mind.",
      author: "Jordan Lee",
      role: "Podcast Host",
    },
    {
      quote: "Closed 3 enterprise deals last month. Kyuva keeps me sharp on every call.",
      author: "Michael Torres",
      role: "Enterprise Sales Rep",
    },
    {
      quote: "My students say I'm more engaging now. Little do they know my secret weapon.",
      author: "Prof. Linda Martinez",
      role: "University Lecturer",
    },
    {
      quote: "From nervous to natural in one tool. Best investment for my coaching business.",
      author: "Rachel Kim",
      role: "Executive Coach",
    },
    {
      quote: "I record 20 videos a week. Kyuva cut my editing time in half.",
      author: "Chris Anderson",
      role: "Course Creator",
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
          className="text-center mb-12"
        >
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-sm text-[#888]">5.0 from early users</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Loved by content creators & professionals
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <p className="text-white/90 mb-6 text-lg leading-relaxed">{`"${testimonial.quote}"`}</p>
              <div>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-[#888] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(6, 9).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <p className="text-white/90 mb-6 text-lg leading-relaxed">{`"${testimonial.quote}"`}</p>
              <div>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-[#888] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Story Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 bg-gradient-to-br from-[#22c55e]/10 to-cyan-500/10 border border-[#22c55e]/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#22c55e]" />
            <span className="text-[#22c55e] font-medium text-sm">Success Story</span>
          </div>
          <p className="text-white/90 mb-4 text-xl leading-relaxed max-w-3xl">
            {`"Switched from physical teleprompter to Kyuva. Saved $400 on equipment and my videos look 10x more natural. My audience engagement went up 60% in just two months."`}
          </p>
          <div>
            <p className="text-white font-medium">David Kim</p>
            <p className="text-[#888] text-sm">YouTube Creator, 250K subscribers</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
