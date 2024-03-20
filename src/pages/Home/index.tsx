import { Banner } from '../../components/Banner'
import { ProductsList } from '../../components/ProducList'
import { useGetOnSaleGameQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
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

export const Home = () => {
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()
  const { data: onSaleGames, isLoading: isLoadingSale } =
    useGetOnSaleGameQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}
