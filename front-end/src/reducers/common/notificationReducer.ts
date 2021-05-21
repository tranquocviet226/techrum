import {
  SET_NOTIFICATION,
  iNotification,
  NotificationAction,
} from "types/common/notificationTypes";

const initialState: iNotification = {
  message: "",
  type: "success",
};

const notificationReducer = (
  state = initialState,
  action: NotificationAction
): iNotification => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        message: action.payload.message,
        type: action.payload.type,
      };
    default:
      return state;
  }
};

export default notificationReducer;
