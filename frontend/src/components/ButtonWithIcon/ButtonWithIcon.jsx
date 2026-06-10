import "./ButtonWithIcon.css";

export default function ButtonWithIcon({
  title,
  icon,
  variant = "default",
  onClick,
}) {
  return (
    <button className={`btn-with-icon ${variant}`} onClick={onClick}>
      {title}
      {icon}
    </button>
  );
}
