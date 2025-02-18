// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"
// import { reportTemplates } from "./report-template"
// import type { ReportType } from "@/app/types/report"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// export function generateId() {
//   return Math.random().toString(36).substring(2, 9)
// }

// export async function checkDuplicate(website: string) {
//   // Simulate API call to check for duplicate
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   const reports = JSON.parse(localStorage.getItem("reports") || "[]")
//   return reports.some((report: any) => report.website === website)
// }

// export function getReportTemplate(
//   type: ReportType,
//   website: string,
//   vulnerable: string,
//   session: { username: string; role: string },
// ) {
//   const template = reportTemplates[type]
//   if (!template) return ""

//   return template(website, vulnerable, session)
// }

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { reportTemplates } from "./report-template"
import type { ReportType, Session } from "@/app/types/report"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

export async function checkDuplicate(website: string) {
  // Simulate API call to check for duplicate
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const reports = JSON.parse(localStorage.getItem("reports") || "[]")
  return reports.some((report: any) => report.website === website)
}

export function getReportTemplate(type: ReportType, website: string, vulnerable: string, session: Session): string {
  const template = reportTemplates[type]

  if (!template) return ""

  // Handle TLS template separately as it has different parameters
  if (type === "tls") {
    return (template as (website: string, session: Session) => string)(website, session)
  }

  // For all other templates, pass parameters in the correct order
  return (template as (website: string, vulnerable: string, session: Session) => string)(website, vulnerable, session)
}

