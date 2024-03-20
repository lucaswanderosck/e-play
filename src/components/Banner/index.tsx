import { useGetFeaturedGameQuery } from '../../services/api'
import { formatPriceToBRL } from '../../utils/formatters'
import { Button } from '../Button'
import { Loader } from '../Loader'
import { Tag } from '../Tag'
import { Container, Prices, Title } from './styles'

export const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Container style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game?.name}</Title>
          <Prices>
            De R$ <span>{formatPriceToBRL(game.prices.old)}</span> <br />
            por apenas {formatPriceToBRL(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/produto/${game.id}`}
          title="Clique aqui para saber mais"
        >
          Aproveitar
        </Button>
      </div>
    </Container>
  )
}
