export interface ImageData {
  id: string
  image_url: string
  treatment_type: string
  body_area: string
  color_theme: string
  description: string
  keywords: string[]
  is_flagged: boolean
  source: string
  created_at: string
  gender: string
  embedding: null | number[]
}

