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

  if (!notified && sender)
    return <div className="notification">{sender} a trimis un mesaj!</div>;
};

export default Notification;
