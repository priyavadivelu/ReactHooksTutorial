import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./Parent";

export default function CompE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      user value <b>{user}</b> - channel value <b>{channel}</b>
    </div>
  );
}
