import "./Avatar.css";

export default function Avatar({ src, alt, size = "80px" }) {
  return (
    <div className="avatar-container" style={{ width: size, height: size }}>
      <img
        src={
          src ||
          "https://ui-avatars.com/api/?name=Usuario&background=15325A&color=fff"
        }
        alt={alt || "Foto de perfil"}
        className="avatar-img"
      />
    </div>
  );
}
