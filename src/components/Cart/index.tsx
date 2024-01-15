import { LuX } from "react-icons/lu";
import starwars from "../../assets/images/star-wars.png";
import { Button } from "../Button";
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
  return (
    <Container>
      <Overlay />
      <CartSideBar>
        <ul>
          <CartItem>
            <img src={starwars} alt="starwars" />
            <div>
              <h3>StarWars</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 129,90</span>
            </div>
            <LuX />
          </CartItem>
          <CartItem>
            <img src={starwars} alt="starwars" />
            <div>
              <h3>StarWars</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 129,90</span>
            </div>
            <LuX />
          </CartItem>
        </ul>
        <Quantity>2 Jogos no carrinho</Quantity>
        <Prices>
          Total de R$ 259,90 <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Continuar para a compra" type="button">
          Continuar com a compra
        </Button>
      </CartSideBar>
    </Container>
  );
};
