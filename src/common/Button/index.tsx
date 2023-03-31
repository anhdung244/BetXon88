import {MouseEventHandler, ReactNode} from "react";
import styles from "./style.module.scss";

interface IButtonProps {
    type: string;
    children: ReactNode;
    className?: string | null;
    htmlType?: string | null;
    onClick?: MouseEventHandler;
}

function AuthButton({
    type,
    children,
    className,
    onClick,
    ...props
}: IButtonProps) {
    return (
        <button
            className={`${className} ${
                type === "pinkToGreen"
                    ? styles["login_btn"]
                    : styles["logout_btn"]
            }`}
            {...props}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default AuthButton;
