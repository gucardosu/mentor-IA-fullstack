export default function Select({ label, options, value, onChange }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}
    >
      {label && (
        <label
          style={{ marginBottom: "8px", fontWeight: "bold", color: "#15325A" }}
        >
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        style={{
          padding: "12px 16px",
          borderRadius: "8px",
          border: "1px solid #EAEAEA",
          backgroundColor: "#F8F9FA",
          fontSize: "16px",
          color: "#333",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <option value="" disabled>
          Selecione uma opção...
        </option>
        {options.map((opcao, index) => (
          <option key={index} value={opcao.valor}>
            {opcao.texto}
          </option>
        ))}
      </select>
    </div>
  );
}
