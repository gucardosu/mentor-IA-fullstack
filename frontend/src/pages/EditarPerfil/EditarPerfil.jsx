import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Avatar from "../../components/Avatar/Avatar";
import "../../pages/Home/Home.css";
import "../EditarTrilha/EditarTrilha.css";
import "./EditarPerfil.css";

export default function EditarPerfil() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("Gustavo Cardoso");
  const [email, setEmail] = useState("gustavo@email.com");
  const [isLoading, setIsLoading] = useState(false);

  const handleSalvar = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Perfil atualizado com sucesso!");
    setIsLoading(false);
  };

  return (
    <div className="home-layout">
      <Sidebar />

      <div className="home-main">
        <Header />

        <main className="home-content">
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Card>
              <div className="titulo-card">
                <ChevronLeft
                  size={24}
                  cursor="pointer"
                  onClick={() => navigate(-1)}
                />
                Editar Perfil
              </div>

              <div className="perfil-header">
                <Avatar size="120px" alt="Foto de Perfil" />
                <div className="perfil-info">
                  <h2 className="perfil-nome">{nome}</h2>
                  <p className="perfil-email-texto">{email}</p>
                </div>
              </div>

              <form className="perfil-form" onSubmit={handleSalvar}>
                <Input
                  label="Nome Completo"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Input
                  label="E-mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="perfil-actions">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => navigate("/alterar-senha")}
                  >
                    Alterar Senha
                  </Button>

                  <div className="botoes-direita">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => navigate(-1)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isLoading}
                    >
                      Salvar
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
