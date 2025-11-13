import { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Car, ShieldCheck, Gauge, Sparkles } from 'lucide-react'

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-white/60 text-xs">{label}</p>
        <p className="text-white font-semibold">{value}</p>
      </div>
    </div>
  )
}

function Feature({ title, desc, Icon }) {
  return (
    <div className="group rounded-2xl bg-zinc-900/60 border border-white/10 p-6 hover:bg-zinc-900/80 transition shadow-lg">
      <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-white/60 text-sm">{desc}</p>
    </div>
  )
}

export default function App() {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const isDisabled = useMemo(() => !(pickup && dropoff && date && time), [pickup, dropoff, date, time])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] bg-red-600/20 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 -left-40 h-[600px] w-[600px] bg-zinc-700/30 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="py-16">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
                >
                  LAC Rent a Car
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-4 text-base sm:text-lg text-white/70 max-w-xl"
                >
                  Premium cars, transparent pricing, and 24/7 support. Book your ride in seconds and hit the road with confidence.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-4"
                >
                  <Stat icon={Car} label="Vehicles" value="150+ in fleet" />
                  <Stat icon={ShieldCheck} label="Insurance" value="Full coverage" />
                  <Stat icon={Gauge} label="Support" value="24/7 assistance" />
                </motion.div>

                {/* Booking Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mt-10 rounded-2xl bg-zinc-900/70 border border-white/10 p-4 sm:p-6 backdrop-blur shadow-xl"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Pickup Location</label>
                      <input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="City or Airport" className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-600/50" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Drop-off Location</label>
                      <input value={dropoff} onChange={(e) => setDropoff(e.target.value)} placeholder="City or Airport" className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-600/50" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Pickup Date</label>
                      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-600/50" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Pickup Time</label>
                      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-600/50" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <button disabled={isDisabled} className="inline-flex items-center gap-2 rounded-xl bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-500 text-white px-5 py-3 transition shadow-lg shadow-red-600/20">
                      <Sparkles className="h-4 w-4" />
                      Get Instant Quote
                    </button>
                    <p className="text-white/50 text-sm">No hidden fees. Cancel anytime.</p>
                  </div>
                </motion.div>
              </div>

              {/* Right visual column intentionally left without extra UI to let 3D shine */}
              <div className="h-[560px] lg:h-[720px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">Featured Fleet</h2>
            <a href="#" className="text-sm text-red-400 hover:text-red-300">View all</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="group rounded-2xl bg-zinc-900/60 border border-white/10 p-5 hover:bg-zinc-900/80 transition shadow-lg">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-700 mb-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Sport Class {i}</p>
                    <p className="text-white/60 text-sm">Automatic • 2 Doors</p>
                  </div>
                  <p className="text-white font-semibold">$79/day</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 p-8 sm:p-12 text-center shadow-xl">
            <h3 className="text-white text-2xl sm:text-3xl font-semibold">Ready to hit the road?</h3>
            <p className="text-white/60 mt-2">Call us anytime or book online in minutes.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#booking" className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white px-5 py-3 transition shadow-lg shadow-red-600/20">Book Now</a>
              <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 transition border border-white/10">Call +1 (000) 000-0000</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} LAC Rent a Car. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white">Privacy</a>
              <a href="#" className="text-white/60 hover:text-white">Terms</a>
              <a href="#" className="text-white/60 hover:text-white">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
