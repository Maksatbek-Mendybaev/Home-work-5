import styles from "./Button.module.css";

export const Button = (props) => {
  const children = props.children;
  return (
    <div>
      <button onClick={props.onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
};
