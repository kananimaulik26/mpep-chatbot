import "./styles.css";

import React from "react";
import ChatBot from "react-chatbot-kit";
import config from "./config.js";
import MessageParser from "./MessageParser.js";
import ActionProvider from "./ActionProvider.js";

import "react-chatbot-kit/build/main.css";

const App = () => {
  return (
    <>
      <ChatBot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </>
  );
};

export default App;
