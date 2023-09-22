import { Button } from "../Button";
import { Tag } from "../Tag";
import { Container, Infos } from "./styles";

export const Hero = () => {
  return (
    <Container>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>FPS</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>de R$ 249,00</span> por R$ 189,00
          </p>
          <Button
            type="button"
            variation="primary"
            title="clique aqui para adicionar ao carrnho"
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Container>
  );
};
