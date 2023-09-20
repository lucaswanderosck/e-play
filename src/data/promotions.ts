import { Game } from "../models/Game";

import resident from "../assets/images/resident.png";
import fifa from "../assets/images/fifa.png";
import fortnite from "../assets/images/fortnite.png";
import starfield from "../assets/images/starfield.png";

export const promotions: Game[] = [
  {
    id: 1,
    title: "Resident Evil 4",
    description:
      "Resident Evil 4 é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o Nintendo GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.",
    category: "Ação",
    system: "PS4",
    image: resident,
    infos: ["-10%", "R$ 259,00"],
  },
  {
    id: 2,
    title: "FIFA 23",
    description:
      "FIFA 23 é um jogo eletrônico de futebol desenvolvido e publicado pela Electronic Arts, lançado mundialmente em 30 de setembro de 2023 para PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Nintendo Switch e Microsoft Windows.",
    category: "FPS",
    system: "Xbox Series X/S",
    image: fifa,
    infos: ["-50%", "R$ 79,00"],
  },
  {
    id: 3,
    title: "Fortnite",
    description:
      "Fortnite é um jogo eletrônico multijogador online revelado originalmente em 2011, desenvolvido pela Epic Games e lançado como diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.",
    category: "Aventura",
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
