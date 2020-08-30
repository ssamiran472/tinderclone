import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Samiran"
        massage="Hei this is my chats"
        timeStamp="1 min ago"
        profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFoSOyRnii2eg/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=M39rNdBcHZ4Wk5kAZIF-N2GCjuIsqlHUITWvyIA_Geo"
      />
      <Chat
        name="Sourav"
        massage="Hei this is my chats"
        timeStamp="1 min ago"
        profilePic="https://scontent.fblr1-3.fna.fbcdn.net/v/t1.0-9/48395225_2151811835079303_6290642743647535104_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=8efSklU_hj4AX_SWIQT&_nc_ht=scontent.fblr1-3.fna&oh=f2acbf9c8cb32c92715530b3fdb84184&oe=5F7087BC"
      />
      <Chat
        name="Miltan"
        massage="Hei this is my chats"
        timeStamp="1 min ago"
        profilePic="https://scontent.fblr1-5.fna.fbcdn.net/v/t1.0-9/82634832_2589007554716885_7609361045420769280_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=--Ak1JoROnwAX_w72n7&_nc_ht=scontent.fblr1-5.fna&oh=5566f82f770e011579f08612fd3e38aa&oe=5F72C70C"
      />
      <Chat
        name="Partha"
        massage="Hei this is my chats"
        timeStamp="1 min ago"
        profilePic="https://scontent.fblr1-3.fna.fbcdn.net/v/t1.0-0/c66.0.206.206a/p206x206/70537855_2247650308676955_5555578371045326848_n.jpg?_nc_cat=107&_nc_sid=da31f3&_nc_ohc=0RuMKsegylcAX89qqeJ&_nc_ht=scontent.fblr1-3.fna&oh=6d54bba0b728ee74e8dc10cdb0352e09&oe=5F703BAE"
      />
    </div>
  );
};

export default Chats;
