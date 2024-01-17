import { LuX } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from "../../store";
import { closeCart, removeItemtoCart } from "../../store/reducer/cart";
import { Button } from "../Button";
import { formatPrice } from "../ProducList";
import { Tag } from "../Tag";
import {
  CartItem,
  CartSideBar,
  Container,
  Overlay,
  Prices,
  Quantity,
} from "./styles";

export const Cart = () => {
  const { isOpen, items } = useSelector((state: rootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(closeCart());
  };

  const removeToCart = (id: number) => {
    dispatch(removeItemtoCart(id));
  };

  const getTotalPrices = () => {
    return items.reduce((acc, item) => {
      return (acc += item.prices.current!);
    }, 0);
  };

  return (
    <Container className={isOpen ? "is-open" : ""}>
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
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <LuX onClick={() => removeToCart(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} Jogos no carrinho</Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrices())}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Continuar para a compra" type="button">
          Continuar com a compra
        </Button>
      </CartSideBar>
    </Container>
  );
};
