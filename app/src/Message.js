import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;
  console.log("IS USER---> ", isUser);

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography>
            {!isUser && `${message.username || "Anonymous"}: `} {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
