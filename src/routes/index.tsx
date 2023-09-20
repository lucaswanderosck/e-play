import { Route, Routes } from "react-router-dom";
import { Categories } from "../pages/Categories";
import { Home } from "../pages/Home";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categories />} />
    </Routes>
  );
};
