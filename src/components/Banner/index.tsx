import { useEffect, useState } from "react";
import { Game } from "../../pages/Home";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { Container, Title, Prices } from "./styles";

import { formatPrice } from "../ProducList";

export const Banner = () => {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/destaque")
      .then((response) => response.json())
      .then((data) => setGame(data));
  }, []);

  if (!game) {
    return <h3>carregando...</h3>;
  }

  return (
    <Container style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game?.name}</Title>
          <Prices>
            De R$ <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/produto/${game.id}`}
          title="Clique aqui para saber mais"
        >
          Aproveitar
        </Button>
      </div>
    </Container>
  );
};
