import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import MentorIaCard from "../../components/MentorIaCard/MentorIaCard";
import Button from "../../components/Button/Button";
import "./Home.css";

export default function Home() {
  const [trilhas, setTrilhas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const buscarTrilhas = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/trilhas");
        if (resposta.ok) {
          const dados = await resposta.json();
          setTrilhas(dados);
        }
      } catch (erro) {
        console.error("Erro ao buscar trilhas da API:", erro);
      } finally {
        setIsLoading(false);
      }
    };

    buscarTrilhas();
  }, []);

  return (
    <div className="home-layout">
      <Sidebar />

      <div className="home-main">
        <Header />

        <main className="home-content">
          <div className="dashboard-grid">
            <div className="area-aulas">
              <Card title="Minhas Trilhas de Estudo">
                {isLoading ? (
                  <p style={{ padding: "16px" }}>Carregando suas trilhas...</p>
                ) : trilhas.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "32px 0" }}>
                    <p style={{ marginBottom: "16px", color: "#6B7280" }}>
                      Você ainda não tem nenhuma trilha cadastrada.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => navigate("/editar-trilha")}
                    >
                      Criar Minha Primeira Trilha
                    </Button>
                  </div>
                ) : (
                  trilhas.map((trilha) => (
                    <div className="aula-item" key={trilha.id}>
                      <div className="aula-info">
                        <h4>{trilha.nome}</h4>
                        <p style={{ textTransform: "capitalize" }}>
                          Área: {trilha.area} | Nível: {trilha.nivelAtual}
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            color:
                              trilha.status === "CONCLUIDA"
                                ? "green"
                                : "#F2994A",
                            marginTop: "4px",
                          }}
                        >
                          Status: {trilha.status.replace("_", " ")}
                        </p>
                      </div>
                      <div>
                        <Button
                          variant={
                            trilha.status === "CONCLUIDA"
                              ? "secondary"
                              : "primary"
                          }
                          onClick={() =>
                            alert(`Acessando planos da trilha ID: ${trilha.id}`)
                          }
                        >
                          {trilha.status === "CONCLUIDA"
                            ? "Revisar"
                            : "Continuar"}
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </Card>
            </div>

            <div className="area-ia">
              <MentorIaCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
