import { Game } from "../models/Game";

import zelda from "../assets/images/zelda.png";
import streetFighter from "../assets/images/street-fighter.png";
import diablo from "../assets/images/diablo.png";
import starWars from "../assets/images/star-wars.png";

export const comingSoon: Game[] = [
  {
    id: 5,
    title: "The Legend of Zelda: Breath of the Wild 2",
    description:
      "The Legend of Zelda: Breath of the Wild 2 é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Nintendo para o Nintendo Switch. É a sequência de The Legend of Zelda: Breath of the Wild, de 2017, e foi anunciado na E3 2019.",
    category: "Aventura",
    system: "Nintendo Switch",
    image: zelda,
    infos: ["Lançamento", "2023"],
  },
  {
    id: 6,
    title: "Street Fighter 6",
    description:
      "Street Fighter 6 é um jogo eletrônico de luta desenvolvido e publicado pela Capcom, sendo o sexto título principal da série Street Fighter. Foi anunciado em 10 de dezembro de 2020, durante o The Game Awards 2020.",
    category: "FPS",
    system: "PS5",
    image: streetFighter,
    infos: ["Lançamento", "2023"],
  },
  {
    id: 7,
    title: "Diablo IV",
    description:
      "Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo, sendo sequência direta de Diablo III, de 2012.",
    category: "RPG",
    system: "PS5",
    image: diablo,
    infos: ["Lançamento", "2023"],
  },
  {
    id: 8,
    title: "Star Wars: Jedi Survivor",
    description:
      "Star Wars: Jedi Survivor é um jogo eletrônico de ação-aventura desenvolvido pela Respawn Entertainment. É ambientado no universo de Star Wars, pouco depois dos eventos do filme Star Wars: Episódio III – A Vingança dos Sith, de 2005.",
    category: "Aventura",
    system: "PS4",
    image: starWars,
    infos: ["Lançamento", "2023"],
  },
];
