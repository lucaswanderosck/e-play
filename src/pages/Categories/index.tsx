import { ProductsList } from "../../components/ProducList";
import { Game } from "../../models/Game";

import resident from "../../assets/images/resident.png";
import fifa from "../../assets/images/fifa.png";
import fortnite from "../../assets/images/fortnite.png";
import starfield from "../../assets/images/starfield.png";
import zelda from "../../assets/images/zelda.png";
import streetFighter from "../../assets/images/street-fighter.png";
import diablo from "../../assets/images/diablo.png";
import starWars from "../../assets/images/star-wars.png";

const promotions: Game[] = [
  {
    id: 1,
    title: "Resident Evil 4",
    description:
      "Resident Evil 4 é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o Nintendo GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.",
    category: "Terror",
    system: "PS4",
    image: resident,
    infos: ["-10%", "R$ 259,00"],
  },
  {
    id: 2,
    title: "FIFA 23",
    description:
      "FIFA 23 é um jogo eletrônico de futebol desenvolvido e publicado pela Electronic Arts, lançado mundialmente em 30 de setembro de 2023 para PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Nintendo Switch e Microsoft Windows.",
    category: "Esporte",
    system: "Xbox Series X/S",
    image: fifa,
    infos: ["-50%", "R$ 79,00"],
  },
  {
    id: 3,
    title: "Fortnite",
    description:
      "Fortnite é um jogo eletrônico multijogador online revelado originalmente em 2011, desenvolvido pela Epic Games e lançado como diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.",
    category: "Avetura",
    system: "PC",
    image: fortnite,
    infos: ["-100%", "Gratuito"],
  },
  {
    id: 4,
    title: "Starfield",
    description:
      "Starfield é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Bethesda Softworks. É o primeiro jogo original da Bethesda Game Studios em 25 anos, desde The Elder Scrolls: Arena, de 1994.",
    category: "Ação",
    system: "PS5",
    image: starfield,
    infos: ["-5%", "R$ 349,95"],
  },
];

const comingSoon: Game[] = [
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
    category: "Luta",
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

export const Categories = () => {
  return (
    <>
      <ProductsList games={promotions} title="Aventura" background="gray" />
      <ProductsList games={comingSoon} title="RPG" background="black" />
      <ProductsList games={comingSoon} title="Ação" background="gray" />
      <ProductsList games={comingSoon} title="FPS" background="black" />
    </>
  );
};
