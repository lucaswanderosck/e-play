import { useEffect, useState } from "react";
import { ProductsList } from "../../components/ProducList";
import { Game } from "../Home";

export const Categories = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([]);
  const [gamesSports, setGamesSports] = useState<Game[]>([]);
  const [gamesFPS, setGamesFPS] = useState<Game[]>([]);
  const [gamesFight, setGamesFight] = useState<Game[]>([]);
  const [gamesRpg, setGamesRpg] = useState<Game[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/acao")
      .then((response) => response.json())
      .then((data) => setGamesAction(data));

    fetch("https://fake-api-tau.vercel.app/api/eplay/esportes")
      .then((response) => response.json())
      .then((data) => setGamesSports(data));

    fetch("https://fake-api-tau.vercel.app/api/eplay/simulacao")
      .then((response) => response.json())
      .then((data) => setGamesFPS(data));

    fetch("https://fake-api-tau.vercel.app/api/eplay/luta")
      .then((response) => response.json())
      .then((data) => setGamesFight(data));

    fetch("https://fake-api-tau.vercel.app/api/eplay/rpg")
      .then((response) => response.json())
      .then((data) => setGamesRpg(data));
  }, []);

  return (
    <>
      <ProductsList games={gamesAction} title="Ação" background="gray" />
      <ProductsList games={gamesSports} title="Esportes" background="black" />
      <ProductsList games={gamesFight} title="Luta" background="gray" />
      <ProductsList games={gamesRpg} title="RPG" background="black" />
      <ProductsList games={gamesFPS} title="FPS" background="gray" />
    </>
  );
};
