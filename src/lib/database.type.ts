export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      User: {
        Row: {
          id: string
          firstName: string
          lastName: string
          email: string
          password: string
          avatar: string | null
          membership_id: string | null
          membershipEndDate: string | null
          createdAt: string
        }
        Insert: {
          id?: string
          firstName: string
          lastName: string
          email: string
          password: string
          avatar?: string | null
          membership_id?: string | null
          membershipEndDate?: string | null
          createdAt?: string
        }
        Update: {
          id?: string
          firstName?: string
          lastName?: string
          email?: string
          password?: string
          avatar?: string | null
          membership_id?: string | null
          membershipEndDate?: string | null
          createdAt?: string
        }
      }
      Trainer: {
        Row: {
          id: string
          name: string
          avatar: string | null
          bio: string | null
          gym_id: string | null
        }
        Insert: {
          id?: string
          name: string
          avatar?: string | null
          bio?: string | null
          gym_id?: string | null
        }
        Update: {
          id?: string
          name?: string
          avatar?: string | null
          bio?: string | null
          gym_id?: string | null
        }
      }
      Gym: {
        Row: {
          id: string
          name: string
          address: string
          city: string
          latitude: number | null
          longitude: number | null
        }
        Insert: {
          id?: string
          name: string
          address: string
          city: string
          latitude?: number | null
          longitude?: number | null
        }
        Update: {
          id?: string
          name?: string
          address?: string
          city?: string
          latitude?: number | null
          longitude?: number | null
        }
      }
      Class: {
        Row: {
          id: string
          name: string
          category: string
          dayOfWeek: string
          startTime: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          dayOfWeek: string
          startTime: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          dayOfWeek?: string
          startTime?: string
        }
      }
      Membership: {
        Row: {
          id: string
          name: string
          image: string | null
          price: number
          duration: number
        }
        Insert: {
          id?: string
          name: string
          image?: string | null
          price: number
          duration: number
        }
        Update: {
          id?: string
          name?: string
          image?: string | null
          price?: number
          duration?: number
        }
      }
      Payment: {
        Row: {
          id: string
          user_id: string
          membership_id: string
          amount: number
          status: string
          createdAt: string
        }
        Insert: {
          id?: string
          user_id: string
          membership_id: string
          amount: number
          status?: string
          createdAt?: string
        }
        Update: {
          id?: string
          user_id?: string
          membership_id?: string
          amount?: number
          status?: string
          createdAt?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      PaymentStatus: "Pending" | "Completed" | "Failed"
      Weekday: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
    }
  }
}