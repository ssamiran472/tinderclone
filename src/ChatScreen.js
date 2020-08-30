import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
  const [masseges, setMassages] = useState([
    {
      name: "Ellen",
      image:
        'https://scontent.fblr1-3.fna.fbcdn.net/v/t1.0-9/48395225_2151811835079303_6290642743647535104_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=8efSklU_hj4AX_SWIQT&_nc_ht=scontent.fblr1-3.fna&oh=f2acbf9c8cb32c92715530b3fdb84184&oe=5F7087BC"',
      message: "whats up",
    },
    {
      name: "Ellen",
      image:
        'https://scontent.fblr1-3.fna.fbcdn.net/v/t1.0-9/48395225_2151811835079303_6290642743647535104_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=8efSklU_hj4AX_SWIQT&_nc_ht=scontent.fblr1-3.fna&oh=f2acbf9c8cb32c92715530b3fdb84184&oe=5F7087BC"',
      message: "whats goin on",
    },
    {
      message: "whats up",
    },
  ]);

  const [input, setInput] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setMassages([...masseges, { message: input }]);
    setInput("");
  };
  return (
    <div>
      <p className="timestamp">You matched with sourav ON 10/10/2020 </p>
      {masseges.map((message) =>
        message.name ? (
          <div className="chatscreen">
            <Avatar className="image" alt={message.name} src={message.image} />
            <p className="chatscreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen">
            <p className="chatscreen_textuser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            placeholder="Type a massage"
            value={input}
            type="text"
            className="chatScreen__inputField"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />

          <button className="chatScreen__inputButton" onClick={handleClick}>
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
