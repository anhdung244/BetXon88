import AuthButton from "@/common/Button";
import {Button, Checkbox, Form, Input} from "antd";
import loginRules from "./loginFormRules";
import "./style.scss";

interface IFormProps {
    login?: boolean;
}

const LoginForm = ({login}: IFormProps) => {
    const handleSubmitForm = (values: any) => {
        console.log("💕 LoginForm-L7-values", values);
    };

    return (
        <Form
            className="login-form"
            scrollToFirstError
            size="large"
            onFinish={handleSubmitForm}
        >
            <Form.Item label="Email" name="email" rules={[loginRules.email]}>
                <Input type="email" />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[loginRules.password]}
            >
                <Input.Password />
            </Form.Item>
            {!login && (
                <Form.Item
                    label="Confirmed"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password",
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    "Two passwords must be matched"
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password type="password" />
                </Form.Item>
            )}
            {login && (
                <div className="flex justify-between">
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <div className="forgot-password">Forgot Password</div>
                </div>
            )}
            <Form.Item>
                <AuthButton
                    type="submit"
                    htmlType="submit"
                    className="login-form-submit-btn"
                >
                    Submit
                </AuthButton>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
