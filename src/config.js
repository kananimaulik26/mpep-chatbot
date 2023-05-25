import { createChatBotMessage } from "react-chatbot-kit";
const botName = "MPEP Chatbot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help you explain how I work.`
    ),
    createChatBotMessage(
      "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview"
      }
    )
  ],
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#0097f6",
          color: "white",
          padding: "12.5px",
          width: "100vh",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px"
        }}
      >
        Self Assesment
      </div>
    )
  }
};

export default config;
