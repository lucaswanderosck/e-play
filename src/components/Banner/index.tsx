import { Container, Title, Prices } from "./styles";

export const Banner = () => {
  return (
    <Container>
      <div className="container">
        <Title>Marvel's Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De R$ <span>250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
    </Container>
  );
};
