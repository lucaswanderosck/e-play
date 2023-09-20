import { Banner } from "../../components/Banner";
import { ProductsList } from "../../components/ProducList";
import { comingSoon } from "../../data/comingSoon";
import { promotions } from "../../data/promotions";

export const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promotions} title="Promoções" background="gray" />
      <ProductsList games={comingSoon} title="Em breve" background="black" />
    </>
  );
};
