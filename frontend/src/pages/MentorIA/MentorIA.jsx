import { useState, useRef, useEffect } from "react";
import { ChevronRight, Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { perguntarGemini } from "../../services/geminiService";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import BackButton from "../../components/BackButton/BackButton";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import "../../pages/Home/Home.css";
import "./MentorIA.css";

export default function MentorIA() {
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Olá! Sou a MentorIA. Como posso ajudar nos seus estudos hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  const enviarMensagem = async (texto) => {
    if (!texto.trim() || isLoading) return;

    const novaMensagemUsuario = { id: Date.now(), sender: "user", text: texto };
    setMensagens((prev) => [...prev, novaMensagemUsuario]);
    setInput("");
    setIsLoading(true);

    try {
      const respostaIA = await perguntarGemini(texto);

      const novaMensagemBot = {
        id: Date.now() + 1,
        sender: "bot",
        text: respostaIA,
      };

      setMensagens((prev) => [...prev, novaMensagemBot]);
    } catch (erro) {
      console.error("Erro ao chamar o Gemini:", erro);
      setMensagens((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Desculpe, tive um problema de conexão com a API. Poderia tentar novamente?",
        },
      ]);
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
          <div className="chat-container">
            <div className="chat-header">
              <BackButton />
              <h1>MentorIA</h1>
            </div>

            <div className="chat-messages">
              {mensagens.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                  <div className="avatar">
                    {msg.sender === "bot" ? (
                      <Bot size={20} />
                    ) : (
                      <User size={20} />
                    )}
                  </div>
                  <div>
                    {msg.sender === "bot" && (
                      <div className="message-name">MentorIA</div>
                    )}

                    <div className="message-box">
                      {msg.sender === "bot" ? (
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      ) : (
                        msg.text
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="message bot">
                  <div className="avatar">
                    <Bot size={20} />
                  </div>
                  <div>
                    <div className="message-name">MentorIA</div>
                    <div className="message-box">Digitando...</div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="chat-actions">
              <ButtonWithIcon
                title="O que estudar hoje?"
                icon={<ChevronRight size={18} />}
                onClick={() => enviarMensagem("O que estudar hoje?")}
              />
              <ButtonWithIcon
                title="Revisar meu progresso"
                icon={<ChevronRight size={18} />}
                onClick={() => enviarMensagem("Revisar meu progresso")}
              />
              <ButtonWithIcon
                title="Perguntar mais"
                icon={<ChevronRight size={18} />}
                onClick={() =>
                  enviarMensagem(
                    "Me dê dicas de como perguntar melhor para uma IA.",
                  )
                }
              />
            </div>

            <form
              className="chat-input-area"
              onSubmit={(e) => {
                e.preventDefault();
                enviarMensagem(input);
              }}
            >
              <input
                type="text"
                placeholder="Digite sua dúvida aqui..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="btn-send"
                disabled={isLoading || !input.trim()}
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
