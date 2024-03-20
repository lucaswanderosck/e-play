import { LuX } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { closeCart, removeItemtoCart } from '../../store/reducers/cart'
import { formatPriceToBRL, getTotalPrices } from '../../utils/formatters'
import { Button } from '../Button'
import { Tag } from '../Tag'
import {
  CartItem,
  CartSideBar,
  Container,
  Overlay,
  Prices,
  Quantity,
} from './styles'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCartHandler = () => {
    dispatch(closeCart())
  }

  const removeToCart = (id: number) => {
    dispatch(removeItemtoCart(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCartHandler()
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCartHandler} />
      <CartSideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPriceToBRL(item.prices.current)}</span>
              </div>
              <LuX onClick={() => removeToCart(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} Jogos no carrinho</Quantity>
        <Prices>
          Total de {formatPriceToBRL(getTotalPrices(items))}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button
          title="Continuar para a compra"
          type="button"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </CartSideBar>
    </Container>
  )
}
