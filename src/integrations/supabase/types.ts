export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      demanda_anexos: {
        Row: {
          created_at: string
          demanda_id: string
          id: string
          nome_arquivo: string
          storage_path: string
          tamanho_bytes: number | null
          tipo_mime: string | null
        }
        Insert: {
          created_at?: string
          demanda_id: string
          id?: string
          nome_arquivo: string
          storage_path: string
          tamanho_bytes?: number | null
          tipo_mime?: string | null
        }
        Update: {
          created_at?: string
          demanda_id?: string
          id?: string
          nome_arquivo?: string
          storage_path?: string
          tamanho_bytes?: number | null
          tipo_mime?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "demanda_anexos_demanda_id_fkey"
            columns: ["demanda_id"]
            isOneToOne: false
            referencedRelation: "demandas"
            referencedColumns: ["id"]
          },
        ]
      }
      demanda_atividades: {
        Row: {
          autor: string | null
          campo: string | null
          created_at: string
          demanda_id: string
          detalhes: string | null
          id: string
          tipo: string
          valor_anterior: string | null
          valor_novo: string | null
        }
        Insert: {
          autor?: string | null
          campo?: string | null
          created_at?: string
          demanda_id: string
          detalhes?: string | null
          id?: string
          tipo: string
          valor_anterior?: string | null
          valor_novo?: string | null
        }
        Update: {
          autor?: string | null
          campo?: string | null
          created_at?: string
          demanda_id?: string
          detalhes?: string | null
          id?: string
          tipo?: string
          valor_anterior?: string | null
          valor_novo?: string | null
        }
        Relationships: []
      }
      demanda_comentarios: {
        Row: {
          autor: string
          created_at: string
          demanda_id: string
          id: string
          texto: string
        }
        Insert: {
          autor: string
          created_at?: string
          demanda_id: string
          id?: string
          texto: string
        }
        Update: {
          autor?: string
          created_at?: string
          demanda_id?: string
          id?: string
          texto?: string
        }
        Relationships: [
          {
            foreignKeyName: "demanda_comentarios_demanda_id_fkey"
            columns: ["demanda_id"]
            isOneToOne: false
            referencedRelation: "demandas"
            referencedColumns: ["id"]
          },
        ]
      }
      demanda_status_log: {
        Row: {
          alterado_por: string | null
          created_at: string
          demanda_id: string
          id: string
          observacao: string | null
          status_anterior: string | null
          status_novo: string
        }
        Insert: {
          alterado_por?: string | null
          created_at?: string
          demanda_id: string
          id?: string
          observacao?: string | null
          status_anterior?: string | null
          status_novo: string
        }
        Update: {
          alterado_por?: string | null
          created_at?: string
          demanda_id?: string
          id?: string
          observacao?: string | null
          status_anterior?: string | null
          status_novo?: string
        }
        Relationships: []
      }
      demandas: {
        Row: {
          briefing: string
          concluida_em: string | null
          created_at: string
          data_entrega_interna: string | null
          data_inicio_prevista: string | null
          emails_extras: string[] | null
          frequencia: string
          id: string
          links_referencia: string | null
          ordem_prioridade: number | null
          prazo_esperado: string
          prazo_estimado_dias: number | null
          prioridade: string
          protocolo: string
          responsavel: string | null
          solicitante: string
          solicitante_email: string
          status: string
          tipo: string
          titulo: string
          updated_at: string
          velocidade: string
        }
        Insert: {
          briefing: string
          concluida_em?: string | null
          created_at?: string
          data_entrega_interna?: string | null
          data_inicio_prevista?: string | null
          emails_extras?: string[] | null
          frequencia?: string
          id?: string
          links_referencia?: string | null
          ordem_prioridade?: number | null
          prazo_esperado: string
          prazo_estimado_dias?: number | null
          prioridade?: string
          protocolo?: string
          responsavel?: string | null
          solicitante: string
          solicitante_email: string
          status?: string
          tipo: string
          titulo: string
          updated_at?: string
          velocidade?: string
        }
        Update: {
          briefing?: string
          concluida_em?: string | null
          created_at?: string
          data_entrega_interna?: string | null
          data_inicio_prevista?: string | null
          emails_extras?: string[] | null
          frequencia?: string
          id?: string
          links_referencia?: string | null
          ordem_prioridade?: number | null
          prazo_esperado?: string
          prazo_estimado_dias?: number | null
          prioridade?: string
          protocolo?: string
          responsavel?: string | null
          solicitante?: string
          solicitante_email?: string
          status?: string
          tipo?: string
          titulo?: string
          updated_at?: string
          velocidade?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      gerar_protocolo_demanda: { Args: never; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin"
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
    Enums: {
      app_role: ["admin"],
    },
  },
} as const
