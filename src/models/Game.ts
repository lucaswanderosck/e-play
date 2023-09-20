export class Game {
  id: number;
  title: string;
  description: string;
  system: string;
  category: string;
  image: string;
  infos: string[];

  constructor(
    id: number,
    title: string,
    description: string,
    system: string,
    category: string,
    image: string,
    infos: string[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.system = system;
    this.category = category;
    this.image = image;
    this.infos = infos;
  }
}
