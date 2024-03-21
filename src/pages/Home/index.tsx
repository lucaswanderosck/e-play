import { Banner } from '../../components/Banner'
import { ProductsList } from '../../components/ProducList'
import { useGetOnSaleGameQuery, useGetSoonQuery } from '../../services/api'

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
