// in ActionProvider.js
class UtiAnswers {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  ftnKey1() {
    const Message = this.createChatbotMessage('Hey, I would like some advice please');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handleName() {
    const Message = this.createChatbotMessage('My name is Alice Jones, I was wondering if you could help me, please');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handleAdvice() {
    const Message = this.createChatbotMessage('I’ve been starting to get severely out of breath whenever I do any exercise');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey2() {
    const Message = this.createChatbotMessage('My name is Alice Jones, and my date of birth is 15/08/2004');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey3() {
    const Message = this.createChatbotMessage('I’m 16');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey4() {
    const Message = this.createChatbotMessage('Yes, that’s fine');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey5() {
    const Message = this.createChatbotMessage('I’m okay today, thanks');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey6() {
    const Message = this.createChatbotMessage('I’ve been starting to get severely out of breath whenever I do any exercise');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey7() {
    const Message = this.createChatbotMessage('I don’t have any pain, it’s just my airway seems to tighten up, which makes me struggle to breathe');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey8() {
    const Message = this.createChatbotMessage('It feels like someone is gripping my throat and tightening it, causing me to wheeze');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey9() {
    const Message = this.createChatbotMessage('I sometimes get a cough when I experience shortness of breath and I cough occasionally throughout the night, which tends to wake me up but this doesn’t happen too often. I am not bringing anything up when I cough.');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey10() {
    const Message = this.createChatbotMessage('No, it doesn’t hurt to press on my chest at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey11() {
    const Message = this.createChatbotMessage('I’ve noticed it happens the most when playing netball and my friends have told me to come and get it checked out');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey12() {
    const Message = this.createChatbotMessage('It doesn’t spread anywhere');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey13() {
    const Message = this.createChatbotMessage('Just sitting down and resting seems to settle it');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey14() {
    const Message = this.createChatbotMessage('Exerting too much seems to bring it on');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey15() {
    const Message = this.createChatbotMessage('No, I don’t have any other symptoms');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey16() {
    const Message = this.createChatbotMessage('I would rate it as a 7/10, not as pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey17() {
    const Message = this.createChatbotMessage('I’m usually exercising when these events happen, and they have occurred a few times now');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey18() {
    const Message = this.createChatbotMessage('The shortness of breath just comes on, so I just sit down and rest until it settles');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey19() {
    const Message = this.createChatbotMessage('After my symptoms go, I just tend to carry out my day without problems');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey20() {
    const Message = this.createChatbotMessage('I don’t have any current or past medical problems');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey21() {
    const Message = this.createChatbotMessage('Yes, I’m fully vaccinated');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey22() {
    const Message = this.createChatbotMessage('I just take regular paracetamol whenever I get general pain but I don’t take any repeat medications');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey23() {
    const Message = this.createChatbotMessage('I don’t have any allergies that I am aware of');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey24() {
    const Message = this.createChatbotMessage('No, my family don’t have any medical problems and both my parents are well');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey25() {
    const Message = this.createChatbotMessage('I am currently studying PE, Biology and Maths at A-level, and I am loving all of them.');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey26() {
    const Message = this.createChatbotMessage('No, I don’t smoke');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey27() {
    const Message = this.createChatbotMessage('No, I don’t drink alcohol at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey28() {
    const Message = this.createChatbotMessage('My diet is good and healthy and I drink plenty on water throughout the day');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey29() {
    const Message = this.createChatbotMessage('I currently live at home with my mum and dad');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey30() {
    const Message = this.createChatbotMessage('I would say this has started to effect my life as it is preventing me from doing the practical side of the A-Level PE and I normally excel in sport.');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey31() {
    const Message = this.createChatbotMessage('I don’t really drink or consume any type of caffeine');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey32() {
    const Message = this.createChatbotMessage('Yes, I get severely short of breath when this occurs, but generally I am not short of breath');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey33() {
    const Message = this.createChatbotMessage('No recent fevers or infections');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey34() {
    const Message = this.createChatbotMessage('No, I haven’t noticed any type of swelling on any part of my body');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey35() {
    const Message = this.createChatbotMessage('I generally sleep fine on a night unless I am coughing which sometimes wakes me up as I mentioned before');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey36() {
    const Message = this.createChatbotMessage('No, I don’t get any palpitations');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey37() {
    const Message = this.createChatbotMessage('No, I don’t get any muscle ache');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey38() {
    const Message = this.createChatbotMessage('No, I don’t suffer from depression');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey39() {
    const Message = this.createChatbotMessage('No, I don’t feel like I get anxious');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey40() {
    const Message = this.createChatbotMessage('I consider myself as a very positive person');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey41() {
    const Message = this.createChatbotMessage('No recent changes to my life at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey42() {
    const Message = this.createChatbotMessage('No, I haven’t had any trauma or injury');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey43() {
    const Message = this.createChatbotMessage('I do have hay fever, but not asthma or eczema as far as I know');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey44() {
    const Message = this.createChatbotMessage('Yes, I have been going to the toilet fine in both matters');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey45() {
    const Message = this.createChatbotMessage('No rashes at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey46() {
    const Message = this.createChatbotMessage('No changes to any of my senses');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey47() {
    const Message = this.createChatbotMessage('I am on the implant so I don’t get periods');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey48() {
    const Message = this.createChatbotMessage('I have never had sex');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey49() {
    const Message = this.createChatbotMessage('I don’t have any itchiness');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey50() {
    const Message = this.createChatbotMessage('I have no tenderness');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey51() {
    const Message = this.createChatbotMessage('No loss of consciousness ');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey52() {
    const Message = this.createChatbotMessage('I don’t really know what’s causing this');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey53() {
    const Message = this.createChatbotMessage('I’m concerned that something serious may be wrong with my body and it will stop me from doing any sport');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey54() {
    const Message = this.createChatbotMessage('I’m hoping you can tell me what is going wrong with my body and give me some medicine to help');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey55() {
    const Message = this.createChatbotMessage('I haven’t travelled recently or been on any long-haul journeys');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

 


  ftnKey56() {
    const Message = this.createChatbotMessage('No, I think that quite covers it');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey57() {
    const Message = this.createChatbotMessage('No loss of anal sensation');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey58() {
    const Message = this.createChatbotMessage('No bone pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey59() {
    const Message = this.createChatbotMessage('No seizures or signs of them');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey60() {
    const Message = this.createChatbotMessage('No neck stiffness');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey61() {
    const Message = this.createChatbotMessage('No rashes');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey62() {
    const Message = this.createChatbotMessage('No light sensitivity');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey63() {
    const Message = this.createChatbotMessage('No weight loss at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey64() {
    const Message = this.createChatbotMessage('No ear ringing');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey65() {
    const Message = this.createChatbotMessage('No scalp tenderness');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey66() {
    const Message = this.createChatbotMessage('No swallowing problems');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey67() {
    const Message = this.createChatbotMessage('No anaemia signs');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey68() {
    const Message = this.createChatbotMessage('I haven’t used any form of steroids, medically or recreationally');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey69() {
    const Message = this.createChatbotMessage('I have been urinating as normal and without any pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey70() {
    const Message = this.createChatbotMessage('No unexplained bruising at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey71() {
    const Message = this.createChatbotMessage('No flank pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey72() {
    const Message = this.createChatbotMessage('No, I’m not bringing up any blood');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey73() {
    const Message = this.createChatbotMessage('No, I’m not confused');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey74() {
    const Message = this.createChatbotMessage('No blood clots');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey75() {
    const Message = this.createChatbotMessage('No, I have tested myself and I don’t have covid and haven’t had it in the past');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey76() {
    const Message = this.createChatbotMessage('This has not altered my balance at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey77() {
    const Message = this.createChatbotMessage('No, I’m not feeling bloated or gassy at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey78() {
    const Message = this.createChatbotMessage('No, I don’t have any back pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey79() {
    const Message = this.createChatbotMessage('No lumps or growths at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey80() {
    const Message = this.createChatbotMessage('No pins and needles');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }

  ftnKey81() {
    const Message = this.createChatbotMessage('Nope no signs of face drooping');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey82() {
    const Message = this.createChatbotMessage('My arms are all fine');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey83() {
    const Message = this.createChatbotMessage('No changes in my speech');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey84() {
    const Message = this.createChatbotMessage('No loss of strength');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey85() {
    const Message = this.createChatbotMessage('No, I have never had any counselling and I don’t think I need any');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }


  ftnKey86() {
    const Message = this.createChatbotMessage('You’re welcome');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  ftnKey87() {
    const Message = this.createChatbotMessage('This has been going for the past year I would think');

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

export default UtiAnswers;