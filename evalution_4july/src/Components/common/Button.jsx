import styles from "./Button.module.css";

function Button({ disabled,children,handleButton }) {
  return (
    <button disabled={disabled} onClick={handleButton} className={styles.button} data-testid="button">

      {console.log("hell kikik", disabled)}
      {children}
    </button>
  );
}

export default Button;
