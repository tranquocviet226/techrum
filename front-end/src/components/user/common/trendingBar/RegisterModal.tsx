import { Button, Upload, Form, Input, Modal } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import colors from "utils/colors";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { register } from "actions/admin/authAction";
import { User } from "entities/User";
import { setNotification } from "actions/common/notificationAction";
import { APP_URL } from "constants/index";

type Props = {
  onCloseModal: () => void;
  switchLogin: (value: boolean) => void;
};

const RegisterModal: React.FC<Props> = (props) => {
  const { onCloseModal, switchLogin } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [avatar, setAvatar] = useState<any>();
  const [errors, setErrors] = useState<any>();

  useEffect(() => {
    if (errors === "") {
      onCloseModal();
    }
  }, [errors]);

  const handleOk = () => {
    if (password === passwordConfirmation) {
      const user: User = {
        email: email,
        password: password,
        lastName: fullname,
        avatarUrl: avatar
      };
      dispatch(
        register(
          user,
          (e) => setErrors(e.api),
          () => {
            return undefined;
          }
        )
      );
    } else {
      dispatch(
        setNotification({
          type: "danger",
          message: "Mật khẩu không khớp",
        })
      );
      setErrors("Mật khẩu không khớp");
    }
  };

  const handleCancel = () => {
    onCloseModal();
  };

  const [fileList, setFileList] = useState<any>([]);

  const onChangeAvatar = (newFileList: any) => {
    setFileList(newFileList?.fileList);
    setAvatar(newFileList?.file?.response?.link)
  };

  const onPreview = async (file: any) => {
    let src = file.url;
  };

  return (
    <Modal
      title="Đăng ký"
      visible={true}
      okText={"Đăng ký"}
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
            Đăng ký
          </Button>
        </div>,
      ]}
    >
      <Form className="login-form" initialValues={{ remember: true }}>
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
          <Input
            value={passwordConfirmation}
            onChange={(vl) => setPasswordConfirmation(vl.target.value)}
            style={{ padding: 8 }}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            autoComplete="on"
            placeholder="Nhập lại mật khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={fullname}
            onChange={(vl) => setFullname(vl.target.value)}
            style={{ padding: 8 }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            autoComplete="on"
            placeholder="Họ và tên"
          />
        </Form.Item>
        <div
          style={{
            display: "flex",
          }}
        >
          <Form.Item>
            <Upload
              fileList={fileList}
              onChange={onChangeAvatar}
              onPreview={onPreview}
              action={APP_URL.concat("upload")}
              listType="picture-card"
              maxCount={1}
            >
              {fileList.length < 1 && "+ Ảnh đại diện"}
            </Upload>
          </Form.Item>
        </div>
        <Form.Item>
          <Form.Item valuePropName="checked" noStyle>
            Bạn đã có tài khoản?
          </Form.Item>
          <a
            onClick={() => switchLogin(true)}
            className="login-form-forgot ml-2"
            style={{ color: colors.baseOrange }}
          >
            Đăng nhập
          </a>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegisterModal;
