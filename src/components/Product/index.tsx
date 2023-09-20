import { Tag } from "../Tag";
import { Container, Description, Title } from "./styles";
import resident from '../../assets/images/resident.png'

export const Product = () => {
  return (
    <Container>
      <img src={resident} alt="residentEvil" />
      <Title>Nome do Jogo</Title>
      <Tag>Categotia</Tag>
      <Tag>Windowns</Tag>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        pariatur tempore excepturi ab pariatur totam sequi consequatur!
      </Description>
    </Container>
  );
};
