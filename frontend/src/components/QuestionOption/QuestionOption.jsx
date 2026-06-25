import "./QuestionOption.css";

export default function QuestionOption({ texto, selecionada, onClick }) {
  return (
    <div
      className={`question-option ${selecionada ? "selecionada" : ""}`}
      onClick={onClick}
    >
      <div className="option-radio">
        {selecionada && <div className="radio-dot"></div>}
      </div>
      <span className="option-text">{texto}</span>
    </div>
  );
}
