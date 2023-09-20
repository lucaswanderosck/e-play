import { Product } from "../Product";
import { Container, List } from "./styles";
import { Game } from "../../models/Game";

export type Props = {
  title: string;
  background: "gray" | "black";
  games: Game[];
};

export const ProductsList = ({ background, title, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              image={game.image}
              title={game.title}
              category={game.category}
              description={game.description}
              infos={game.infos}
              system={game.system}
            />
          ))}
        </List>
      </div>
    </Container>
  );
};
