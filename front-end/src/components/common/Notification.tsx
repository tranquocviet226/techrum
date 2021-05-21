import { FC, useState, useEffect } from 'react';
import { iNotification } from 'types/common/notificationTypes'
import { useDispatch } from 'react-redux'
import { setNotification } from 'actions/common/notificationAction'
import Snackbar from 'components/admin/common/Snackbar/Snackbar';

const Notification: FC<iNotification> = ({ message, type }) => {
    const dispatch = useDispatch()
    const [notificationMsg, setNotificationMsg] = useState('')
    const [notificationColor, setNotificationColor] = useState<"info" | "primary" | "success" | "danger" | "warning">('success')

    useEffect(() => {
        setNotificationMsg(message)
        setNotificationColor(type)
    }, [message])
    return (
        <Snackbar
            place="tr"
            open={message ? true : false}
            message={notificationMsg}
            close={true}
            color={notificationColor}
            closeNotification={() => dispatch(setNotification({ type: notificationColor, message: "" }))}
        />
    )
}

export default Notification
