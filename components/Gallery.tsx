'use client'

import { ImageData } from '@/types/image'
import ImageCard from './ImageCard'

interface GalleryProps {
  images: ImageData[]
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
            Medical Aesthetics Gallery
          </h1>
          <p className="text-xl text-gray-400">
            {images.length} professional treatment images
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>

        {/* Empty State */}
        {images.length === 0 && (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-400">
                No images found
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

