"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      timeZone: "Asia/Karachi",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      timeZone: "Asia/Karachi",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-4 text-center"
    >
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        className="text-3xl font-bold text-white mb-2"
      >
        {formatTime(time)}
      </motion.div>
      <div className="text-gray-400">{formatDate(time)}</div>
    </motion.div>
  )
}

