import { login } from "actions/admin/authAction";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import colors from "utils/colors";

type Props = {
  switchLogin: (value: boolean) => void;
  onCloseModal: () => void;
};

const LoginModal: React.FC<Props> = (props) => {
  const { switchLogin, onCloseModal } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<any>(null);

  const handleOk = () => {
    dispatch(login(email, password, (e) => setError(e.api)));
  };

  useEffect(() => {
    if (error === "") {
      onCloseModal();
    }
  }, [error]);

  const handleCancel = () => {
    onCloseModal();
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  
  return (
    <Modal
      title="Đăng nhập"
      visible={true}
      okText={"Đăng nhập"}
      cancelText={"Hủy"}
      onCancel={handleCancel}
      bodyStyle={{ paddingBottom: 0 }}
      footer={[
        <div key="footer" className="d-flex justify-content-center">
          <Button onClick={handleCancel} className="mr-4">
            Hủy bỏ
          </Button>
          <Button
            onClick={handleOk}
            type="primary"
            style={{
              backgroundColor: colors.baseOrange,
              borderColor: "lightgray",
            }}
          >
            Đăng nhập
          </Button>
        </div>,
      ]}
    >
      <Form
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <Input
            value={email}
            onChange={(vl) => setEmail(vl.target.value)}
            type="email"
            style={{ padding: 8 }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={password}
            onChange={(vl) => setPassword(vl.target.value)}
            style={{ padding: 8 }}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            autoComplete="on"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item valuePropName="checked" noStyle>
            Bạn chưa có tài khoản?
          </Form.Item>
          <a
            onClick={() => switchLogin(false)}
            className="login-form-forgot ml-2"
            style={{ color: colors.baseOrange }}
          >
            Đăng ký
          </a>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
