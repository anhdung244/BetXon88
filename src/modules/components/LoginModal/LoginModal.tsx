import {Col, Modal, Row} from "antd";
import {useState} from "react";
import LoginForm from "./LoginForm";
import LoginFormHeader from "./LoginFormHeader";
import "./style.scss";
interface ILoginModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}
const LoginModal = ({open, setOpen}: ILoginModalProps) => {
    const handleCloseModal = () => {
        setOpen(false);
    };

    const [isLogin, setIsLogin] = useState(false);
    return (
        <Modal
            open={open}
            centered
            width={1200}
            footer={null}
            onCancel={handleCloseModal}
            className="login-modal-wrapper"
        >
            <Row className="login-modal-content" justify="center">
                <Col span={12}>
                    <img
                        src="https://pixner.net/sportsodds/sportsbet/assets/img/modal/modal.png"
                        className="modal-login-img"
                    />
                </Col>
                <Col span={12} className="login-form-wrapper">
                    <LoginFormHeader handleChangeForm={setIsLogin} />
                    <LoginForm login={isLogin} />
                </Col>
            </Row>
        </Modal>
    );
};

export default LoginModal;
