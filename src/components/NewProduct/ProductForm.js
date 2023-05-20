import { useRef } from "react";

import styles from "./ProductForm.module.css";

const ProductForm = (props) => {
  const productInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = productInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterProduct(enteredValue);
      productInputRef.current.value = ""; // Reset the input field value to an empty string
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input type="text" ref={props.inputRef} />
      <button>
        {props.loading ? "Обработка запроса..." : "Добавить Товар"}
      </button>
    </form>
  );
};

export default ProductForm;
