import {ReactNode} from "react";
import styles from "./style.module.scss";

interface IButtonProps {
    type: string;
    children: ReactNode;
    className: string | null;
}

function AuthButton({type, children, className, ...props}: IButtonProps) {
    return (
        <button
            className={`${className} ${
                type === "pinkToGreen"
                    ? styles["login_btn"]
                    : styles["logout_btn"]
            }`}
            {...props}
        >
            {children}
        </button>
    );
}

export default AuthButton;
