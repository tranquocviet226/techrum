export const SET_NOTIFICATION = "SET_NOTIFICATION";

export interface iNotification {
  message: string;
  type: "info" | "primary" | "success" | "danger" | "warning";
}

interface SetNotificationAction {
  type: typeof SET_NOTIFICATION;
  payload: iNotification;
}

export type NotificationAction = SetNotificationAction;
