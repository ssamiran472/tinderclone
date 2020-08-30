import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Chat = ({ name, massage, profilePic, timeStamp }) => {
  return (
    <Link to="/chat/${name}">
      <div className="chat">
        <Avatar className="chat_image" src={profilePic} />
        <div className="chat_details">
          <h3>{name}</h3>
          <p>{massage}</p>
        </div>
        <p className="chat__timestamp">{timeStamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
