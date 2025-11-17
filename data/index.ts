import { ImageData } from '@/types/image'
import imagesData from './images.json'

export const images: ImageData[] = imagesData as ImageData[]

export function getAllImages(): ImageData[] {
  return images.filter(img => !img.is_flagged)
}

export function getImagesByTreatmentType(treatmentType: string): ImageData[] {
  return getAllImages().filter(img => img.treatment_type === treatmentType)
}

export function getImagesByBodyArea(bodyArea: string): ImageData[] {
  return getAllImages().filter(img => img.body_area === bodyArea)
}

