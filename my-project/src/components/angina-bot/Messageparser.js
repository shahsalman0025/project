// in MessageParser.js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  

  
  parse(message) {
    message=message.toLowerCase();
    const helloo=["my name", "doctor", "physician", "associate", "pharmacist","hey","hello","my name","PA"]
      const age = ["age", "old"];
      const newW=["how long", "going on for"];
      const dob=["born","dob", "birth", "name", "date"];
      const conset=[ "Consent","take a history","some question","some questions", "is that okay","is that ok", "is that alright", "are you okay with","take a history, some questions"];
      const hru=["alright", "how are you", "how do you", "feeling"];
      const r1=["chest pain", "can i","you here","you with", "syncope", "going on", "been happening", "here for","what can I help you with today" ,"what can I help you with"];
      const r2=["location", "located", "where is", "where is the pain", "left side", "right side", "central", "centrally", "middle", "bilaterally", "unilaterally", "where is the pain"];
      const r3=["crushing", "tight", "dull", "sharp", "heart burn", "reflux", "describe the pain", "feel like", "indigestion", "throbbing", "pounding", "feel like", "what does the pain feel like?"];
      const r4=["touch", "press", "put pressure", "sore","Does it hurt when you press the area?"];
      const r5=["onset", "started", "begun", "began", "start", "quickly", "sudden", "duration","When did this start","how quickly does it come on" ];
      const r6=["radiate","spreads", "spread", "move", "moves", "anywhere else", "shooting", "radiate"];
      const r7=["relieves", "improves","alleviates","eases", "better","help","improve"];
      const r8=["harsher","worse", "exacerbates", "aggravates", "triggers","trigger", "progressive", "gradual"];
      const r9=["signs","other symptoms", "vomiting", "nausea", "abdominal pain"];
      const r10=["score", "out of 10", "how severe", "severity"];
      const r11=["previous", "prior", "preceding", "earlier", "doing before", "episodes", "similar", "aura"];
      const r12=["throughout", "during","doing at the time"];
      const r13=["following", "after"];
      const r14=["underlying", "known conditions", "diagnosed", "medical history", "recently unwell", "cold", "strep", "obesity", "surgery", "surgeries", "diabetes", "admission", "medical conditions", "medical condition","past medical","hospital"];
      const r15=["immunised","vaccines","vaccinated"];
      const r16=["drugs","recreational","medication", "over the counter", "analgesia", "pain relief", "NSAID", "medications", "meds", "ointment", "cream"];
      const r17=["reactions","sensitivities", "allergies"];
      const r18=["mum","dad", "brother", "sister", "family history"];
      const r19=["job","school", "education", "social", "work", "occupation"];
      const r20=["smoke","cigarettes", "smoked", "smoking"];
      const r21=["spirit", "wine", "beer", "alcohol", "do you drink"];
      const r22=["diet","drink","fluid", , "drinking", "dry", "dehydration", "food", "appetite", "cholesterol" ];
      const r23=["home","house", "living", "flat", "live", "support", "dependents"];
      const r24=["routine", "daily life", "way of life", "walk", "exercise", "fitness", "workout", "lifestyle","your life", "your lifestyle"];
      const r25=["coffee", "energy drinks", "caffeine" ];
      const r26=["breath","short of", "breathing", "sob", "shortness", "wheezing", "wheeze"];
      const r27=["coughing", "phlegm", "sputum", "mucus", "cough", "dry cough","bringing up", "bringing anything up"];
      const r28=["hot","feverish", "a fever", "sweating", "sweat", "shivering", "rigors", "cold"];
      const r29=["oedema","swelling", "ankles", "inflammation", "calf", "calves", "swollen"];
      const r30=["woke","sleeping", "pillow", "sat up", "nap", "sleep", "upright", "bed"];
      const r31=["outside chest", "palpitations", "racing", "feel your heart"];
      const r32=["tiredness", "lethargy", "muscle", "ache", "tired", "fatigue", "exhausted", "drowsiness", "drowsy"];
      const r33=["upset","down","stressful", "sad", "unhappy", "miserable", "depressed", "stress", "stressed"];
      const r34=["anxious","anxiety"];
      const r35=["mood","behaviour", "attitude", "feelings"];
      // here
      const r36=["adjustments", "new", "recent changes"]
      const r37=["wound", "hard", "accident", "trauma"," injury "]
      const r38=["hay", "asthma", "eczema"]
      const r39=["urinate", "wee","poo","faeces", "diarrhoea", "diarrhoeal"," incontinent"," incontinence","bowel","toilet", "constipated", "constipation", "water works","toileting","dysuria","stool", "colour" ]
      const r40=["lesions", "pimples", "spots", "hives", "rash", "rashes", "skin", "irritation"]
      const r41=["hear", "smelling", "vision", "sounds", "sound", "listen", "visual", "hear", "hearing", "smell", "smelling", "sensation", "headache", "dizzy", "dizziness"]
      const r42=["menopause", "period", "pregnancy", "pregnant"]
      const r43=["sexually active", "sex", "sexual" ] 
      const r44=["itch", "itchiness", "tickle"]
      const r45=["tender", "tenderness"]
      const r46=["faint", "syncope", "blackout", "collapse", "consciousness"]
      const r47=["think", "thoughts", "your ideas", "idea"]
      const r48=["worrying", "troubling you", "concerns","concerning"]
      const r49=["expect", "out of", "you want to", "expectations","wanting to"]
      const r50=["holidays", "journey"," flight", "long haul", "travel", "exotic", "countries"]
      const r51=["anything else"]
      const r52=["night sweats"]
      const r53=["anal tone", "anal sensation","anus"]
      const r54=["bone pain"]
      const r55=["seizure", ]
      const r56=["neck stiffness"]
      const r57=["blanching", "rash"]
      const r58=["photophobia", "light sensitivity"]
      const r59=["weight loss","weight"]
      const r60=["papilledema", "ear ringing" ]
      const r61=["scalp"]
      const r62=["swallow","swallowing"," dysphagia"]
      const r63=["anaemia"]
      const r64=["steroid", "steroids"]
      const r65=["pink urine", "red urine"," haematuria", "blood in urine"]
      const r66=["bruising", "bruise "]
      const r67=["flank pain", "kidney pain"]
      const r68=["haemoptysis", "coughing up blood", "blood"]
      const r69=["paralysis"]
      const r70=["suicide", "suicidal"]
      const r71=["confusion", "confused"," personality change"," behavioural changes"]
      const r72=["clots", "clotting"]
      const r73=["covid", "covid-19", "sars", "corona"]
      const r74=["balance", "coordination", "ataxia"," walking"]
      const r75=["belching", "burping", "bloated", "passing wind", "trump"]
      const r76=["back pain", "pain in back", "joints"]
      const r77=["lump", "growth", "abscess", "cancer", "tumour", "bumps"]
      const r78=["pins and needles"," tingling"," numb"]
      const r79=["face drooping", "loss of face"]
      const r80=["arm"]
      const r81=["speech","dysarthria"]
      const r82=["motor", "strength", "weak", "weakness"]
      const r83=["counselling", "council", "psychiatry", "shrink" ]
      const r84=["thank you","now finished", "complete the", "completed", "ended"]
   

    if (helloo.some(el => message.includes(el))) {
      this.actionProvider.handleHello();
    }
    else if(dob.some(el => message.includes(el)))
    {
      this.actionProvider.handleDob();
    }
    else if(age.some(el => message.includes(el)))
    {
      this.actionProvider.handleAge();
    }
    else if(conset.some(el => message.includes(el)))
    {
      this.actionProvider.handleConset();
    }
    else if(hru.some(el => message.includes(el)))
    {
      this.actionProvider.handleHru();
    }
    else if(r1.some(el => message.includes(el)))
    {
      this.actionProvider.handleR1();
    }
    else if(r2.some(el => message.includes(el)))
    {
      this.actionProvider.handleR2();
    }
    else if(r3.some(el => message.includes(el)))
    {
      this.actionProvider.handleR3();
    }
    else if(r4.some(el => message.includes(el)))
    {
      this.actionProvider.handleR4();
    }
    else if(r5.some(el => message.includes(el)))
    {
      this.actionProvider.handleR5();
    }
    else if(r6.some(el => message.includes(el)))
    {
      this.actionProvider.handleR6();
    }
    else if(r7.some(el => message.includes(el)))
    {
      this.actionProvider.handleR7();
    }
    else if(r8.some(el => message.includes(el)))
    {
      this.actionProvider.handleR8();
    }
    else if(r9.some(el => message.includes(el)))
    {
      this.actionProvider.handleR9();
    }
    else if(r10.some(el => message.includes(el)))
    {
      this.actionProvider.handleR10();
    }
    else if(r11.some(el => message.includes(el)))
    {
      this.actionProvider.handleR11();
    }
    else if(r12.some(el => message.includes(el)))
    {
      this.actionProvider.handleR12();
    }
    else if(r13.some(el => message.includes(el)))
    {
      this.actionProvider.handleR13();
    }
    else if(r14.some(el => message.includes(el)))
    {
      this.actionProvider.handleR14();
    }
    else if(r15.some(el => message.includes(el)))
    {
      this.actionProvider.handleR15();
    }
    else if(r16.some(el => message.includes(el)))
    {
      this.actionProvider.handleR16();
    }
    else if(r17.some(el => message.includes(el)))
    {
      this.actionProvider.handleR17();
    }
    else if(r18.some(el => message.includes(el)))
    {
      this.actionProvider.handleR18();
    }
    else if(r19.some(el => message.includes(el)))
    {
      this.actionProvider.handleR19();
    }
    else if(r20.some(el => message.includes(el)))
    {
      this.actionProvider.handleR20();
    }
    else if(r21.some(el => message.includes(el)))
    {
      this.actionProvider.handleR21();
    }
    else if(r22.some(el => message.includes(el)))
    {
      this.actionProvider.handleR22();
    }
    else if(r23.some(el => message.includes(el)))
    {
      this.actionProvider.handleR23();
    }
    else if(r24.some(el => message.includes(el)))
    {
      this.actionProvider.handleR24();
    }
    else if(r25.some(el => message.includes(el)))
    {
      this.actionProvider.handleR25();
    }
    else if(r26.some(el => message.includes(el)))
    {
      this.actionProvider.handleR26();
    }
    else if(r27.some(el => message.includes(el)))
    {
      this.actionProvider.handleR27();
    }
    else if(r28.some(el => message.includes(el)))
    {
      this.actionProvider.handleR28();
    }
    else if(r29.some(el => message.includes(el)))
    {
      this.actionProvider.handleR29();
    }
    else if(r30.some(el => message.includes(el)))
    {
      this.actionProvider.handleR30();
    }
    else if(r31.some(el => message.includes(el)))
    {
      this.actionProvider.handleR31();
    }
    else if(r32.some(el => message.includes(el)))
    {
      this.actionProvider.handleR32();
    }
    else if(r33.some(el => message.includes(el)))
    {
      this.actionProvider.handleR33();
    }
    else if(r34.some(el => message.includes(el)))
    {
      this.actionProvider.handleR34();
    }
    else if(r35.some(el => message.includes(el)))
    {
      this.actionProvider.handleR35();
    }
    else if(r36.some(el => message.includes(el)))
    {
      this.actionProvider.handleR36();
    }
    else if(r37.some(el => message.includes(el)))
    {
      this.actionProvider.handleR37();
    }
    else if(r38.some(el => message.includes(el)))
    {
      this.actionProvider.handleR38();
    }
    else if(r39.some(el => message.includes(el)))
    {
      this.actionProvider.handleR39();
    }
    else if(r40.some(el => message.includes(el)))
    {
      this.actionProvider.handleR40();
    }
    else if(r41.some(el => message.includes(el)))
    {
      this.actionProvider.handleR41();
    }
    else if(r42.some(el => message.includes(el)))
    {
      this.actionProvider.handleR42();
    }
    else if(r43.some(el => message.includes(el)))
    {
      this.actionProvider.handleR43();
    }
    else if(r44.some(el => message.includes(el)))
    {
      this.actionProvider.handleR44();
    } else if(r45.some(el => message.includes(el)))
    {
      this.actionProvider.handleR45();
    }
    else if(r46.some(el => message.includes(el)))
    {
      this.actionProvider.handleR46();
    }
    else if(r47.some(el => message.includes(el)))
    {
      this.actionProvider.handleR47();
    }
    else if(r48.some(el => message.includes(el)))
    {
      this.actionProvider.handleR48();
    }
    else if(r49.some(el => message.includes(el)))
    {
      this.actionProvider.handleR49();
    }
    else if(r50.some(el => message.includes(el)))
    {
      this.actionProvider.handleR50();
    }
    else if(r51.some(el => message.includes(el)))
    {
      this.actionProvider.handleR51();
    }
    else if(r52.some(el => message.includes(el)))
    {
      this.actionProvider.handleR52();
    }
    else if(r53.some(el => message.includes(el)))
    {
      this.actionProvider.handleR53();
    }
    else if(r54.some(el => message.includes(el)))
    {
      this.actionProvider.handleR54();
    }
    else if(r55.some(el => message.includes(el)))
    {
      this.actionProvider.handleR55();
    }
    else if(r56.some(el => message.includes(el)))
    {
      this.actionProvider.handleR56();
    }
    else if(r57.some(el => message.includes(el)))
    {
      this.actionProvider.handleR57();
    }
    else if(r58.some(el => message.includes(el)))
    {
      this.actionProvider.handleR58();
    }
    else if(r59.some(el => message.includes(el)))
    {
      this.actionProvider.handleR59();
    }
    else if(r60.some(el => message.includes(el)))
    {
      this.actionProvider.handleR60();
    }
    else if(r61.some(el => message.includes(el)))
    {
      this.actionProvider.handleR61();
    }
    else if(r62.some(el => message.includes(el)))
    {
      this.actionProvider.handleR62();
    }
    else if(r63.some(el => message.includes(el)))
    {
      this.actionProvider.handleR63();
    }
    else if(r64.some(el => message.includes(el)))
    {
      this.actionProvider.handleR64();
    }
    else if(r65.some(el => message.includes(el)))
    {
      this.actionProvider.handleR65();
    }
    else if(r66.some(el => message.includes(el)))
    {
      this.actionProvider.handleR66();
    }
    else if(r67.some(el => message.includes(el)))
    {
      this.actionProvider.handleR67();
    }else if(r68.some(el => message.includes(el)))
    {
      this.actionProvider.handleR68();
    }
    else if(r69.some(el => message.includes(el)))
    {
      this.actionProvider.handleR69();
    }
    else if(r70.some(el => message.includes(el)))
    {
      this.actionProvider.handleR70();
    }
    else if(r71.some(el => message.includes(el)))
    {
      this.actionProvider.handleR71();
    }
    else if(r72.some(el => message.includes(el)))
    {
      this.actionProvider.handleR72();
    }
    else if(r73.some(el => message.includes(el)))
    {
      this.actionProvider.handleR73();
    }
    else if(r74.some(el => message.includes(el)))
    {
      this.actionProvider.handleR74();
    }
    else if(r75.some(el => message.includes(el)))
    {
      this.actionProvider.handleR75();
    }
    else if(r76.some(el => message.includes(el)))
    {
      this.actionProvider.handleR76();
    }
    else if(r77.some(el => message.includes(el)))
    {
      this.actionProvider.handleR77();
    }
    else if(r78.some(el => message.includes(el)))
    {
      this.actionProvider.handleR78();
    }
    else if(r79.some(el => message.includes(el)))
    {
      this.actionProvider.handleR79();
    }
    else if(r80.some(el => message.includes(el)))
    {
      this.actionProvider.handleR80();
    }
    else if(r81.some(el => message.includes(el)))
    {
      this.actionProvider.handleR81();
    }
    else if(r82.some(el => message.includes(el)))
    {
      this.actionProvider.handleR82();
    }
    else if(r83.some(el => message.includes(el)))
    {
      this.actionProvider.handleR83();
    }
    else if(r84.some(el => message.includes(el)))
    {
      this.actionProvider.handleR84();
    }
    else if(newW.some(el => message.includes(el)))
    {
      this.actionProvider.handleNewW();
    }
    else
    this.actionProvider.bydefault();
  
    

  }
}

export default MessageParser;