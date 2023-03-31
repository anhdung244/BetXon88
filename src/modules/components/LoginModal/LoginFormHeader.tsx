import AuthButton from "@/common/Button";
import IconCircle from "@/common/IconCircle/IconCircle";
import Facebook from "@/icons/Facebook";
import Linkedin from "@/icons/Linkedin";
import Twitter from "@/icons/Twitter";
import {Dispatch, MouseEventHandler, SetStateAction} from "react";
import "./style.scss";

interface IFormProps {
    handleChangeForm: Dispatch<SetStateAction<boolean>>;
}

const LoginFormHeader = ({handleChangeForm}: IFormProps) => {
    const colorOptions = {
        default: {
            background: "#141C33",
            fill: "#FF6600",
        },
        hover: {
            background: "#F3486A",
            fill: "#FFFFFF",
        },
    };
    return (
        <div className="login-form-header-wrapper">
            <div className="login-form-header-content">
                <AuthButton
                    type="default"
                    onClick={() => handleChangeForm(false)}
                >
                    Sign Up
                </AuthButton>
                <AuthButton
                    type="pinkToGreen"
                    onClick={() => handleChangeForm(true)}
                >
                    Sign In
                </AuthButton>
            </div>
            <div className="text-2xl text-white my-10 mx-auto flex items-center justify-center">
                or registration via social media accounts
            </div>
            <div className="icon-header-modal-container">
                <div className="header-icon">
                    <IconCircle color={colorOptions} width={40} height={40}>
                        <Facebook />
                    </IconCircle>
                </div>
                <div className="header-icon">
                    <IconCircle color={colorOptions} width={40} height={40}>
                        <Twitter />
                    </IconCircle>
                </div>
                <div className="header-icon">
                    <IconCircle color={colorOptions} width={40} height={40}>
                        <Linkedin />
                    </IconCircle>
                </div>
            </div>
        </div>
    );
};

export default LoginFormHeader;
