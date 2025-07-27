import React, { forwardRef, ButtonHTMLAttributes } from "react";
import styles from "@/styles/Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`${styles.btn} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
