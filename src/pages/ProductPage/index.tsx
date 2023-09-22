import { useParams } from "react-router-dom";

import { Hero } from "../../components/Hero";

export const ProductPage = () => {
  const { id } = useParams();

  return (
    <>
      <Hero />
    </>
  );
};
