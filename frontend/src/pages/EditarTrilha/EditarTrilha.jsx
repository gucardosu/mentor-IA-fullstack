import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import PageTitle from "../../components/PageTitle/PageTitle";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import "../../pages/Home/Home.css";
import "./EditarTrilha.css";

export default function EditarTrilha() {
  const navigate = useNavigate();

  const [area, setArea] = useState("");
  const [nivel, setNivel] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const opcoesArea = [
    { valor: "frontend", texto: "Desenvolvimento Front-end" },
    { valor: "backend", texto: "Desenvolvimento Back-end" },
    { valor: "fullstack", texto: "Desenvolvimento Fullstack" },
    { valor: "dados", texto: "Ciência de Dados" },
  ];

  const handleSalvar = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Trilha de aprendizado atualizada com sucesso!");
    setIsLoading(false);
  };

  return (
    <div className="home-layout">
      <Sidebar />

      <div className="home-main">
        <Header />

        <main className="home-content">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <PageTitle
              title="Editar Minha Trilha"
              subtitle="Ajuste sua área de foco e nível de conhecimento para personalizarmos seus estudos."
            />

            <Card>
              <form className="editar-trilha-form" onSubmit={handleSalvar}>
                <Select
                  label="Área de Aprendizado:"
                  options={opcoesArea}
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />

                <div className="nivel-conhecimento-container">
                  <label className="nivel-conhecimento-label">
                    Nível de Conhecimento:
                  </label>
                  <div className="nivel-botoes">
                    <Button
                      type="button"
                      variant={nivel === "iniciante" ? "primary" : "secondary"}
                      onClick={() => setNivel("iniciante")}
                    >
                      Iniciante
                    </Button>
                    <Button
                      type="button"
                      variant={
                        nivel === "intermediario" ? "primary" : "secondary"
                      }
                      onClick={() => setNivel("intermediario")}
                    >
                      Intermediário
                    </Button>
                    <Button
                      type="button"
                      variant={nivel === "avancado" ? "primary" : "secondary"}
                      onClick={() => setNivel("avancado")}
                    >
                      Avançado
                    </Button>
                  </div>
                </div>

                <div className="form-actions">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => navigate(-1)}
                  >
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isLoading}
                    disabled={!area || !nivel}
                  >
                    Salvar Alterações
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
