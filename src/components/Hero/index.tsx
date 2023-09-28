import { Game } from "../../pages/Home";
import { Button } from "../Button";
import { formatPrice } from "../ProducList";
import { Tag } from "../Tag";
import { Container, Infos } from "./styles";

type Props = {
  game: Game;
};

export const Hero = ({ game }: Props) => {
  return (
    <Container style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              variation="primary"
              title="clique aqui para adicionar ao carrnho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Container>
  );
};
