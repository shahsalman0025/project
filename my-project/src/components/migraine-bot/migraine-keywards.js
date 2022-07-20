// in MessageParser.js
let mig_check = new Array(90);
const Max_intro=1;
  let intro=0;
const Max_cnfr_id=2;
  let cnfr_id=0;
const Max_consent=2;
  let consent=0;
const Max_presenting=2;
  let presenting=0;
const Max_history_of_presenting=8;
  let history_of_presenting=0;
const Max_past_mdcl_history=3;
  let past_mdcl_history=0;
const Max_drug_history=2;
  let drug_history=0;
const Max_allergies=2;
  let allergies=0;
const Max_family_history=1;
  let family_history=0;
const Max_social_history=5;
  let social_history=0;
const Max_review_of_sys=4;
  let review_of_sys=0;
const Max_ice=3;
  let ice=0;
const Max_travel=0;
  let travel=0;
const Max_anything_else=1;
  let anything_else=0;
const Max_red_flag=9;
  let red_flag=0;
const Max_other=6;
  let other=0;
const Max_thank=1;
  let thank=0;



class UtiKeywards {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  
  

  parse(message) {
    message=message.toLowerCase();
    // intro
    const msg0=["my name", "doctor", "physician", "associate", "pharmacist","hey","hello","my name","PA"]
    // confirm identity
    const msg1=["born", "dob", "birth", "name", "date"]
    const msg2=["old", "age"]
    // consent
    const msg3=["consent", "is that okay", "is that alright","are you okay with","take a history", "some questions"]
    // presenting complaints
    const msg4=["alright", "how are you", "how do you", "feeling"]
    const msg5=["been happening", "here for","going on", "can I", "you here", "you with"]
    // hsitory of complaints
    const msg6=["location", "located", "where is", "where is the pain", "left side", "right side", "central", "centrally", "whole head", "forehead", "middle", "bilaterally", "unilaterally"]
    const msg7=["crushing", "tight", "dull", "sharp", "burn", "describe the pain", "feel like", "indigestion", "throbbing", "pounding", "feel like", "burning", "look like"]
    const msg8=["touch", "press", "put pressure", "sore"]
    const msg9=["onset", "started", "begun", "began", "start", "quickly", "sudden", "duration"]
    const msg10=["radiate", "spreads", "spread", "move", "moves", "anywhere else", "shooting", "radiate", "legs", "side"]
    const msg11=["relieves", "improves", "alleviates", "eases", "better", "dark","improve"]
    const msg12=["harsher", "worse", "exacerbates", "aggravates", "triggers", "progressive","trigger", "gradual"]
    const msg13=["signs", "other symptoms", "vomiting", "nausea", "abdominal pain"]
    const msg14=["score", "out of 10", "how severe", "severity"]
    const msg15=["previous", "prior", "preceding", "earlier", "before", "aura", "episodes", "similar","doing"]
    const msg16=["throughout", "during","doing at the time"]
    const msg17=["following", "after"]
    // past mdcl history
    const msg18=["underlying conditions", "known conditions", "diagnosed", "medical history", "recently unwell", "cold", "strep", "obesity", "surgery", "surgeries", "diabetes", "admission", "hospital", "medical conditions", "past medical"]
    const msg19=["immunised", "vaccines","vaccinated"]
    // drug history
    const msg20=["drugs","medications", "recreational", "over the counter", "analgesia", "pain relief", "nsaid", "medications", "meds", "ointment", "cream"]
    // allergies
    const msg21=["reactions", "sensitivities", "allergies"]
    // family history
    const msg22=["mum"," dad", "brother", "sister", "family history" ]
    // social history
    const msg23=["job", "school", "education", "social", "work", "occupation"]
    const msg24=["smoke", "cigarettes", "smoked", "smoking"]
    const msg25=["spirit", "wine", "beer", "alcohol", "do you drink"]
    const msg26=["diet", "drink","fluid", "drinking", "dry", "dehydration", "food", "appetite", "cholesterol"]
    const msg27=["home", "house", "living", "flat", "live", "support", "dependents"]
    const msg28=["romigne", "daily life", "way of life", "walk", "exercise", "fitness", "workout", "lifestyle","your life", "your lifestyle"]
    const msg29=["coffee", "energy drinks"," caffeine "]
    // review of system
    const msg30=["breath", "short of", "breathing", "sob", "shortness", "wheezing", "wheeze"]
    const msg31=["coughing","bringingup", "phlegm", "sputum", "mucus", "cough", "dry cough", "bringing anything up"]
    const msg32=["hot", "feverish", "a fever", "sweating", "sweat", "shivering", "rigors", "cold"]
    const msg33=["oedema", "swelling", "ankles", "inflammation", "calf", "calves", "swollen"]
    const msg34=["woke", "sleeping", "pillow", "sat up", "nap", "sleep", "upright", "bed"]
    const msg35=["outside chest", "palpitations", "racing", "feel your heart"]
    const msg36=["tiredness", "lethargy", "muscle", "ache", "tired", "fatigue", "exhausted", "drowsiness", "drowsy"]
    const msg37=["upset", "down", "sad", "unhappy", "miserable","stressful", "depressed", "stress", "stressed"]
    const msg38=["anxious", "anxiety"]
    const msg39=["mood", "behaviour", "attitude", "feelings"]
    const msg40=["adjustments", "new", "recent changes"]
    const msg41=["wound", "hard", "accident", "trauma", "injury" ]
    const msg42=["hay", "asthma", "eczema"]
    const msg43=["urinate", "wee", "poo", "faeces", "diarrhoea", "diarrhoeal", "incontinent", "incontinence","bowel", "toilet", "constipated", "constipation", "water works", 'toileting', "dysuria", "stool", "colour"]
    const msg44=["lesions", "pimples", "spots", "hives", "rash", "rashes", "skin", "irritation"]
    const msg45=["smelling", "sight", "vision", "sounds", "sound", "listen", "visual","smell", "smelling", "sensation", "headache", "dizzy", "dizziness"]
    const msg46=["menopause", "period", "pregnancy", "pregnant"]
    const msg47=["sexually active", "sex", "sexual" ]
    const msg48=["itch", "itchiness", "tickle"]
    const msg49=["tender", "tenderness"]
    const msg50=["faint", "syncope", "blackout", "collapse", "consciousness"]
    // ICE
    const msg51=["think", "thoughts", "your ideas","idea"]
    const msg52=["worrying", "troubling you", "concerns","concerning"]
    const msg53=["expect", "out of", "you want to", "expectations","wanting to"]
    // travel
    const msg54=["holidays", "journey", "flight", "long haul", "travel", "exotic", "countries"]
    // anything else
    const msg55=["anything else"]
    // red flags
    const msg56=["night sweats"]
    const msg57=["anal tone", "anal sensation","anus"]
    const msg58=["bone pain"]
    const msg59=["seizure"]
    const msg60=["neck stiffness"]
    const msg61=["blanching"," rash"]
    const msg62=["photophobia", "light sensitivity"]
    const msg63=["weight loss"," weight"]
    const msg64=["papilledema", "ear ringing" ]
    const msg65=["scalp"]
    const msg66=["swallow", "swallowing", "dysphagia"]
    const msg67=["anaemia"]
    const msg68=["steroid", "steroids"]
    const msg69=["pink urine", "red urine", "haematuria", "blood in urine"]
    const msg70=["haemoptysis", "coughing up blood"," blood"]
    const msg71=["bruising", "bruise" ]
    const msg72=["flank pain", "pain in side", "kidney pain", "side pain"]
    const msg73=["paralysis"]
    const msg74=["suicide", "suicidal"]
    // other symptoms
    const msg75=["confusion", "confused", "personality change"," behavioural changes"]
    const msg76=["clots", "clotting"]
    const msg77=["covid", "covid-19", "sars", "corona"]
    const msg78=["balance", "coordination", "ataxia", "walking"]
    const msg79=["belching", "burping", "bloated", "passing wind", "trump"]
    const msg80=["back pain", "pain in back", "joints"]
    const msg81=["lump", "growth", "abscess", "cancer", "tumour", "bumps"]
    const msg82=["pins and needles", "tingling", "numb"]
    const msg83=["face drooping", "loss of face" ]
    const msg84=["arm"]
    const msg85=["speech", "dysarthria"]
    const msg86=["motor", "strength", "weak", "weakness"]
    const msg87=["counselling", "council", "psychiatry", "shrink"] 
    // thanks
    const msg88=["thank you", "now finished", "complete the", "completed", "ended"] 
    const msg89=["How long", "going on for"]



// intro
    if (msg0.some(el => message.includes(el)) ){
      this.actionProvider.handlemsg();
        
        
      if(mig_check[0]!==true){
          if(intro!=Max_intro)
            intro=+1;
            mig_check[0]=true;
            console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    }


    // confirm identity
    else 
      if (msg1.some(el => message.includes(el))) {
        this.actionProvider.handlemsg1();

        if(mig_check[1]!==true){
          if(cnfr_id!==Max_cnfr_id)
            cnfr_id=+2;
            mig_check[1]=true;
            console.log("Run Score Added")
        }
        else{
            console.log("already run score not added")
        }
      }

      else
    if (msg2.some(el => message.includes(el))) {
      this.actionProvider.handlemsg2();

      if(mig_check[2]!==true){
        if(cnfr_id!==Max_cnfr_id)
          cnfr_id=+1;
          mig_check[2]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    }
    
    // consent
    else
    if (msg3.some(el => message.includes(el))) {
      this.actionProvider.handlemsg3();

      if(mig_check[3]!==true){
        if(consent!==Max_consent)
          consent=+2;
          mig_check[3]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    } 
    // presenting complaints
    else
    if (msg4.some(el => message.includes(el))) {
      this.actionProvider.handlemsg4();

      if(mig_check[4]!==true){
        if(presenting!==Max_presenting)
          presenting=+1;
          mig_check[4]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }              
    } 
    else
    if (msg5.some(el => message.includes(el))) {
      this.actionProvider.handlemsg5();

      if(mig_check[5]!==true){
        if(presenting!==Max_presenting)
          presenting=+1;
          mig_check[5]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }              
    }
    // history of complaint 
    else
    if (msg6.some(el => message.includes(el))) {
      this.actionProvider.handlemsg6();

      if(mig_check[6]!==true){
        if(history_of_presenting!==Max_history_of_presenting)
          history_of_presenting=+1;
          mig_check[6]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    } 
    else
    if (msg7.some(el => message.includes(el))) {
      this.actionProvider.handlemsg7();

      if(mig_check[7]!==true){
        if(history_of_presenting!==Max_history_of_presenting)
          history_of_presenting=+1;
          mig_check[7]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    } 
    else
    if (msg8.some(el => message.includes(el))) {
      this.actionProvider.handlemsg8();

      if(mig_check[8]!==true){
        if(history_of_presenting!==Max_history_of_presenting)
          history_of_presenting=+1;
          mig_check[8]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    } 
    else
    if (msg9.some(el => message.includes(el))) {
      this.actionProvider.handlemsg9();

      if(mig_check[9]!==true){
        if(history_of_presenting!==Max_history_of_presenting)
          history_of_presenting=+1;
          mig_check[9]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    } 
    else
    if (msg10.some(el => message.includes(el))) {
      this.actionProvider.handlemsg10();

      if(mig_check[10]!==true){
        if(history_of_presenting!==Max_history_of_presenting)
          history_of_presenting=+1;
          mig_check[10]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    } 
    else
    if (msg11.some(el => message.includes(el))) {
      this.actionProvider.handlemsg11();

      if(mig_check[11]!==true){
        if(history_of_presenting!==Max_history_of_presenting)
          history_of_presenting=+1;
          mig_check[11]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    } 
    else
    if (msg12.some(el => message.includes(el))) {
      this.actionProvider.handlemsg12();

      if(mig_check[12]!==true){
        if(history_of_presenting!==Max_history_of_presenting)
          history_of_presenting=+1;
          mig_check[12]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    }
    else
    if (msg13.some(el => message.includes(el))) {
      this.actionProvider.handlemsg13();

      if(mig_check[13]!==true){
        if(history_of_presenting!==Max_history_of_presenting)
          history_of_presenting=+1;
          mig_check[13]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    } 
    else
    if (msg14.some(el => message.includes(el))) {
      this.actionProvider.handlemsg14();

      if(mig_check[14]!==true){
        if(history_of_presenting!==Max_history_of_presenting)
          history_of_presenting=+1;
          mig_check[14]=true;
          console.log("Run Score Added")
      }
      else{
          console.log("already run score not added")
      }
    } 
   else
   if (msg15.some(el => message.includes(el))) {
    this.actionProvider.handlemsg15();

    if(mig_check[15]!==true){
      if(history_of_presenting!==Max_history_of_presenting)
        history_of_presenting=+1;
        mig_check[15]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
  if (msg16.some(el => message.includes(el))) {
    this.actionProvider.handlemsg16();

    if(mig_check[16]!==true){
      if(history_of_presenting!==Max_history_of_presenting)
        history_of_presenting=+1;
        mig_check[16]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
  if (msg17.some(el => message.includes(el))) {
    this.actionProvider.handlemsg17();

    if(mig_check[17]!==true){
      if(history_of_presenting!==Max_history_of_presenting)
        history_of_presenting=+1;
        mig_check[17]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // past mdcl history
  else
  if (msg18.some(el => message.includes(el))) {
    this.actionProvider.handlemsg18();

    if(mig_check[18]!==true){
      if(past_mdcl_history!==Max_past_mdcl_history)
        past_mdcl_history=+2;
        mig_check[18]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg19.some(el => message.includes(el))) {
    this.actionProvider.handlemsg19();

    if(mig_check[19]!==true){
      if(past_mdcl_history!==Max_past_mdcl_history)
        past_mdcl_history=+1;
        mig_check[19]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // drug history
  else
   if (msg20.some(el => message.includes(el))) {
    this.actionProvider.handlemsg20();

    if(mig_check[20]!==true){
      if(drug_history!==Max_drug_history)
        drug_history=+2;
        mig_check[20]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // allergies
  else
   if (msg21.some(el => message.includes(el))) {
    this.actionProvider.handlemsg21();

    if(mig_check[21]!==true){
      if(allergies!==Max_allergies)
        past_mdcl_history=+2;
        mig_check[21]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // family history
  else
   if (msg22.some(el => message.includes(el))) {
    this.actionProvider.handlemsg22();

    if(mig_check[22]!==true){
      if(family_history!==Max_family_history)
        family_history=+1;
        mig_check[22]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // social history
  else
   if (msg23.some(el => message.includes(el))) {
    this.actionProvider.handlemsg23();

    if(mig_check[23]!==true){
      if(social_history!==Max_social_history)
        social_history=+1;
        mig_check[23]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }  
  }
  else
   if (msg24.some(el => message.includes(el))) {
    this.actionProvider.handlemsg24();

    if(mig_check[24]!==true){
      if(social_history!==Max_social_history)
        social_history=+1;
        mig_check[24]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }  
  }
  else
   if (msg25.some(el => message.includes(el))) {
    this.actionProvider.handlemsg25();

    if(mig_check[25]!==true){
      if(social_history!==Max_social_history)
        social_history=+1;
        mig_check[25]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }  
  }
  else
   if (msg26.some(el => message.includes(el))) {
    this.actionProvider.handlemsg26();

    if(mig_check[26]!==true){
      if(social_history!==Max_social_history)
        social_history=+1;
        mig_check[26]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }  
  }
  else
   if (msg27.some(el => message.includes(el))) {
    this.actionProvider.handlemsg27();

    if(mig_check[27]!==true){
      if(social_history!==Max_social_history)
        social_history=+1;
        mig_check[27]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }  
  }
  else
   if (msg28.some(el => message.includes(el))) {
    this.actionProvider.handlemsg28();

    if(mig_check[28]!==true){
      if(social_history!==Max_social_history)
        social_history=+1;
        mig_check[28]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }  
  }
  else
   if (msg29.some(el => message.includes(el))) {
    this.actionProvider.handlemsg29();

    if(mig_check[29]!==true){
      if(social_history!==Max_social_history)
        social_history=+1;
        mig_check[29]=true;
        console.lo4("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }  
  }
  // review of system
  else
   if (msg30.some(el => message.includes(el))) {
    this.actionProvider.handlemsg30();

    if(mig_check[30]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[30]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg31.some(el => message.includes(el))) {
    this.actionProvider.handlemsg31();

    if(mig_check[31]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[31]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg32.some(el => message.includes(el))) {
    this.actionProvider.handlemsg32();

    if(mig_check[32]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[32]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg33.some(el => message.includes(el))) {
    this.actionProvider.handlemsg33();

    if(mig_check[33]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+0;
        mig_check[33]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg34.some(el => message.includes(el))) {
    this.actionProvider.handlemsg34();

    if(mig_check[34]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+0;
        mig_check[34]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg35.some(el => message.includes(el))) {
    this.actionProvider.handlemsg35();

    if(mig_check[35]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[35]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg36.some(el => message.includes(el))) {
    this.actionProvider.handlemsg36();

    if(mig_check[36]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[36]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg37.some(el => message.includes(el))) {
    this.actionProvider.handlemsg37();

    if(mig_check[37]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[37]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg38.some(el => message.includes(el))) {
    this.actionProvider.handlemsg38();

    if(mig_check[38]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[38]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg39.some(el => message.includes(el))) {
    this.actionProvider.handlemsg39();

    if(mig_check[39]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+0;
        mig_check[39]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
  if (msg40.some(el => message.includes(el))) {
    this.actionProvider.handlemsg40();

    if(mig_check[40]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[40]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg41.some(el => message.includes(el))) {
    this.actionProvider.handlemsg41();

    if(mig_check[41]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[41]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg42.some(el => message.includes(el))) {
    this.actionProvider.handlemsg42();

    if(mig_check[42]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+0;
        mig_check[42]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
  if (msg43.some(el => message.includes(el))) {
    this.actionProvider.handlemsg43();

    if(mig_check[43]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[43]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg44.some(el => message.includes(el))) {
    this.actionProvider.handlemsg44();

    if(mig_check[44]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[44]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg45.some(el => message.includes(el))) {
    this.actionProvider.handlemsg45();

    if(mig_check[45]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+0;
        mig_check[45]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg46.some(el => message.includes(el))) {
    this.actionProvider.handlemsg46();

    if(mig_check[46]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+0;
        mig_check[46]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg47.some(el => message.includes(el))) {
    this.actionProvider.handlemsg47();

    if(mig_check[47]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+0;
        mig_check[47]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg48.some(el => message.includes(el))) {
    this.actionProvider.handlemsg48();

    if(mig_check[48]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+0;
        mig_check[48]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg49.some(el => message.includes(el))) {
    this.actionProvider.handlemsg49();

    if(mig_check[49]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[49]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg50.some(el => message.includes(el))) {
    this.actionProvider.handlemsg50();

    if(mig_check[50]!==true){
      if(review_of_sys!==Max_review_of_sys)
        review_of_sys=+1;
        mig_check[50]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // ICE
  else
   if (msg51.some(el => message.includes(el))) {
    this.actionProvider.handlemsg51();
    
    if(mig_check[51]!==true){
      if(ice!==Max_ice)
        ice=+1;
        mig_check[51]=true;
        console.log("Run Score Added")
  }
}
  else
   if (msg52.some(el => message.includes(el))) {
    this.actionProvider.handlemsg52();

    if(mig_check[52]!==true){
      if(ice!==Max_ice)
        ice=+1;
        mig_check[52]=true;
        console.log("Run Score Added")
  }
}
  else
   if (msg53.some(el => message.includes(el))) {
    this.actionProvider.handlemsg53();

    if(mig_check[53]!==true){
      if(ice!==Max_ice)
        ice=+1;
        mig_check[53]=true;
        console.log("Run Score Added")
  }
}
// travel
  else
   if (msg54.some(el => message.includes(el))) {
    this.actionProvider.handlemsg54();

    if(mig_check[54]!==true){
      if(travel!==Max_travel)
        travel=+0;
        mig_check[54]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // anything else
  else
   if (msg55.some(el => message.includes(el))) {
    this.actionProvider.handlemsg55();
    if(mig_check[55]!==true){
      if(anything_else!==Max_anything_else)
        anything_else=+1;
        mig_check[55]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // red flag
  else
   if (msg56.some(el => message.includes(el))) {
    this.actionProvider.handlemsg56();

    if(mig_check[56]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+0;
        mig_check[56]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg57.some(el => message.includes(el))) {
    this.actionProvider.handlemsg57();

    if(mig_check[57]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[57]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg58.some(el => message.includes(el))) {
    this.actionProvider.handlemsg58();

    if(mig_check[58]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+0;
        mig_check[58]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg59.some(el => message.includes(el))) {
    this.actionProvider.handlemsg59();

    if(mig_check[59]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[59]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg60.some(el => message.includes(el))) {
    this.actionProvider.handlemsg60();

    if(mig_check[60]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[60]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg61.some(el => message.includes(el))) {
    this.actionProvider.handlemsg61();

    if(mig_check[61]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[61]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg62.some(el => message.includes(el))) {
    this.actionProvider.handlemsg62();

    if(mig_check[62]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[62]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg63.some(el => message.includes(el))) {
    this.actionProvider.handlemsg63();

    if(mig_check[63]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[63]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg64.some(el => message.includes(el))) {
    this.actionProvider.handlemsg64();

    if(mig_check[64]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[64]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
  if (msg65.some(el => message.includes(el))) {
  this.actionProvider.handlemsg65();

  if(mig_check[65]!==true){
    if(red_flag!==Max_red_flag)
      red_flag=+3;
      mig_check[65]=true;
      console.log("Run Score Added")
  }
  else{
      console.log("already run score not added")
  }
  }
  else
   if (msg66.some(el => message.includes(el))) {
    this.actionProvider.handlemsg66();

    if(mig_check[66]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[66]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg67.some(el => message.includes(el))) {
    this.actionProvider.handlemsg67();

    if(mig_check[67]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[67]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg68.some(el => message.includes(el))) {
    this.actionProvider.handlemsg68();

    if(mig_check[68]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[68]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg69.some(el => message.includes(el))) {
    this.actionProvider.handlemsg69();

    if(mig_check[69]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+0;
        mig_check[69]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg70.some(el => message.includes(el))) {
    this.actionProvider.handlemsg70();

    if(mig_check[70]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+2;
        mig_check[70]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg71.some(el => message.includes(el))) {
    this.actionProvider.handlemsg71();

    if(mig_check[71]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[71]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg72.some(el => message.includes(el))) {
    this.actionProvider.handlemsg72();

    if(mig_check[72]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+0;
        mig_check[72]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg73.some(el => message.includes(el))) {
    this.actionProvider.handlemsg73();

    if(mig_check[73]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[73]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg74.some(el => message.includes(el))) {
    this.actionProvider.handlemsg74();

    if(mig_check[74]!==true){
      if(red_flag!==Max_red_flag)
        red_flag=+3;
        mig_check[74]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // other symptoms
  else
   if (msg75.some(el => message.includes(el))) {
    this.actionProvider.handlemsg75();

    if(mig_check[75]!==true){
      if(other!==Max_other)
        other=+2;
        mig_check[75]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg76.some(el => message.includes(el))) {
    this.actionProvider.handlemsg76();

    if(mig_check[76]!==true){
      if(other!==Max_other)
        other=+0;
        mig_check[76]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg77.some(el => message.includes(el))) {
    this.actionProvider.handlemsg77();

    if(mig_check[77]!==true){
      if(other!==Max_other)
        other=+2;
        mig_check[77]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg78.some(el => message.includes(el))) {
    this.actionProvider.handlemsg78();

    if(mig_check[78]!==true){
      if(other!==Max_other)
        other=+2;
        mig_check[78]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg79.some(el => message.includes(el))) {
    this.actionProvider.handlemsg79();

    if(mig_check[79]!==true){
      if(other!==Max_other)
        other=+0;
        mig_check[79]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg80.some(el => message.includes(el))) {
    this.actionProvider.handlemsg80();

    if(mig_check[80]!==true){
      if(other!==Max_other)
        other=+2;
        mig_check[80]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg81.some(el => message.includes(el))) {
    this.actionProvider.handlemsg81();

    if(mig_check[81]!==true){
      if(other!==Max_other)
        other=+0;
        mig_check[81]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg82.some(el => message.includes(el))) {
    this.actionProvider.handlemsg82();

    if(mig_check[82]!==true){
      if(other!==Max_other)
        other=+2;
        mig_check[82]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg83.some(el => message.includes(el))) {
    this.actionProvider.handlemsg83();

    if(mig_check[83]!==true){
      if(other!==Max_other)
        other=+2;
        mig_check[83]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
   if (msg84.some(el => message.includes(el))) {
    this.actionProvider.handlemsg84();

    if(mig_check[84]!==true){
      if(other!==Max_other)
        other=+2;
        mig_check[84]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
  if (msg85.some(el => message.includes(el))) {
    this.actionProvider.handlemsg85();

    if(mig_check[85]!==true){
      if(other!==Max_other)
        other=+2;
        mig_check[85]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
  if (msg86.some(el => message.includes(el))) {
    this.actionProvider.handlemsg86();

    if(mig_check[86]!==true){
      if(other!==Max_other)
        other=+2;
        mig_check[86]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else
  if (msg87.some(el => message.includes(el))) {
    this.actionProvider.handlemsg87();

    if(mig_check[87]!==true){
      if(other!==Max_other)
        other=+3;
        mig_check[87]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  // Thanks
  else
  if (msg88.some(el => message.includes(el))) {
    this.actionProvider.handlemsg88();
  }
  else
  if (msg89.some(el => message.includes(el)) ){
    this.actionProvider.handlemsg89();
    if(mig_check[88]!==true){
      if(thank!==Max_thank)
        thank=+1;
        mig_check[88]=true;
        console.log("Run Score Added")
    }
    else{
        console.log("already run score not added")
    }
  }
  else{
    this.actionProvider.bydefault();
  }
 }
  
  
}


export default UtiKeywards;