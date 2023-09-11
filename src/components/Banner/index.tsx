import { Button } from "../Button";
import { Tag } from "../Tag";
import { Container, Title, Prices } from "./styles";

export const Banner = () => {
  return (
    <Container>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>Marvel's Spider-Man: Miles Morales PS4 & PS5</Title>
          <Prices>
            De R$ <span>250,00</span> <br />
            por apenas R$ 99,90
          </Prices>
        </div>
        <Button type="link" to="/produto" title="Clique aqui para saber mais">
          Aproveitar
        </Button>
      </div>
    </Container>
  );
};
