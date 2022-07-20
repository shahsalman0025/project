// in ActionProvider.js
class UtiAnswers {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    Pack() {
      const Message = this.createChatbotMessage('Hey');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack1() {
      const Message = this.createChatbotMessage('Lucy Winters 19/03/2003');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack2() {
      const Message = this.createChatbotMessage('I’m 19');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack3() {
      const Message = this.createChatbotMessage('Yes, that’s fine');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack4() {
      const Message = this.createChatbotMessage('I’m alright, I just want to get this all sorted');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack5() {
      const Message = this.createChatbotMessage('I’ve been getting pain when urinating');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack6() {
      const Message = this.createChatbotMessage('The pain feels like its passing from my bladder all the way down and out of my vagina');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack7() {
      const Message = this.createChatbotMessage('It feels like glass is passing though me');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack8() {
      const Message = this.createChatbotMessage('It is sore when I press on my bladder ');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack9() {
      const Message = this.createChatbotMessage('It started 3 days ago and I was hoping it would just disappear but it hasn’t');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack10() {
      const Message = this.createChatbotMessage('No, it doesn’t spread anywhere');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack11() {
      const Message = this.createChatbotMessage('Nothing seems to settle it');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack12() {
      const Message = this.createChatbotMessage('Nothing makes it worse, it just starts whenever I am urinating');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack13() {
      const Message = this.createChatbotMessage('No, I don’t have any other symptoms, I don’t think');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack14() {
      const Message = this.createChatbotMessage('I would rate it as a 7/10');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack15() {
      const Message = this.createChatbotMessage('I am just going about my daily life, I am not doing anything out of the ordianary when this happens but it has never happened in the past');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack16() {
      const Message = this.createChatbotMessage('The pain came on whenever I urinated and settled when I had stopped urinating and this has been happening for the past 3 days now');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack17() {
      const Message = this.createChatbotMessage('After my symptoms go, I just tend to carry out my day without problems');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack18() {
      const Message = this.createChatbotMessage('I don’t have any current or past medical problems');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack19() {
      const Message = this.createChatbotMessage('Yes, I’m fully vaccinated');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack20() {
      const Message = this.createChatbotMessage('No, I don’t like taking any forms of medication or drugs');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack21() {
      const Message = this.createChatbotMessage('I don’t have any allergies that I am aware of');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack22() {
      const Message = this.createChatbotMessage('My family don’t have any medical problems and both my parents are alive and well');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack23() {
      const Message = this.createChatbotMessage('I am currently studying Business at University');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack24() {
      const Message = this.createChatbotMessage('No, I don’t smoke');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack25() {
      const Message = this.createChatbotMessage('I drink roughly a bottle of wine a week per week on a weekend');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack26() {
      const Message = this.createChatbotMessage('My diet is good and healthy and I drink plenty on water throughout the day');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack27() {
      const Message = this.createChatbotMessage('I currently live in university accommodation, in a flat with 7 others');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack28() {
      const Message = this.createChatbotMessage('I wouldn’t say it’s affecting my daily life too much, it’s just very annoying and uncomfortable');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack29() {
      const Message = this.createChatbotMessage('I don’t really drink or consume any type of caffeine');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack30() {
      const Message = this.createChatbotMessage('No, I don’t get short of breath');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack31() {
      const Message = this.createChatbotMessage('No, I don’t have a cough at all');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack32() {
      const Message = this.createChatbotMessage('I would say I have a little fever but nothing significant');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack33() {
      const Message = this.createChatbotMessage('No, I haven’t noticed any type of swelling on any part of my body');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack34() {
      const Message = this.createChatbotMessage('I sleep fine on a night');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack35() {
      const Message = this.createChatbotMessage('No, I don’t get any palpitations');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack36() {
      const Message = this.createChatbotMessage('No, I don’t get any muscle ache');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack37() {
      const Message = this.createChatbotMessage('No, I’m happy I am just annoyed about this pain');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack38() {
      const Message = this.createChatbotMessage('No, I don’t feel like I get anxious');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack39() {
      const Message = this.createChatbotMessage('I consider myself a very positive person');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack40() {
      const Message = this.createChatbotMessage('There has been no recent changes to my life');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack41() {
      const Message = this.createChatbotMessage('I haven’t had any trauma or injury');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack42() {
      const Message = this.createChatbotMessage('I don’t suffer with any of these');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack43() {
      const Message = this.createChatbotMessage('I am pooing fine, just urinating more often than usual and its painful. I would also say it’s a little darker yellow then usual');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack44() {
      const Message = this.createChatbotMessage('No rashes at all');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack45() {
      const Message = this.createChatbotMessage('No changes to any of my senses');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack46() {
      const Message = this.createChatbotMessage('I am on the implant so I don’t get periods');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack47() {
      const Message = this.createChatbotMessage('I’m not interested in sex because of this pain and I haven’t had sex before');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack48() {
      const Message = this.createChatbotMessage('It itches slightly around my vagina');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack49() {
      const Message = this.createChatbotMessage('The only tenderness I am experiencing is when I press my bladder slightly');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack50() {
      const Message = this.createChatbotMessage('No loss of consciousness ');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack51() {
      const Message = this.createChatbotMessage('I think I have some sort of infection');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack52() {
      const Message = this.createChatbotMessage('I’m just want this to go away and stop hurting really');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack53() {
      const Message = this.createChatbotMessage('I’m hoping you can give me some antibiotics to help stop this');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack54() {
      const Message = this.createChatbotMessage('No, I haven’t travelled recently or been on any long-haul journeys');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack55() {
      const Message = this.createChatbotMessage('No, I think that quite covers it');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack56() {
      const Message = this.createChatbotMessage('I am not experiencing night sweats');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack57() {
      const Message = this.createChatbotMessage('No loss of anal sensation');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack58() {
      const Message = this.createChatbotMessage('No bone pain');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack59() {
      const Message = this.createChatbotMessage('No seizures or signs of them');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack60() {
      const Message = this.createChatbotMessage('No neck stiffness');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack61() {
      const Message = this.createChatbotMessage('No rashes');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack62() {
      const Message = this.createChatbotMessage('No light sensitivity');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack63() {
      const Message = this.createChatbotMessage('No weight loss at all');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack64() {
      const Message = this.createChatbotMessage('No ear ringing');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack65() {
      const Message = this.createChatbotMessage('No scalp tenderness');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack66() {
      const Message = this.createChatbotMessage('No swallowing problems');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack67() {
      const Message = this.createChatbotMessage('No anaemia signs');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack68() {
      const Message = this.createChatbotMessage('I haven’t used any form of steroids, medically or recreationally');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack69() {
      const Message = this.createChatbotMessage('My urine is darker yellow. It’s not pink and it does not have any signs of blood in it');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack70() {
      const Message = this.createChatbotMessage('No unexplained bruising');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack71() {
      const Message = this.createChatbotMessage('No flank pain');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack72() {
      const Message = this.createChatbotMessage('No, I’m not bringing up any blood');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack73() {
      const Message = this.createChatbotMessage('No paralysis anywhere');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack74() {
      const Message = this.createChatbotMessage('No suicidal thoughts');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack75() {
      const Message = this.createChatbotMessage('No, I’m experiencing confusion');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack76() {
      const Message = this.createChatbotMessage('No blood clots or history of clotting disorders in the family');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack77() {
      const Message = this.createChatbotMessage('No, I have tested myself and I don’t have covid and haven’t had it in the past');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack78() {
      const Message = this.createChatbotMessage('This has not altered my balance at all');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack79() {
      const Message = this.createChatbotMessage('No, I’m not feeling bloated or gassy at all');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack80() {
      const Message = this.createChatbotMessage('No, I don’t have any back pain');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack81() {
      const Message = this.createChatbotMessage('No lumps or growths at all');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack82() {
      const Message = this.createChatbotMessage('No pins and needles');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack83() {
      const Message = this.createChatbotMessage('Nope no signs of face drooping');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack84() {
      const Message = this.createChatbotMessage('My arms are both fine');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack85() {
      const Message = this.createChatbotMessage('I have not noticed any changes in my speech');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack86() {
      const Message = this.createChatbotMessage('No loss of strength');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack87() {
      const Message = this.createChatbotMessage('No, I haven’t had any counselling and don’t think I need any');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack88() {
      const Message = this.createChatbotMessage('You’re welcome');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, Message],
      }));
    }
    Pack89() {
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