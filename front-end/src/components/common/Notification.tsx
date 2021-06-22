import { FC, useState, useEffect } from "react";
import { iNotification } from "types/common/notificationTypes";
import { useDispatch } from "react-redux";
import { setNotification } from "actions/common/notificationAction";
import Snackbar from "components/admin/common/Snackbar/Snackbar";

const Notification: FC<iNotification> = ({ message, type }) => {
  const dispatch = useDispatch();
  const [messState, setMessState] = useState<any>(message);
  const [notificationMsg, setNotificationMsg] = useState("");
  const [notificationColor, setNotificationColor] =
    useState<"info" | "primary" | "success" | "danger" | "warning">("success");

  useEffect(() => {
    setNotificationMsg(message);
    setNotificationColor(type);
    setMessState(message);
  }, [message]);

  useEffect(() => {
    if (messState) {
      setTimeout(() => {
        dispatch(setNotification({ type: notificationColor, message: "" }));
      }, 3000);
    }
  }, [messState]);

  return (
    <Snackbar
      place="tr"
      open={messState !== "" ? true : false}
      message={notificationMsg}
      close={true}
      color={notificationColor}
      closeNotification={() =>
        dispatch(setNotification({ type: notificationColor, message: "" }))
      }
    />
  );
};

export default Notification;
