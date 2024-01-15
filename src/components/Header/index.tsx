import { FaShoppingCart } from "react-icons/fa";
import { Container, LinkCart, LinkItem, Links } from "./styles";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
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
      <LinkCart href="#">
        0 - produto(s)
        <FaShoppingCart size={20} />
      </LinkCart>
    </Container>
  );
};
