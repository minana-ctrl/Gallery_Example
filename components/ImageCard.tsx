'use client'

import Image from 'next/image'
import { ImageData } from '@/types/image'
import { useState } from 'react'

interface ImageCardProps {
  image: ImageData
}

export default function ImageCard({ image }: ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 hover:border-purple-400/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={image.image_url}
          alt={image.description}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Info Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${
          isHovered
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            {image.treatment_type}
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-purple-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {image.body_area}
            </span>
            <span className="inline-flex items-center rounded-full bg-pink-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {image.color_theme}
            </span>
          </div>
          <p className="line-clamp-2 text-sm text-white/90">
            {image.description}
          </p>
        </div>
      </div>

      {/* Top Badge */}
      <div className="absolute top-4 left-4">
        <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
          {image.treatment_type}
        </div>
      </div>

      {/* Shine Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}
        style={{ transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)' }}
      />
    </div>
  )
}

