import Card from "../Card/Card";
import "./QuestionCard.css";

export default function QuestionCard({ pergunta, nivel, children }) {
  return (
    <Card>
      <div className="question-header">
        <span className="badge-nivel">{nivel}</span>
      </div>
      <h3 className="question-title">{pergunta}</h3>
      <div className="question-options-container">{children}</div>
    </Card>
  );
}
