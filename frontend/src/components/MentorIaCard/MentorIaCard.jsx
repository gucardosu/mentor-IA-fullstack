import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";

export default function MentorIaCard() {
  const navigate = useNavigate();

  return (
    <Card title="Mentoria IA" style={{ borderColor: "#EAEAEA" }}>
      <h4 style={{ color: "#15325A", fontSize: "18px", marginBottom: "20px" }}>
        Precisa de ajuda?
      </h4>

      <Button variant="secondary" onClick={() => navigate("/mentoria")}>
        Falar com a mentoria IA
      </Button>
    </Card>
  );
}
