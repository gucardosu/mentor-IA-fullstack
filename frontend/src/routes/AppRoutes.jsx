import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import MentorIA from "../pages/MentorIA/MentorIA";
import RotaProtegida from "./RotaProtegida";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      

      <Route
        path="/home"
        element={
          <RotaProtegida>
            <Home />
          </RotaProtegida>
        }
      />

      <Route
        path="/mentoria"
        element={
          <RotaProtegida>
            <MentorIA />
          </RotaProtegida>
        }
      />
    </Routes>
  );
}
