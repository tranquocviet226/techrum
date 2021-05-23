import {
  SET_NOTIFICATION,
  iNotification,
  NotificationAction,
} from "types/common/notificationTypes";

export const setNotification = (
  notification: iNotification
): NotificationAction => {
  return {
    type: SET_NOTIFICATION,
    payload: notification,
  };
};
