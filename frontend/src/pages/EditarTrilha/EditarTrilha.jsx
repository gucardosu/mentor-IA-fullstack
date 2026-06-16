import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import MentorIaCard from "../../components/MentorIaCard/MentorIaCard";
import "../../pages/Home/Home.css";
import "./EditarTrilha.css";

export default function EditarTrilha() {
  const navigate = useNavigate();

  const [area, setArea] = useState("");
  const [nivel, setNivel] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const opcoesArea = [
    { valor: "logica", texto: "Lógica de programação" },
    { valor: "frontend", texto: "Desenvolvimento Front-end" },
    { valor: "backend", texto: "Desenvolvimento Back-end" },
  ];

  const handleSalvar = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      nome: `Trilha de ${area}`,
      area: area,
      nivelAtual: nivel,
      nivelObjetivo: "Avançado",
      usuarioId: 1,
    };

    try {
      const resposta = await fetch("http://localhost:3000/trilhas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (resposta.ok) {
        alert("Trilha cadastrada no banco de dados com sucesso!");
        navigate("/home");
      } else {
        const dados = await resposta.json();
        alert(`Erro: ${dados.erro || "Não foi possível cadastrar a trilha."}`);
      }
    } catch (erro) {
      console.error("Erro na conexão com a API:", erro);
      alert("Servidor offline. Verifique se o back-end está rodando.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-layout">
      <Sidebar />

      <div className="home-main">
        <Header />

        <main className="home-content">
          <div className="dashboard-grid">
            <div className="area-aulas">
              <Card>
                <div className="titulo-card">
                  <ChevronLeft
                    size={24}
                    cursor="pointer"
                    onClick={() => navigate(-1)}
                  />
                  Minha trilha
                </div>

                <form className="editar-trilha-form" onSubmit={handleSalvar}>
                  <div>
                    <div className="header-linha">
                      <label className="nivel-conhecimento-label">
                        Área de aprendizado
                      </label>
                      <button type="button" className="btn-pequeno">
                        Adicionar Nova
                      </button>
                    </div>
                    <Select
                      options={opcoesArea}
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>

                  <div style={{ marginTop: "8px" }}>
                    <div className="header-linha">
                      <label className="nivel-conhecimento-label">
                        Nível de Conhecimento
                      </label>
                      <button
                        type="button"
                        className="btn-pequeno"
                        onClick={() => navigate("/verificar-nivel")}
                      >
                        Verificar Nível
                      </button>
                    </div>
                    <div className="nivel-botoes">
                      <Button
                        type="button"
                        variant={
                          nivel === "iniciante" ? "primary" : "secondary"
                        }
                        onClick={() => setNivel("iniciante")}
                      >
                        Nível Iniciante
                      </Button>
                      <Button
                        type="button"
                        variant={
                          nivel === "intermediario" ? "primary" : "secondary"
                        }
                        onClick={() => setNivel("intermediario")}
                      >
                        Nível Intermediário
                      </Button>
                      <Button
                        type="button"
                        variant={nivel === "avancado" ? "primary" : "secondary"}
                        onClick={() => setNivel("avancado")}
                      >
                        Nível Avançado
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
                      Cadastrar
                    </Button>
                  </div>
                </form>
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
