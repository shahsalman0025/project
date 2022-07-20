// in ActionProvider.js
class UtiAnswers {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    handleHello() {
      const Message = this.createChatbotMessage('Hey');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
  

     
  }
  
  export default UtiAnswers;