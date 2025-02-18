export type UserRole = "CEO" | "Email Marketing Specialist" | "Security Researcher" | "Developer" | "Developer"

export interface User {
  id: string
  username: string
  useremail: string
  role: UserRole
  password: string 
  lastLogin?: string
  isActive: boolean
}

export interface UserActivity {
  id: string
  userId: string
  action: "LOGIN" | "LOGOUT" | "REPORT_CREATED" | "REPORT_SEARCHED"
  timestamp: string
  details?: string
}

