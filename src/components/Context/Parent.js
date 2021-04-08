import React from "react";
import CompC from "./compC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function Parent() {
  return (
    <div>
      <UserContext.Provider value={"Priya"}>
        <ChannelContext.Provider value={"Vadivelu"}>
          <CompC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
