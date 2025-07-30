export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      co_create_assessments: {
        Row: {
          created_at: string
          email: string
          id: string
          marketing_consent: boolean | null
          name: string
          question1_answer: number
          question10_answers: number[]
          question2_answers: number[]
          question3_answer: number
          question4_answer: number
          question5_answer: number
          question6_answers: number[]
          question7_answer: number
          question8_answer: number
          question9_answer: number
          questions_data: Json | null
          total_score: number
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          marketing_consent?: boolean | null
          name: string
          question1_answer: number
          question10_answers: number[]
          question2_answers: number[]
          question3_answer: number
          question4_answer: number
          question5_answer: number
          question6_answers: number[]
          question7_answer: number
          question8_answer: number
          question9_answer: number
          questions_data?: Json | null
          total_score: number
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          marketing_consent?: boolean | null
          name?: string
          question1_answer?: number
          question10_answers?: number[]
          question2_answers?: number[]
          question3_answer?: number
          question4_answer?: number
          question5_answer?: number
          question6_answers?: number[]
          question7_answer?: number
          question8_answer?: number
          question9_answer?: number
          questions_data?: Json | null
          total_score?: number
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string
          created_at: string
          email: string
          id: string
          marketing_consent: boolean | null
          message: string
          name: string
          phone: string | null
          service: string | null
        }
        Insert: {
          company: string
          created_at?: string
          email: string
          id?: string
          marketing_consent?: boolean | null
          message: string
          name: string
          phone?: string | null
          service?: string | null
        }
        Update: {
          company?: string
          created_at?: string
          email?: string
          id?: string
          marketing_consent?: boolean | null
          message?: string
          name?: string
          phone?: string | null
          service?: string | null
        }
        Relationships: []
      }
      cv_submissions: {
        Row: {
          consent_given: boolean
          created_at: string
          email: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id: string
          marketing_consent: boolean | null
          message: string | null
          name: string
          phone: string | null
        }
        Insert: {
          consent_given?: boolean
          created_at?: string
          email: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id?: string
          marketing_consent?: boolean | null
          message?: string | null
          name: string
          phone?: string | null
        }
        Update: {
          consent_given?: boolean
          created_at?: string
          email?: string
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          id?: string
          marketing_consent?: boolean | null
          message?: string | null
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      lead_qualifications: {
        Row: {
          brands: string
          challenges: string[]
          created_at: string
          email: string
          icp_type: string | null
          id: string
          marketing_consent: boolean | null
          markets: string
          products: string
          sectors: string[]
          timeframe: string
        }
        Insert: {
          brands: string
          challenges: string[]
          created_at?: string
          email: string
          icp_type?: string | null
          id?: string
          marketing_consent?: boolean | null
          markets: string
          products: string
          sectors: string[]
          timeframe: string
        }
        Update: {
          brands?: string
          challenges?: string[]
          created_at?: string
          email?: string
          icp_type?: string | null
          id?: string
          marketing_consent?: boolean | null
          markets?: string
          products?: string
          sectors?: string[]
          timeframe?: string
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          created_at: string
          email: string
          id: string
          marketing_consent: boolean | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          marketing_consent?: boolean | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          marketing_consent?: boolean | null
        }
        Relationships: []
      }
      webinar_registrations: {
        Row: {
          company: string
          created_at: string
          email: string
          first_name: string
          id: string
          industry: string | null
          job_title: string
          last_name: string
          marketing_consent: boolean | null
          phone: string | null
          questions: string | null
        }
        Insert: {
          company: string
          created_at?: string
          email: string
          first_name: string
          id?: string
          industry?: string | null
          job_title: string
          last_name: string
          marketing_consent?: boolean | null
          phone?: string | null
          questions?: string | null
        }
        Update: {
          company?: string
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          industry?: string | null
          job_title?: string
          last_name?: string
          marketing_consent?: boolean | null
          phone?: string | null
          questions?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
