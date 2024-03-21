import { useDispatch } from 'react-redux'
import { addItemToCart, openCart } from '../../store/reducers/cart'
import { formatPriceToBRL } from '../../utils/formatters'
import { Button } from '../Button'
import { Tag } from '../Tag'
import { Container, Infos } from './styles'

type Props = {
  game: Game
}

export const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addtoCart = () => {
    dispatch(addItemToCart(game))
    dispatch(openCart())
  }

  return (
    <Container style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatPriceToBRL(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formatPriceToBRL(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              variation="primary"
              title="clique aqui para adicionar ao carrinho"
              onClick={addtoCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Container>
  )
}
