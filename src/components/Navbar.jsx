import { Menu, Phone } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 border border-white/20 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-zinc-700 border border-white/20 shadow-inner"></div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-wide text-sm">
                  LAC
                </p>
                <p className="text-white/60 text-xs">Rent a Car</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#fleet" className="text-white/80 hover:text-white transition">Fleet</a>
              <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
              <a href="#why" className="text-white/80 hover:text-white transition">Why LAC</a>
              <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#booking" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white px-4 py-2 transition shadow-lg shadow-red-600/20">
                <Phone className="h-4 w-4" />
                Book Now
              </a>
              <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 border border-white/20 text-white">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
