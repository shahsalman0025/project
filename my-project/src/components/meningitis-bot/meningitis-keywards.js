// in MessageParser.js
class UtiKeywards {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
    
  
    
    parse(message) {
      message=message.toLowerCase();
      const helloo=["my name", "doctor", "physician", "associate", "pharmacist","hey","hello","my name"]
     

      if (helloo.some(el => message.includes(el))) {
        this.actionProvider.handleHello();
      }
    }
  }
  
  export default UtiKeywards;