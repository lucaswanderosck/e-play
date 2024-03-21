declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

declare interface Game {
  id: number
  name: string
  description: string
  releaseDate?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    cover: string
    thumbnail: string
    gallery: GalleryItem[]
  }
}
