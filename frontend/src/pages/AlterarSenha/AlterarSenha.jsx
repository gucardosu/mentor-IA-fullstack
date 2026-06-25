import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "../../pages/Home/Home.css";
import "./AlterarSenha.css";

export default function AlterarSenha() {
  const navigate = useNavigate();

  // Estados para capturar o que o usuário digita
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSalvar = (e) => {
    e.preventDefault();

    if (novaSenha !== confirmarSenha) {
      alert("A nova senha e a confirmação precisam ser iguais!");
      return;
    }

    alert("Senha alterada com sucesso!");
    navigate(-1); // Volta para a tela de Perfil
  };

  return (
    <div className="home-layout">
      <Sidebar />
      <div className="home-main">
        <Header />

        <main className="home-content">
          <div className="senha-container">
            <Card>
              <h2 className="titulo-senha">Alterar Senha</h2>

              <form className="alterar-senha-form" onSubmit={handleSalvar}>
                <Input
                  label="Senha Atual:"
                  type="password"
                  placeholder="Digite sua senha atual"
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                />

                <Input
                  label="Nova Senha:"
                  type="password"
                  placeholder="Digite sua nova senha"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                />

                <Input
                  label="Confirmar Nova Senha:"
                  type="password"
                  placeholder="Confirme sua nova senha"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />

                <div className="senha-actions">
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
                    disabled={!senhaAtual || !novaSenha || !confirmarSenha}
                  >
                    Salvar
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
