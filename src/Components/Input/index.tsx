import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Input(props: any) {
  const { name , label, ...rest } = props;
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <input
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span style={{ color: "#ff3333" }}>{error}</span>}
    </>
  );
}
