import "./PageTitle.css";

export default function PageTitle({ title, subtitle }) {
  return (
    <div className="page-title-container">
      <h1 className="page-title-heading">{title}</h1>
      {subtitle && <p className="page-title-subtitle">{subtitle}</p>}
    </div>
  );
}
