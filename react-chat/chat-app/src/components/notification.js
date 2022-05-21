import { useEffect, useState } from "react";

const Notification = ({ socket }) => {
  const [sender, setSender] = useState("");
  const [notified, setNotified] = useState(true);

  useEffect(() => {
    socket.on("send-notification", (s) => {
      setSender(s);
      setNotified(false);

      setTimeout(() => {
        setNotified(true);
      }, 5000);
    });
  }, []);

  const onCloseNotification = () => {
    setNotified(true);
  }

  if (!notified && sender)
    return <div className="notification">{sender} a trimis un mesaj! <span onClick={onCloseNotification}>x</span></div>;
};

export default Notification;
