import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Banner />,
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
