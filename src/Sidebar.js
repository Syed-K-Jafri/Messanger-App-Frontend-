import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    // BEM naming convention
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGp17nmqiXj1w/profile-displayphoto-shrink_100_100/0/1580288236811?e=1620259200&v=beta&t=47sipCyInp34UBkLqBycI7VhemsJr1S4tKLEvVuyeOc" />

        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or Start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;

{
  /** 
      When you wrap material UI icon in <IconButton>, it gets the ripple effect 
      and the icon turns clickable.

      <Avatar /> is a component which can take a source (src) for the image that youre going to use.
      Just pop in the URL --> <Avatar src="imageURL" />

      


*/
}
