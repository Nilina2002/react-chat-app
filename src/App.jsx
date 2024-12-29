import React from "react";
import List from "./components/list/list";
import Chat from "./components/chat/chat";
import Details from "./components/details/details";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";

const App = () => {
  const user = false;

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
