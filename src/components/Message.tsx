import React from "react";
import "./Message.css";

interface MessageProps {
  type: "success" | "error";
  message: string;
}

const Message: React.FC<MessageProps> = ({ type, message }) => {
  return (
    <div className={`message ${type}`}>
      {type === "success" && <i className="fas fa-check-circle"></i>}
      {type === "error" && <i className="fas fa-exclamation-circle"></i>}
      <span>{message}</span>
    </div>
  );
};

export default Message;
