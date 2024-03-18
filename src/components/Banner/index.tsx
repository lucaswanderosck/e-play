import { useGetFeaturedGameQuery } from '../../services/api'
import { formatPrice } from '../../utils/formatters'
import { Button } from '../Button'
import { Tag } from '../Tag'
import { Container, Prices, Title } from './styles'

export const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>carregando...</h3>
  }

  return (
    <Container style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game?.name}</Title>
          <Prices>
            De R$ <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
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
