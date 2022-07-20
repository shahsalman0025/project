// in ActionProvider.js
class UtiAnswers {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handlemsg() {
    const Message = this.createChatbotMessage('Hey');
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg1() {
    const Message = this.createChatbotMessage('Jack Wilby 07/11/1996');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg2() {
    const Message = this.createChatbotMessage('I’m 26');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg3() {
    const Message = this.createChatbotMessage('Yes, that’s fine');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg4() {
    const Message = this.createChatbotMessage('I feel terrible');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg5() {
    const Message = this.createChatbotMessage('I have a really bad headache that won’t go away');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg6() {
    const Message = this.createChatbotMessage('The headache is to the right-hand side of my head only');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg7() {
    const Message = this.createChatbotMessage('It’s feels like the whole right side of my head is pounding');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg8() {
    const Message = this.createChatbotMessage('No, it doesn’t hurt to press');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg9() {
    const Message = this.createChatbotMessage('It started 8 hours ago and it’s not going away');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg10() {
    const Message = this.createChatbotMessage('No, it doesn’t spread anywhere');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg11() {
    const Message = this.createChatbotMessage('Nothing makes it better, just sitting in a dark room helps a little');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg12() {
    const Message = this.createChatbotMessage('Bright lights seem to make it feel even worse');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg13() {
    const Message = this.createChatbotMessage('I feel nauseous and I have vomited a couple of times');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg14() {
    const Message = this.createChatbotMessage('I would rate it as a 7/10');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg15() {
    const Message = this.createChatbotMessage('I was just resting at home, but I did experience a bit of blurry vision and I felt nauseous a few minutes before the headache came on. I have never had this type of thing happen before.');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg16() {
    const Message = this.createChatbotMessage('I was just resting on the sofa, nothing different to what I usually do');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg17() {
    const Message = this.createChatbotMessage('I just stayed sitting in a dark room hoping the headache would go away');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg18() {
    const Message = this.createChatbotMessage('I don’t have any current or past medical problems');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg19() {
    const Message = this.createChatbotMessage('Yes, I’m fully vaccinated');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg20() {
    const Message = this.createChatbotMessage('No, I don’t like taking any forms of medication or drugs');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg21() {
    const Message = this.createChatbotMessage('I don’t have any allergies that I am aware of');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg22() {
    const Message = this.createChatbotMessage('No, my family don’t have any medical problems and both my parents are alive and well');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg23() {
    const Message = this.createChatbotMessage('I work as a full time lifeguard');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg24() {
    const Message = this.createChatbotMessage('No, I don’t smoke');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg25() {
    const Message = this.createChatbotMessage('I drink roughly 10 pints a week');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg26() {
    const Message = this.createChatbotMessage('I eat and drink well');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg27() {
    const Message = this.createChatbotMessage('I currently live at home with my girlfriend');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg28() {
    const Message = this.createChatbotMessage('This pain prevents me doing anything, I think it could be  due to the stress of moving in with my girlfriend recently');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg29() {
    const Message = this.createChatbotMessage('I drink roughly 6 cups of coffee a day');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg30() {
    const Message = this.createChatbotMessage('No, I wouldn’t say I’m short of breath, I’ve just got a headache');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg31() {
    const Message = this.createChatbotMessage('No, I don’t have a cough at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg32() {
    const Message = this.createChatbotMessage('I don’t think I have a fever no');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg33() {
    const Message = this.createChatbotMessage('No, I haven’t noticed any type of swelling on any part of my body.');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg34() {
    const Message = this.createChatbotMessage('I sleep fine on a night as I have always done');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg35() {
    const Message = this.createChatbotMessage('No, I don’t get any palpitations');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg36() {
    const Message = this.createChatbotMessage('No, I don’t get any muscle ache');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg37() {
    const Message = this.createChatbotMessage('No, I’m all well, just a little stressed with moving house');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg38() {
    const Message = this.createChatbotMessage('No, I don’t feel like I get anxious');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg39() {
    const Message = this.createChatbotMessage('I consider myself as a very positive person');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg40() {
    const Message = this.createChatbotMessage('I haven’t had no major recent changes to my life apart from moving house');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg41() {
    const Message = this.createChatbotMessage('I haven’t experienced any trauma or injury');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg42() {
    const Message = this.createChatbotMessage('No, I don’t suffer from any of these');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg43() {
    const Message = this.createChatbotMessage('Yes, I have been going to the toilet fine in both ways');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg44() {
    const Message = this.createChatbotMessage('No rashes at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg45() {
    const Message = this.createChatbotMessage('No changes to any of my senses, just light is making the pain worse at this moment');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg46() {
    const Message = this.createChatbotMessage('I am a man, so I don’t understand why you are asking me this');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg47() {
    const Message = this.createChatbotMessage('Yes, my sex life is still fine with no problems');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg48() {
    const Message = this.createChatbotMessage('No itchiness');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg49() {
    const Message = this.createChatbotMessage('No tenderness apart from the pain in my head');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg50() {
    const Message = this.createChatbotMessage('I haven’t experienced any loss of consciousness');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg51() {
    const Message = this.createChatbotMessage('I don’t really know what’s causing this');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg52() {
    const Message = this.createChatbotMessage('I’m concerned that it may be something serious such a brain tumour');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg53() {
    const Message = this.createChatbotMessage('I’m hoping you can tell me what is wrong with me and fix it');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg54() {
    const Message = this.createChatbotMessage('I haven’t travelled recently or been on any long-haul journeys ');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg55() {
    const Message = this.createChatbotMessage('No, I think that quite covers it');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg56() {
    const Message = this.createChatbotMessage('I do not experience night sweats');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg57() {
    const Message = this.createChatbotMessage('I have no loss of anal sensation');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg58() {
    const Message = this.createChatbotMessage('No bone pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg59() {
    const Message = this.createChatbotMessage('I have had no seizures or any signs of them');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg60() {
    const Message = this.createChatbotMessage('No bone pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg61() {
    const Message = this.createChatbotMessage('No rashes');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg62() {
    const Message = this.createChatbotMessage('Yes, I have been experiencing light sensitivity');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg63() {
    const Message = this.createChatbotMessage('No weight loss at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg64() {
    const Message = this.createChatbotMessage('No ear ringing');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg65() {
    const Message = this.createChatbotMessage('No scalp tenderness');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg66() {
    const Message = this.createChatbotMessage('No swallowing problems');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg67() {
    const Message = this.createChatbotMessage('I have no signs of anaemia ');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg68() {
    const Message = this.createChatbotMessage('I haven’t used any form of steroids, medically or recreationally');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg69() {
    const Message = this.createChatbotMessage('I have been urinating as normal and without any pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg70() {
    const Message = this.createChatbotMessage('No, I’m not bringing up any blood');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg71() {
    const Message = this.createChatbotMessage('No unexplained bruising, apart from the typical bruising when I knock anything');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg72() {
    const Message = this.createChatbotMessage('No flank pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg73() {
    const Message = this.createChatbotMessage('No paralysis at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg74() {
    const Message = this.createChatbotMessage('No, I don’t have any suicidal thoughts');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg75() {
    const Message = this.createChatbotMessage('No, I’m not experiencing any confusion');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg76() {
    const Message = this.createChatbotMessage('No blood clots');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg77() {
    const Message = this.createChatbotMessage('No, I have tested myself and I don’t have covid and I haven’t had it in the past');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg78() {
    const Message = this.createChatbotMessage('This has not altered my balance at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg79() {
    const Message = this.createChatbotMessage('No, I’m not feeling bloated or gassy at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg80() {
    const Message = this.createChatbotMessage('No, I don’t have any back pain');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg81() {
    const Message = this.createChatbotMessage('No lumps or growths at all');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg82() {
    const Message = this.createChatbotMessage('No pins and needles');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg83() {
    const Message = this.createChatbotMessage('Nope no signs of face drooping');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg84() {
    const Message = this.createChatbotMessage('My arms are both fine');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg85() {
    const Message = this.createChatbotMessage('I have had no changes in my speech');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg86() {
    const Message = this.createChatbotMessage('No loss of strength');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg87() {
    const Message = this.createChatbotMessage('No, I have never had counselling and don’t think I need it');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg88() {
    const Message = this.createChatbotMessage('You’re welcome');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Message],
    }));
  }
  handlemsg89() {
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