import { Tag } from "../Tag";
import { Container, Description, Infos, Title, ImgZoomWrapper } from "./styles";

type Props = {
  title: string;
  category: string;
  system: string;
  description: string;
  image: string;
  infos: string[];
};

export const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
}: Props) => {
  return (
    <Container>
      <ImgZoomWrapper>
        <img src={image} alt={title} />
      </ImgZoomWrapper>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{description}</Description>
    </Container>
  );
};
