import { FaShoppingCart } from "react-icons/fa";
import { ButtonCart, Container, LinkItem, Links } from "./styles";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from "../../store";
import { openCart } from "../../store/reducer/cart";

export const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: rootReducer) => state.cart);

  const openCartHandler = () => {
    dispatch(openCart());
  };

  return (
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="eplay" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categorias">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <ButtonCart onClick={openCartHandler}>
        {items.length} - produto(s)
        <FaShoppingCart size={20} />
      </ButtonCart>
    </Container>
  );
};
