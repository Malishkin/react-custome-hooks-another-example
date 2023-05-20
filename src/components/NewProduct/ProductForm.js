import { useState } from "react";
import styles from "./ProductForm.module.css";

const ProductForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length > 0) {
      props.onEnterProduct(enteredValue);
      setEnteredValue("");
    }
  };

  const changeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        value={enteredValue}
        onChange={changeHandler}
      />
      <button>
        {props.loading ? "Обработка запроса..." : "Добавить Товар"}
      </button>
    </form>
  );
};

export default ProductForm;
