export default function PageTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h1 style={{ color: "#15325A", fontSize: "28px", margin: "0 0 8px 0" }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ color: "#6B7280", margin: 0, fontSize: "16px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
