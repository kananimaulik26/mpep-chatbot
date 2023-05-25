import axios from "axios";
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = async (messagePayload) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          temperature: 1,
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: messagePayload }]
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json"
          }
        }
      );

      const botMessage = createChatBotMessage(
        response?.data?.choices[0]?.message?.content
      );

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage]
      }));
    } catch (error) {
      console.log("handleMessageSubmit error:", error);
    }
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage
          }
        });
      })}
    </div>
  );
};

export default ActionProvider;
