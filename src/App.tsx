import { Banner } from "./components/Banner";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  );
};
