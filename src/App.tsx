import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsList } from "./components/ProducsList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
        <ProductsList title="Em breve" background="black" />
      </>
    ),
  },
]);

export const App = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  );
};
