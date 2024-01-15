import { Banner } from "../../components/Banner";
import { ProductsList } from "../../components/ProducList";

import { useGetOnSaleGameQuery, useGetSoonQuery } from "../../services/api";

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
    languages: string[];
  };
  media: {
    cover: string;
    thumbnail: string;
    gallery: GalleryItem[];
  };
};

export const Home = () => {
  const { data: soonGames } = useGetSoonQuery();
  const { data: onSaleGames } = useGetOnSaleGameQuery();

  if (soonGames && onSaleGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} title="Promoções" background="gray" />
        <ProductsList games={soonGames} title="Em breve" background="black" />
      </>
    );
  }
  return <h4>...carregando</h4>;
};
