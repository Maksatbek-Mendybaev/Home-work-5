import styles from "./Input.module.css";

export const Input = (props) => {
    const { onChange } = props;
  return (
    <input
      onChange={onChange}
      className={styles.checkbox}
      type="checkbox"
    />
  );
};
