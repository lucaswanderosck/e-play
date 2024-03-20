import { Game } from '../../pages/Home'
import { formatPriceToBRL } from '../../utils/formatters'
import { Loader } from '../Loader'
import { Product } from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

export const ProductsList = ({
  background,
  title,
  games,
  id,
  isLoading,
}: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.releaseDate) {
      tags.push(game.releaseDate)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formatPriceToBRL(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container background={background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  image={game.media.thumbnail}
                  title={game.name}
                  category={game.details.category}
                  description={game.description}
                  infos={getGameTags(game)}
                  system={game.details.system}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}
