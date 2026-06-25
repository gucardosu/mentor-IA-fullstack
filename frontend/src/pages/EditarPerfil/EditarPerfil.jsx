import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Avatar from "../../components/Avatar/Avatar";
import "../../pages/Home/Home.css";
import "./EditarPerfil.css";

export default function EditarPerfil() {
  const navigate = useNavigate();

  // Estados para controlar o formulário
  const [nome, setNome] = useState("Usuário MentorIA");
  const [email, setEmail] = useState("usuario@mentoria.com");

  const handleSalvar = (e) => {
    e.preventDefault();
    alert("Perfil salvo com sucesso!");
  };

  return (
    <div className="home-layout">
      <Sidebar />
      <div className="home-main">
        <Header />

        <main className="home-content">
          <div className="perfil-container">
            <Card>
              <h2 className="titulo-perfil">Editar Perfil</h2>

              {/* Área de exibição exigida na atividade */}
              <div className="perfil-info-display">
                <Avatar size="100px" />
                <div className="perfil-textos">
                  <h3>{nome}</h3>
                  <p>{email}</p>
                </div>
              </div>

              <hr className="divisor" />

              {/* Formulário exigido na atividade */}
              <form className="editar-perfil-form" onSubmit={handleSalvar}>
                <Input
                  label="Nome Completo:"
                  type="text"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Input
                  label="E-mail:"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Ações exigidas na atividade */}
                <div className="perfil-actions">
                  <div className="action-left">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => navigate("/alterar-senha")}
                    >
                      Alterar Senha
                    </Button>
                  </div>

                  <div className="action-right">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => navigate(-1)}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit" variant="primary">
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
