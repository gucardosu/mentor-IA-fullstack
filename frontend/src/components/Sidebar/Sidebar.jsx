import { useNavigate } from "react-router-dom";
import logoProjeto from "../../assets/sketch.png";
import "./Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logoProjeto} alt="Logo Mentor IA+" />
      </div>

      <ul className="sidebar-menu">
        <li className="active" onClick={() => navigate("/home")}>
          Início
        </li>
        <li onClick={() => navigate("/editar-trilha")}>Minhas trilhas</li>
        <li onClick={() => navigate("/mentoria")}>Mentor IA</li>
        <li onClick={() => navigate("/perfil")}>Perfil</li>
      </ul>
    </aside>
  );
}
