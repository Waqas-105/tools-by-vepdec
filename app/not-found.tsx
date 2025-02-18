"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md text-center"
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-8">
          <div className="text-8xl font-bold text-white mb-4 animate-bounce">
            404
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl text-white font-medium mb-4"
          >
            Uh-oh, it looks like you’re lost!
          </motion.div>
          <div className="text-gray-400 mb-6">
            This page has decided to take a nap. Don’t worry, you’ll find your way back.
          </div>
          <Link
            href="/"
            className="w-full bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-emerald-500 hover:to-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Take me Home
          </Link>
          <div className="mt-6 text-lg text-white/70">
            Or just stare at this page... It’s probably judging you. 😜
          </div>
        </div>
      </motion.div>
    </div>
  )
}
