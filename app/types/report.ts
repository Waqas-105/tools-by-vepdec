export type ReportType = "clickjacking" | "tls" | "dmarc-yellow" | "dmarc-red" | "ticket" 

export interface Report {
  id: string
  date: string
  website: string
  type: ReportType
  subject: string
  message: string
  session: Session,
  username: string
  vulnerable: string
  // email: string
}
export type Session = {
  username: string
  role: string
}
