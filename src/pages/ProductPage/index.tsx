import { useParams } from 'react-router-dom'
import { Gallery } from '../../components/Gallery'
import { Hero } from '../../components/Hero'
import { Loader } from '../../components/Loader'
import { Section } from '../../components/Section'
import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

export const ProductPage = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma: </b>
          {game.details.system}
          <br />
          <b>Desenvolvedor: </b>
          {game.details.developer} <br />
          <b>Editora: </b>
          {game.details.publisher}
          <br />
          <b>Idiomas: </b>O jogo oferece suporte a diversos idiomas, incluindo:{' '}
          {game.details.languages.join(', ')}. As opções de áudio e legendas
          podem ser ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}
