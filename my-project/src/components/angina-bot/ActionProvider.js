// in ActionProvider.js
class ActionProvider {
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
  handleNewW() {
    const Message = this.createChatbotMessage('This has been going for the past year I would think');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handleAge() {
      const Message = this.createChatbotMessage('I am 62');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleDob() {
      const Message = this.createChatbotMessage('Daniel Jenkins 04/02/1960');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleConset() {
      const Message = this.createChatbotMessage("Yes, that’s fine");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleHru() {
      const Message = this.createChatbotMessage("I am okay at the moment thanks");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR1() {
      const Message = this.createChatbotMessage("I’ve been experiencing bad chest pains every time I do any exercise and I’m starting to get worried about it.");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR2() {
      const Message = this.createChatbotMessage("The pain feels like it is inside of my chest on the left-hand side");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR3() {
      const Message = this.createChatbotMessage("It feels like my chest has been squeezed. It’s nothing like heartburn which my wife originally thought it was, it’s as if my chest is been crushed by an elephant.");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR4() {
      const Message = this.createChatbotMessage("No, it doesn’t hurt to press");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR5() {
      const Message = this.createChatbotMessage("It comes on whenever I go to my local gym or go walking in the hills and lasts roughly 5 minutes but then it goes away");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR6() {
      const Message = this.createChatbotMessage("Sometimes I feel the pain spread up into my neck");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR7() {
      const Message = this.createChatbotMessage("Just sitting down and resting seems to settle it");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR8() {
      const Message = this.createChatbotMessage("Any form of exercise seems to make it worse");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR9() {
      const Message = this.createChatbotMessage("I haven’t vomited but I do feel nauseous when the pain occurs");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR10() {
      const Message = this.createChatbotMessage("I would say it is a 10/10 because it is very painful when it comes on, but I’m not in any pain once it goes");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR11() {
      const Message = this.createChatbotMessage("I was just out exercising when this happened and I have had a few similar episodes which have been the same ");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR12() {
      const Message = this.createChatbotMessage("The pain just comes on and it makes me feel like I need to sit down and rest until it passes");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR13() {
      const Message = this.createChatbotMessage("After my symptoms go, I just tend to carry out my normal day without any problems");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR14() {
      const Message = this.createChatbotMessage("I don’t have any current or past medical problems");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR15() {
      const Message = this.createChatbotMessage("Yes, I’m fully vaccinated");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR16() {
      const Message = this.createChatbotMessage("I just take regular paracetamol whenever I get general pain but I do not take any repeat medications");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR17() {
      const Message = this.createChatbotMessage("I don’t have any allergies that I am aware of");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR18() {
      const Message = this.createChatbotMessage("No, my family don’t have any medical problems and both my parents are still alive and kicking");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR19() {
      const Message = this.createChatbotMessage("I have just recently retired from my job as a truck driver a few years ago");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR20() {
      const Message = this.createChatbotMessage("Yes, I smoke cigarettes and have smoked roughly half a pack of cigarettes a day for the past 30 years");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR21() {
      const Message = this.createChatbotMessage("Yes, I drink roughly 4 pints of beer per week usually on the weekends");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR22() {
      const Message = this.createChatbotMessage("My diet is good and healthy and I drink plenty on water throughout the day");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR23() {
      const Message = this.createChatbotMessage("I currently live in a 2-bed house with my lovely wife");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR24() {
      const Message = this.createChatbotMessage("I would say this has started to effect my life as it is preventing me from going for walks in the hills on days out which I used to do without a problem a few years back.");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR25() {
      const Message = this.createChatbotMessage("I don’t really drink or consume any type of caffeine");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR26() {
      const Message = this.createChatbotMessage("I feel short of breath when the chest pain starts but this settles as the pain settles");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR27() {
      const Message = this.createChatbotMessage("No, I don’t have a cough at all");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR28() {
      const Message = this.createChatbotMessage("I don’t think I have a fever no and my body temperature has felt normal");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR29() {
      const Message = this.createChatbotMessage("No, I haven’t noticed any type of swelling on any part of my body.");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR30() {
      const Message = this.createChatbotMessage("I sleep fine on a night as I have always done");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR31() {
      const Message = this.createChatbotMessage("No, I don’t really get palpitations throughout the day");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR32() {
      const Message = this.createChatbotMessage("I’m quite fit and active and would consider myself as full of energy, it is just the pain that stops me from pushing myself. I don’t think this is muscular related though as doesn’t feel the same and it’s not tender to touch.");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    
    handleR33() {
      const Message = this.createChatbotMessage("No, I’m not depressed at all");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR34() {
      const Message = this.createChatbotMessage("No, I don’t feel like I get anxious");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR35() {
      const Message = this.createChatbotMessage("I consider myself as a very positive person");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR36() {
      const Message = this.createChatbotMessage("There has been no recent changes to my life");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR37() {
      const Message = this.createChatbotMessage("No, I haven’t experienced any trauma or injury");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR38() {
      const Message = this.createChatbotMessage("No, I’ve never had any of these");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR39() {
      const Message = this.createChatbotMessage("I am going to the toilet fine and normal, I am opening my bowels once a day and urinate several times per day as I keep myself well hydrated.");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR40() {
      const Message = this.createChatbotMessage("No rashes at all");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR41() {
      const Message = this.createChatbotMessage("No changes to any of my senses");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR42() {
      const Message = this.createChatbotMessage("I am a man, so I don’t understand why you are asking me this");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR43() {
      const Message = this.createChatbotMessage("Yes, my sex life is still fine with no problems");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR44() {
      const Message = this.createChatbotMessage("No itchiness");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR45() {
      const Message = this.createChatbotMessage("No, I’m not tender anywhere");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR46() {
      const Message = this.createChatbotMessage("No, I haven’t lost consciousness at any point");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR47() {
      const Message = this.createChatbotMessage("I think I might be having mini heart attacks");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR48() {
      const Message = this.createChatbotMessage("I’m really concerned that if I pass away, my wife will struggle, and I don’t want that for her");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR49() {
      const Message = this.createChatbotMessage("I’m hoping you can tell me what is going wrong with my body and help prevent this from occurring");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR50() {
      const Message = this.createChatbotMessage("I haven’t travelled recently or been on any long-haul journeys");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR51() {
      const Message = this.createChatbotMessage("No, I think that quite covers it");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR52() {
      const Message = this.createChatbotMessage(" No, I haven’t experienced night sweats");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR53() {
      const Message = this.createChatbotMessage("I have no loss of anal sensation");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR54() {
      const Message = this.createChatbotMessage("No bone pain");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR55() {
      const Message = this.createChatbotMessage("No, I have not had any seizures or any signs of them");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR56() {
      const Message = this.createChatbotMessage("No, I don’t have any neck stiffness");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR57() {
      const Message = this.createChatbotMessage("I have no rashes");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR58() {
      const Message = this.createChatbotMessage("No light sensitivity that I have noticed");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR59() {
      const Message = this.createChatbotMessage("I have not had lost any weight at all");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR60() {
      const Message = this.createChatbotMessage("No, I haven’t experienced ear ringing");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR61() {
      const Message = this.createChatbotMessage("I have no scalp tenderness");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR62() {
      const Message = this.createChatbotMessage("No swallowing problems");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR63() {
      const Message = this.createChatbotMessage("I have no signs of anaemia");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR64() {
      const Message = this.createChatbotMessage("I haven’t used any form of steroids, medically or recreationally");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR65() {
      const Message = this.createChatbotMessage("I have been urinating as normal and without any pain");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR66() {
      const Message = this.createChatbotMessage("No unexplained bruising, just the typical when I knock anything");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR67() {
      const Message = this.createChatbotMessage("I do not have flank pain");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR68() {
      const Message = this.createChatbotMessage("No, I’m not bringing up any blood");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR69() {
      const Message = this.createChatbotMessage("No paralysis");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR70() {
      const Message = this.createChatbotMessage("No, I’m very happy and content with my life");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR71() {
      const Message = this.createChatbotMessage("No, I’m not confused");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR72() {
      const Message = this.createChatbotMessage("No blood clots, or history of clotting in my family");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR73() {
      const Message = this.createChatbotMessage("No, I have tested myself and I don’t have covid and I haven’t had it in the past");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR74() {
      const Message = this.createChatbotMessage("This has not altered my balance at all");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR75() {
      const Message = this.createChatbotMessage("No, I’m not feeling bloated or gassy at all");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR76() {
      const Message = this.createChatbotMessage("No, I don’t have any back pain");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR77() {
      const Message = this.createChatbotMessage("No lumps or growths at all");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR78() {
      const Message = this.createChatbotMessage("No pins and needles");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR79() {
      const Message = this.createChatbotMessage("Nope no signs of face drooping");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR80() {
      const Message = this.createChatbotMessage("My arms are both fine");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR81() {
      const Message = this.createChatbotMessage("There hasn’t been any changes in my speech");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
  
    handleR82() {
      const Message = this.createChatbotMessage("No loss of strength");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR83() {
      const Message = this.createChatbotMessage("No, I have never had counselling");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    handleR84() {
      const Message = this.createChatbotMessage("You’re welcome");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    bydefault() {
      const Message = this.createChatbotMessage("Sorry I do not understand the question");
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
 
 
   
}

export default ActionProvider;