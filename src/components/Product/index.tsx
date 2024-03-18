import { Tag } from '../Tag'
import { Container, Description, ImgZoomWrapper, Infos, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  image: string
  infos: string[]
  id: number
}

export const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  id,
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 90) {
      return `${description.substring(0, 90)}...`
    }
    return description
  }
  return (
    <Container to={`/produto/${id}`}>
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
      <Description>{getDescription(description)}</Description>
    </Container>
  )
}
