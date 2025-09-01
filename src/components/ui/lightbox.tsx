'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  image: {
    src: string
    alt: string
    title: string
    category: string
    date: string
  } | null
}

export function Lightbox({ isOpen, onClose, image }: LightboxProps) {
  if (!isOpen || !image) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-opal transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="bg-white rounded-xl overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-dark-ocean mb-2">{image.title}</h3>
            <div className="flex items-center gap-4 text-gray-600">
              <span>{image.date}</span>
              <span className="px-3 py-1 bg-opal text-white rounded-full text-sm">
                {image.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
