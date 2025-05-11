export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      co_create_assessments: {
        Row: {
          created_at: string
          cross_functional_execution: string
          cross_functional_execution_score: number
          customer_segments: string
          customer_segments_score: number
          email: string
          exploration_planning: string[]
          exploration_planning_score: number
          external_collaboration: string
          external_collaboration_score: number
          id: string
          internal_capabilities: string[]
          internal_capabilities_score: number
          name: string
          offering_portfolio: string
          offering_portfolio_score: number
          offerings_confidence: string
          offerings_confidence_score: number
          partnership_support: string[]
          partnership_support_score: number
          score_category: string
          team_alignment: string
          team_alignment_score: number
          total_score: number
          validation_approach: string
          validation_approach_score: number
        }
        Insert: {
          created_at?: string
          cross_functional_execution: string
          cross_functional_execution_score: number
          customer_segments: string
          customer_segments_score: number
          email: string
          exploration_planning?: string[]
          exploration_planning_score: number
          external_collaboration: string
          external_collaboration_score: number
          id?: string
          internal_capabilities?: string[]
          internal_capabilities_score: number
          name: string
          offering_portfolio: string
          offering_portfolio_score: number
          offerings_confidence: string
          offerings_confidence_score: number
          partnership_support?: string[]
          partnership_support_score: number
          score_category: string
          team_alignment: string
          team_alignment_score: number
          total_score: number
          validation_approach: string
          validation_approach_score: number
        }
        Update: {
          created_at?: string
          cross_functional_execution?: string
          cross_functional_execution_score?: number
          customer_segments?: string
          customer_segments_score?: number
          email?: string
          exploration_planning?: string[]
          exploration_planning_score?: number
          external_collaboration?: string
          external_collaboration_score?: number
          id?: string
          internal_capabilities?: string[]
          internal_capabilities_score?: number
          name?: string
          offering_portfolio?: string
          offering_portfolio_score?: number
          offerings_confidence?: string
          offerings_confidence_score?: number
          partnership_support?: string[]
          partnership_support_score?: number
          score_category?: string
          team_alignment?: string
          team_alignment_score?: number
          total_score?: number
          validation_approach?: string
          validation_approach_score?: number
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string
          created_at: string
          email: string
          id: string
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
          message?: string
          name?: string
          phone?: string | null
          service?: string | null
        }
        Relationships: []
      }
      lead_qualifications: {
        Row: {
          brands: string
          challenges: string[]
          created_at: string
          email: string
          id: string
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
          id?: string
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
          id?: string
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
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
