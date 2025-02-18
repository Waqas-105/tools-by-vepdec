"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"

export function ClickjackingTool() {
  const [url, setUrl] = useState("")
  const [iframeKey, setIframeKey] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIframeKey(prevKey => prevKey + 1)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          type="url"
          placeholder="Enter URL to test"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          required
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700  text-white">
          Test
        </Button>
      </form>
      {url && (
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            key={iframeKey}
            src={url}
            className="absolute top-0 left-0 w-full h-full border-0"
            style={{ opacity: 50 }}
            title="Clickjacking Test"
          />
          
        </div>
      )}
      <p className="text-sm text-gray-400">
        If you can see the target website through the semi-transparent overlay then the website is vulnerable to clickjacking.
      </p>
    </div>
  )
}
