import txtConstants from "constants/index";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { Menu, Dropdown } from "antd";
import { FormOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { logout } from "actions/admin/authAction";

type Props = {
  email?: string;
};

const TrendingBar: React.FC<Props> = (props) => {
  const { email } = props;
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSwitchLogin, setIsSwitchLogin] = useState(true);

  const showModal = () => {
    !email && setIsModalVisible(true);
  };

  const switchLoginRegister = (value: boolean) => {
    setIsSwitchLogin(value);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const _renderLoginModal = () => {
    return (
      <LoginModal
        switchLogin={switchLoginRegister}
        onCloseModal={handleClose}
      />
    );
  };

  const _renderRegisterModal = () => {
    return (
      <RegisterModal
        switchLogin={switchLoginRegister}
        onCloseModal={() => {
          setIsSwitchLogin(true);
          handleClose();
        }}
      />
    );
  };

  const menu = (
    <Menu
      style={{
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <Menu.Item icon={<UserOutlined />}>{txtConstants.profile}</Menu.Item>
      <Menu.Item icon={<FormOutlined />}>{txtConstants.createPost}</Menu.Item>
      <Menu.Item onClick={handleLogout} icon={<LogoutOutlined />} danger>
        {txtConstants.logout}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="topbar topbar-gray" style={{ paddingBottom: 0 }}>
      {isModalVisible ? (
        <>{isSwitchLogin ? _renderLoginModal() : _renderRegisterModal()}</>
      ) : (
        <></>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="tranding-bg-white">
              <div className="tranding-bar">
                <div
                  id="tredingcarousel"
                  className="trending-slide carousel slide trending-slide-bg"
                  data-ride="carousel"
                >
                  <p className="trending-title">
                    <i className="fa fa-bolt" />{" "}
                    {txtConstants.trending.toUpperCase()}
                  </p>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="post-content">
                        <p className="post-title title-small">
                          <a href="#">
                            Welcome {email ? email : "to Techrum.org"}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-control d-none">
                    <a
                      className="tp-control-prev"
                      href="#tredingcarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-angle-left" />
                    </a>
                    <a
                      className="tp-control-next"
                      href="#tredingcarousel"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 xs-center align-self-center text-right">
            {email ? (
              <Dropdown overlay={menu} trigger={["click"]}>
                <ul onClick={showModal} className="top-info cur-po">
                  <li
                    style={{
                      color: "#000",
                      fontWeight: 600,
                      fontSize: 12,
                      cursor: "pointer",
                    }}
                  >
                    <i className="fas fa-user-circle"></i>
                    <span>
                      {email
                        ? txtConstants.txtAccount.toUpperCase()
                        : txtConstants.login.toUpperCase()}
                    </span>
                  </li>
                </ul>
              </Dropdown>
            ) : (
              <ul onClick={showModal} className="top-info cur-po">
                <li
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  <i className="fas fa-user-circle"></i>
                  <span>
                    {email
                      ? txtConstants.txtAccount.toUpperCase()
                      : txtConstants.login.toUpperCase()}
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, null)(TrendingBar);
