import { ProductsList } from '../../components/ProducList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
} from '../../services/api'

export const Categories = () => {
  const { data: gamesAction } = useGetActionGamesQuery()
  const { data: gamesSports } = useGetSportsGamesQuery()
  const { data: gamesFight } = useGetFightGamesQuery()
  const { data: gamesRpg } = useGetRpgGamesQuery()
  const { data: gamesFPS } = useGetSimulationGamesQuery()

  if (gamesAction && gamesSports && gamesFight && gamesRpg && gamesFPS) {
    return (
      <>
        <ProductsList
          games={gamesAction}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductsList
          games={gamesSports}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={gamesFight}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={gamesRpg}
          title="RPG"
          background="black"
          id="rgp"
        />
        <ProductsList games={gamesFPS} title="FPS" background="gray" id="fps" />
      </>
    )
  }
  return <h4>...carregando</h4>
}
