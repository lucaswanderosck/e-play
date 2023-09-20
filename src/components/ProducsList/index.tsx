import { Product } from "../Product";
import { Container, List } from "./styles";

export type Props = {
  title: string;
  background: "gray" | "black";
};

export const ProductsList = ({ background, title }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={["-10%", "R$ 149.90"]}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={["-10%", "R$ 149.90"]}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={["-10%", "R$ 149.90"]}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={["-10%", "R$ 149.90"]}
            system="Windows"
            title="Nome do jogo"
          />
        </List>
      </div>
    </Container>
  );
};
