import { Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#888] text-sm">© 2026 KikuAI</p>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-[#888] hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="/support" className="text-[#888] hover:text-white text-sm transition-colors">
              Support
            </a>
            <a
              href="https://github.com/KikuAI-Lab/kyuva"
              className="text-[#888] hover:text-white transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/kikuai_dev"
              className="text-[#888] hover:text-white transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
