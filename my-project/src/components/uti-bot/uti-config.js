import { createChatBotMessage } from 'react-chatbot-kit';
const botName = "DocsBot";
const Uticonfig = {

  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#C1CAD8",
    },
    chatButton: {
      backgroundColor: "#7A839E",
    },
  },
  initialMessages: [createChatBotMessage(`Hey, I'm hoping you can help me today`)],

  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "none",
          padding: "5px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          display: "flex",
          fontSize: "0.85rem",
          paddingTop: "12.5px",
          paddingBottom: "12.5px",
          paddingRight: "12.5px",
          paddingLeft: "12.5px",
          fontWeight: "700",
          alignItems: "center",
          display:"none"
        }}
      >
      </div>
    ),
  },

  

};

export default Uticonfig;