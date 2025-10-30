export interface User {
  id: string
  email: string
  role: "admin" | "user"
  created_at: string
  updated_at: string
}

export interface UserInfo {
  data: {
    id: number
    fullName: string
    username: string
    email: string
    active: boolean
    createdAt: string
    updatedAt: string
    role: string
    profileImageUrl: string | null
    authProvider: string
  } | null
}

export interface Product {
  id: string
  name: string
  description: string | null
  price: number
  image_url: string | null
  stock: number
  category: string | null
  created_by: string | null
  created_at: string
  updated_at: string
}
