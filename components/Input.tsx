import React, { forwardRef, InputHTMLAttributes } from "react";
import styles from "@/styles/Input.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => (
    <div className={styles.inputGroup}>
      {label && <label>{label}</label>}
      <input ref={ref} className={className} {...props} />
      {error && <span style={{ color: "red", fontSize: ".8rem" }}>{error}</span>}
    </div>
  )
);

Input.displayName = "Input";

export default Input;
