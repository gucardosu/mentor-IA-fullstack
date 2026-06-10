import styles from "./ButtonWithIcon.module.css";

export function ButtonWithIcon({ title, icon, onClick, variant = "primary" }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {icon}
      <span>{title}</span>
    </button>
  );
}
