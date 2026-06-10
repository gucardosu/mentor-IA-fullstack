import { useState, useRef, useEffect } from "react";
import { ChevronRight, Send, Bot, User } from "lucide-react";
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
      text: "Olá! Sou o MentorIA. Como posso ajudar nos seus estudos hoje?",
    },
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  const enviarMensagem = (texto) => {
    if (!texto.trim()) return;

    const novaMensagem = { id: Date.now(), sender: "user", text: texto };

    setMensagens((prev) => [...prev, novaMensagem]);
    setInput("");

    setTimeout(() => {
      setMensagens((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Anotado! Em breve estarei conectado à IA para te responder de verdade. 🚀",
        },
      ]);
    }, 1000);
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
                    <div className="message-box">{msg.text}</div>
                  </div>
                </div>
              ))}
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
                onClick={() => enviarMensagem("Perguntar mais")}
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
              />
              <button type="submit" className="btn-send">
                <Send size={20} />
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
