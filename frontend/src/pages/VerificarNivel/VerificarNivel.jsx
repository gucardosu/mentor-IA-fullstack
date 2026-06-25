import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import QuestionOption from "../../components/QuestionOption/QuestionOption";
import "../../pages/Home/Home.css";
import "./VerificarNivel.css";

const questoes = [
  {
    id: 1,
    nivel: "Iniciante",
    pergunta: "O que é HTML?",
    opcoes: [
      "Uma linguagem de programação",
      "Uma linguagem de marcação",
      "Um sistema de banco de dados",
    ],
  },
  {
    id: 2,
    nivel: "Intermediário",
    pergunta: "Qual é a principal função do React?",
    opcoes: [
      "Estilizar páginas web",
      "Criar interfaces de usuário (UI)",
      "Gerenciar bancos de dados relacionais",
    ],
  },
];

export default function VerificarNivel() {
  const navigate = useNavigate();
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const questao = questoes[questaoAtual];
  const totalQuestoes = questoes.length;

  const handleProximo = () => {
    if (questaoAtual < totalQuestoes - 1) {
      setQuestaoAtual(questaoAtual + 1);
      setOpcaoSelecionada(null); // Limpa a seleção para a próxima pergunta
    } else {
      alert("Avaliação concluída com sucesso!");
      navigate("/editar-trilha"); // Volta para a edição de trilha ao finalizar
    }
  };

  return (
    <div className="home-layout">
      <Sidebar />
      <div className="home-main">
        <Header />

        <main className="home-content">
          <div className="avaliacao-container">
            <div className="avaliacao-header">
              <h2>Avaliação de Nível</h2>
              <p>
                A avaliação de nível serve para entender seu nível atual de
                conhecimento e personalizar sua jornada de aprendizado.
              </p>
            </div>

            <ProgressBar atual={questaoAtual + 1} total={totalQuestoes} />

            <QuestionCard pergunta={questao.pergunta} nivel={questao.nivel}>
              {questao.opcoes.map((opcao, index) => (
                <QuestionOption
                  key={index}
                  texto={opcao}
                  selecionada={opcaoSelecionada === index}
                  onClick={() => setOpcaoSelecionada(index)}
                />
              ))}
            </QuestionCard>

            <div className="avaliacao-actions">
              <Button variant="secondary" onClick={() => navigate(-1)}>
                Voltar
              </Button>
              <Button
                variant="primary"
                onClick={handleProximo}
                disabled={opcaoSelecionada === null} // Só libera se responder
              >
                {questaoAtual === totalQuestoes - 1 ? "Finalizar" : "Próximo"}
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
