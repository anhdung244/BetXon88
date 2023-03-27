import { ReactNode } from "react";
import styles from "./style.module.scss";

interface IButtonProps {
<<<<<<< HEAD
    type: string;
    children: ReactNode;
    className?: string | null;
=======
  type: string;
  children: ReactNode;
  className?: string | null;
>>>>>>> d234a32 (add title and match tab)
}

function AuthButton({ type, children, className, ...props }: IButtonProps) {
  return (
    <button
      className={`${className} ${
        type === "pinkToGreen" ? styles["login_btn"] : styles["logout_btn"]
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default AuthButton;
