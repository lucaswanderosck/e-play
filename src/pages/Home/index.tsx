import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { ProductsList } from "../../components/ProducList";

export interface GalleryItem {
  type: "image" | "video";
  url: string;
}

export type Game = {
  id: number;
  name: string;
  description: string;
  releaseDate?: string;
  prices: {
    discount?: number;
    old?: number;
    current?: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    language: string[];
  };
  media: {
    cover: string;
    thumbnail: string;
    galery: GalleryItem[];
  };
};

export const Home = () => {
  const [promotions, setPromotions] = useState<Game[]>([]);
  const [comingSoon, setComingSoon] = useState<Game[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/promocoes")
      .then((response) => response.json())
      .then((data) => setPromotions(data));

    fetch("https://fake-api-tau.vercel.app/api/eplay/em-breve")
      .then((response) => response.json())
      .then((data) => setComingSoon(data));
  }, []);

  return (
    <>
      <Banner />
      <ProductsList games={promotions} title="Promoções" background="gray" />
      <ProductsList games={comingSoon} title="Em breve" background="black" />
    </>
  );
};
