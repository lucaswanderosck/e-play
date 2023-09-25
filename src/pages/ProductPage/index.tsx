import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";

import { Gallery } from "../../components/Gallery";

import { Game } from "../Home";

export const ProductPage = () => {
  const { id } = useParams();

  const [game, setGame] = useState<Game>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((response) => response.json())
      .then((data) => setGame(data));
  }, [id]);

  if (!game) {
    return <h3>Carregando...</h3>;
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
          <b>Idiomas:</b>O jogo oferece suporte a diversos idiomas, incluindo
          {/* {game.details.language.join(", ")}. As opções de áudio e legendas */}
          podem ser ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        itemsGallery={game.media.galery}
      />
    </>
  );
};
