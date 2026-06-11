import "./Avatar.css";

export default function Avatar({ src, alt, size = "100px" }) {
  return (
    <div className="avatar-container" style={{ width: size, height: size }}>
      {src ? (
        <img className="avatar-image" src={src} alt={alt} />
      ) : (
        <span className="avatar-placeholder">Sem foto</span>
      )}
    </div>
  );
}
