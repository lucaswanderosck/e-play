import { ProductsList } from '../../components/ProducList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
} from '../../services/api'

export const Categories = () => {
  const { data: gamesAction, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesSports, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: gamesFight, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: gamesFPS, isLoading: isLoadingFPS } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesAction}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={gamesSports}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={gamesFight}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={gamesRpg}
        title="RPG"
        background="black"
        id="rgp"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={gamesFPS}
        title="FPS"
        background="gray"
        id="fps"
        isLoading={isLoadingFPS}
      />
    </>
  )
}
