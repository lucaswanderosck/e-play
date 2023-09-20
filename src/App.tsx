import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Rotas } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  );
};
