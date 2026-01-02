import { Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#888] text-sm">© 2025 KikuAI</p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-[#888] hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-[#888] hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[#888] hover:text-white text-sm transition-colors">
              Contact
            </a>
            <a href="#" className="text-[#888] hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-[#888] hover:text-white text-sm transition-colors">
              Product Hunt
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
