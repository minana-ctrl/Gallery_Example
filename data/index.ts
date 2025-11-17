import { ImageData } from '@/types/image'
import imagesData from './images.json'

export const images: ImageData[] = imagesData as ImageData[]

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function getAllImages(): ImageData[] {
  const filtered = images.filter(img => !img.is_flagged)
  return shuffleArray(filtered)
}

export function getImagesByTreatmentType(treatmentType: string): ImageData[] {
  return getAllImages().filter(img => img.treatment_type === treatmentType)
}

export function getImagesByBodyArea(bodyArea: string): ImageData[] {
  return getAllImages().filter(img => img.body_area === bodyArea)
}

