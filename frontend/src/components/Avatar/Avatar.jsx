export default function Avatar({ src, alt, size = "100px" }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "#EAEAEA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #3B82F6",
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span style={{ color: "#6B7280", fontSize: "12px" }}>Sem foto</span>
      )}
    </div>
  );
}
