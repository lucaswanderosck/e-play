import { Container, LinkCart, LinkItem, Links } from "./styles";
import { FaShoppingCart } from "react-icons/fa";

import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="eplay" />
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
