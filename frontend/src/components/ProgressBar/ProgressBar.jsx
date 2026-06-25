import "./ProgressBar.css";

export default function ProgressBar({ atual, total }) {
  const porcentagem = Math.round((atual / total) * 100);

  return (
    <div className="progress-wrapper">
      <div className="progress-info">
        <span>Progresso da avaliação</span>
        <strong>
          {atual}/{total}
        </strong>
      </div>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>
    </div>
  );
}
