// in MessageParser.js
let uti_check = new Array(90);
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
const Max_past_mdcl_history=2;
  let past_mdcl_history=0;
const Max_drug_history=2;
  let drug_history=0;
const Max_allergies=2;
  let allergies=0;
const Max_family_history=1;
  let family_history=0;
const Max_social_history=4;
  let social_history=0;
const Max_review_of_sys=5;
  let review_of_sys=0;
const Max_ice=3;
  let ice=0;
const Max_travel=0;
  let travel=0;
const Max_anything_else=1;
  let anything_else=0;
const Max_red_flag=6;
  let red_flag=0;
const Max_other=2;
  let other=0;
const Max_thank=1;
  let thank=0;
class UtiKeywards {

  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    

  }
      
  
    parse(message) {
      message = message.toLowerCase();
      // introduce yourself
      const pack = ["my name", "doctor", "physician", "associate", "pharmacist", "hey", "hello","PA"]
      // confirm identity
      const pack1 =  ["born", "dob", "birth", "name", "date"]
      const pack2 = ["old", "age"]
      // Consent
      const pack3 = ["consent", "is that okay", "is that alright", "are you okay with","take a history", "some questions"]
      //  presenting complent
      const pack4 = ["alright", "how are you", "how do you", "feeling"]
      const pack5 = ["going on", "can I", "you here", "you with", "been happening", "here for", "short of breath", "breathe"]
      //  history of presenting complent
      const pack6 = ["location", "located", "where is", "where is the pain", "central, centrally, middle", "vagina", "penis", "bladder", "side", "bilaterally", "unilaterally"]
      const pack7 = ["crushing", "tight", "dull", "sharp", "describe the pain", "feel like", "indigestion", "throbbing", "pounding", "feel like", "burning, look like"]
      const pack8 = ["touch", "press", "put pressure", "sore"]
      const pack9 = ["onset", "started", "begun", "began", "start", "quickly", "sudden", "duration"]
      const pack10 = ["radiate", "spreads", "spread", "move", "moves", "anywhere else", "shooting, radiate", "moves"]
      const pack11 = ["relieves","improve", "improves", "alleviates", "eases", "better"]
      const pack12 = ["harsher","trigger", "worse", "exacerbates", "aggravates", "triggers", "progressive", "gradual"]
      const pack13 = ["signs", "other symptoms", "vomiting", "nausea", "abdominal pain"]
      const pack14 = ["score", "out of 10", "how severe", "severity"]
      const pack15 = ["Previous", "prior", "preceding", "earlier", "before", "episodes", "similar","aura","doing"]
      const pack16 = ["throughout", "during","doing at the time"]
      const pack17 = ["following", "after"]
      // Past medical history 
      const pack18 = ["underlying conditions", "known conditions", "diagnosed", "medical history", "recently unwell", "cold", "strep", "obesity", "surgery", "surgeries", "diabetes", "admission", "hospital","medical conditions", "past medical"]
      const pack19 = ["immunised", "vaccines","vaccinated"]
      // Drug history
      const pack20 = ["drugs", "recreational","medicatons", "over the counter", "analgesia", "pain relief", "nsaid", "medications", "meds", "ointment", "cream"]
      // allergies
      const pack21 = ["reactions", "sensitivities", "allergies"]
      // family history
      const pack22 = ["mum", "dad", "brother", "sister", "family history"]
      // social history
      const pack23 = ["job", "school", "education", "social", "work", "occupation"]
      const pack24 = ["smoke", "cigarettes", "smoked", "smoking"]
      const pack25 = ["spirit", "wine", "beer", "alcohol", "do you drink"]      
      const pack26 = ["diet", "drink", "fluid", "eating ", "drinking", "dry", "dehydration", "food", "appetite", "cholesterol"]
      const pack27 = ["home", "house", "living", "flat", "live", "support", "dependents"]
      const pack28 = ["routine", "daily life", "way of life", "walk", "exercise", "fitness", "workout", "lifestyle","your life", "your lifestyle"]
      const pack29 = ["coffee", "energy drinks", "caffeine"]
      // ROS
      const pack30 = ["breath", "short of", "breathing", "sob", "shortness", "wheezing", "wheeze"]
      const pack31 = ["coughing", "phlegm","bringing up", "sputum", "mucus", "cough", "dry cough", "bringing anything up"]
      const pack32 = ["hot", "feverish", "a fever", "sweating", "sweat", "shivering", "rigors", "cold"]
      const pack33 = ["oedema", "swelling", "ankles", "inflammation", "calf", "calves", "swollen"]
      const pack34 = ["woke", "sleeping", "pillow", "sat up", "nap", "sleep", "upright", "bed"]
      const pack35 = ["outside chest", "palpitations", "racing", "feel your heart"]
      const pack36 = ["tiredness", "lethargy", "muscle", "ache", "tired", "fatigue", "exhausted", "drowsiness", "drowsy"]
      const pack37 = ["upset", "down", "sad", "unhappy", "miserable","stressful", "depressed", "stress, stressed"]
      const pack38 = ["anxious", "anxiety"]
      const pack39 = ["mood", "behaviour", "attitude", "feelings"]
      const pack40 = ["adjustments", "new", "recent changes"]
      const pack41 = [ "wound", "hard", "accident", "trauma", "injury"]
      const pack42 = ["hay", "asthma", "eczema"];
      const pack43 = ["urinate", "wee", "poo", "faeces", "diarrhoea", "diarrhoeal", "incontinent", "incontinence", "bowel", "toilet", "constipated", "constipation", "water works", "toileting", "dysuria", "stool", "colour"]
      const pack44 = ["lesions", "pimples", "spots", "hives", "rash", "rashes", "skin", "irritation"]
      const pack45 = ["smelling", "sight", "vision", "sounds", "sound", "listen", "visual", "smell", "smelling", "sensation", "headache", "dizzy", "dizziness"]
      const pack46 = ["menopause", "period", "pregnancy", "pregnant"]
      const pack47 = ["sexually active", "sex", "sexual"]
      const pack48 = ["itch", "itchiness", "tickle"]
      const pack49 = ["tender", "tenderness"]
      const pack50 = ["faint", "syncope", "blackout", "collapse","consciousness"]
      // ICE
      const pack51 = ["think", "thoughts", "your ideas","idea"]
      const pack52 = ["worrying", "troubling you", "concerns","concerning"]
      const pack53 = ["expect", "out of", "you want to", "expectations","wnating to"]
      // Travel
      const pack54 = ["holidays", "journey", "flight", "long haul", "travel", "exotic", "countries"]
      // anthing else
      const pack55 = ["anything else"]
      // Red flags
      const pack56 = ["night sweats"]
      const pack57 = ["anal tone", "anal sensation","anus"]
      const pack58 = ["bone pain"]
      const pack59 = ["seizure"]
      const pack60 = ["neck stiffness"]
      const pack61 = ["blanching", "rash"]
      const pack62 = ["photophobia", "light sensitivity"]
      const pack63 = ["weight loss", "weight"]
      const pack64 = ["papilledema", "ear ringing"]
      const pack65 = ["scalp"]
      const pack66 = ["swallow", "swallowing", "dysphagia"]
      const pack67 = ["anaemia"]
      const pack68 = ["steroid", "steroids"]
      const pack69 = ["pink urine", "red urine", "haematuria", "blood in urine"]
      const pack70 = ["bruising", "bruise"]
      const pack71 = ["flank pain", "pain in side", "kidney pain", "side pain"]
      const pack72 = ["haemoptysis", "coughing up blood", "blood"]
      const pack73 = ["paralysis"]
      const pack74 = ["suicide", "suicidal"]
      // other
      const pack75 = ["confusion", "confused", "personality change", "behavioural changes"]
      const pack76 = ["clots", "clotting"]
      const pack77 = ["covid", "covid-19", "SARS", "corona"]
      const pack78 = ["balance", "coordination", "ataxia", "walking"]
      const pack79 = ["belching", "burping", "bloated", "passing wind", "trump"]
      const pack80 = ["back pain", "pain in back", "joints"]
      const pack81 = ["lump", "growth", "abscess", "cancer", "tumour", "bumps"]
      const pack82 = ["pins and needles", "tingling", "numb"]
      const pack83 = ["face drooping", "loss of face"]
      const pack84 = ["arm"]
      const pack85 = ["speech", "dysarthria"]
      const pack86 = ["motor", "strength", "weak", "weakness"]
      const pack87 = ["counselling", "council", "psychiatry", "shrink"]
      // thanks
      const pack88 = ["thank you", "now finished", "complete the", "completed", "ended"]
      const pack89 = ["How long", "going on for"]



          if (pack.some(el => message.includes(el))) {
              this.actionProvider.Pack();

              if(uti_check[0]!==true){
                if(intro!=Max_intro)
                  intro=+1;
                  uti_check[0]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }

          }
      // confirm identity
          else
           if (pack1.some(el => message.includes(el))) {
              this.actionProvider.Pack1();

              if(uti_check[1]!==true){
                if(cnfr_id!==Max_cnfr_id)
                  cnfr_id=+2;
                  uti_check[1]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
          else
           if (pack2.some(el => message.includes(el))) {
                          this.actionProvider.Pack2();
             if(uti_check[2]!==true){
                if(cnfr_id!==Max_cnfr_id)
                  cnfr_id=+1;
                  uti_check[2]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
      // Consent

           else
           if (pack3.some(el => message.includes(el))) {
                          this.actionProvider.Pack3();
             if(uti_check[3]!==true){
                if(consent!==Max_consent)
                  consent=+2;
                  uti_check[3]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
      //  presenting complent

           else
           if (pack4.some(el => message.includes(el))) {
                          this.actionProvider.Pack4();
            if(uti_check[4]!==true){
                if(presenting!==Max_presenting)
                  presenting=+1;
                  uti_check[4]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }              
           }
           else
           if (pack5.some(el => message.includes(el))) {
                          this.actionProvider.Pack5();
            if(uti_check[5]!==true){
                if(presenting!==Max_presenting)
                  presenting=+1;
                  uti_check[5]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }              
           }
      //  history of presenting complent

           else
           if (pack6.some(el => message.includes(el))) {
                          this.actionProvider.Pack6();
            if(uti_check[6]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+1;
                  uti_check[6]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack7.some(el => message.includes(el))) {
                          this.actionProvider.Pack7();
            if(uti_check[7]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+1;
                  uti_check[7]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack8.some(el => message.includes(el))) {
                          this.actionProvider.Pack8();
            if(uti_check[8]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+0;
                  uti_check[8]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack9.some(el => message.includes(el))) {
                          this.actionProvider.Pack9();
            if(uti_check[9]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+1;
                  uti_check[9]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack10.some(el => message.includes(el))) {
                          this.actionProvider.Pack10();
            if(uti_check[10]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+1;
                  uti_check[10]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack11.some(el => message.includes(el))) {
                          this.actionProvider.Pack11();
            if(uti_check[11]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+1;
                  uti_check[11]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack12.some(el => message.includes(el))) {
                          this.actionProvider.Pack12();
            if(uti_check[12]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+1;
                  uti_check[12]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack13.some(el => message.includes(el))) {
                          this.actionProvider.Pack13();
            if(uti_check[13]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+1;
                  uti_check[13]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack14.some(el => message.includes(el))) {
                          this.actionProvider.Pack14();
            if(uti_check[14]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+1;
                  uti_check[14]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack15.some(el => message.includes(el))) {
                          this.actionProvider.Pack15();
            if(uti_check[15]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+1;
                  uti_check[15]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack16.some(el => message.includes(el))) {
                          this.actionProvider.Pack16();
            if(uti_check[16]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+0;
                  uti_check[16]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack17.some(el => message.includes(el))) {
                          this.actionProvider.Pack17();
            if(uti_check[17]!==true){
                if(history_of_presenting!==Max_history_of_presenting)
                  history_of_presenting=+0;
                  uti_check[17]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
      // Past medical history 

           else
           if (pack18.some(el => message.includes(el))) {
                          this.actionProvider.Pack18();
            if(uti_check[18]!==true){
                if(past_mdcl_history!==Max_past_mdcl_history)
                  past_mdcl_history=+2;
                  uti_check[18]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack19.some(el => message.includes(el))) {
                          this.actionProvider.Pack19();
            if(uti_check[19]!==true){
                if(past_mdcl_history!==Max_past_mdcl_history)
                  past_mdcl_history=+2;
                  uti_check[19]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
          //  drug history
           else
           if (pack20.some(el => message.includes(el))) {
                          this.actionProvider.Pack20();
            if(uti_check[20]!==true){
                if(drug_history!==Max_drug_history)
                  drug_history=+2;
                  uti_check[20]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
          //  Allergies

           else
           if (pack21.some(el => message.includes(el))) {
                          this.actionProvider.Pack21();
            if(uti_check[21]!==true){
                if(allergies!==Max_allergies)
                  past_mdcl_history=+2;
                  uti_check[21]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
          //  family history
           else
           if (pack22.some(el => message.includes(el))) {
                          this.actionProvider.Pack22();
            if(uti_check[22]!==true){
                if(family_history!==Max_family_history)
                  family_history=+1;
                  uti_check[22]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           // social history
           else
           if (pack23.some(el => message.includes(el))) {
                          this.actionProvider.Pack23();
            if(uti_check[23]!==true){
                if(social_history!==Max_social_history)
                  social_history=+1;
                  uti_check[23]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }  
           }
           else
           if (pack24.some(el => message.includes(el))) {
                          this.actionProvider.Pack24();
              if(uti_check[24]!==true){
                if(social_history!==Max_social_history)
                  social_history=+1;
                  uti_check[24]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack25.some(el => message.includes(el))) {
                          this.actionProvider.Pack25();
            if(uti_check[25]!==true){
                if(social_history!==Max_social_history)
                  social_history=+1;
                  uti_check[25]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack26.some(el => message.includes(el))) {
                          this.actionProvider.Pack26();
            if(uti_check[26]!==true){
                if(social_history!==Max_social_history)
                  social_history=+1;
                  uti_check[26]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }              
           }
           else
           if (pack27.some(el => message.includes(el))) {
                          this.actionProvider.Pack27();
                          // 0
            if(uti_check[27]!==true){
                if(social_history!==Max_social_history)
                  social_history=+0;
                  uti_check[27]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack28.some(el => message.includes(el))) {
                          this.actionProvider.Pack28();
            if(uti_check[28]!==true){
                if(social_history!==Max_social_history)
                  social_history=+1;
                  uti_check[28]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack29.some(el => message.includes(el))) {
                          this.actionProvider.Pack29();
            if(uti_check[29]!==true){
                if(social_history!==Max_social_history)
                  social_history=+1;
                  uti_check[29]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
      // ROS

           else
           if (pack30.some(el => message.includes(el))) {
                          this.actionProvider.Pack30();
            if(uti_check[30]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[30]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack31.some(el => message.includes(el))) {
                          this.actionProvider.Pack31();
            if(uti_check[31]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[31]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack32.some(el => message.includes(el))) {
                          this.actionProvider.Pack32();
            if(uti_check[32]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[32]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
            
           }
           else
           if (pack33.some(el => message.includes(el))) {
                          this.actionProvider.Pack33();
            if(uti_check[33]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[33]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
            }
           else
           if (pack34.some(el => message.includes(el))) {
                          this.actionProvider.Pack34();
                          // 
            if(uti_check[34]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+0;
                  uti_check[34]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack35.some(el => message.includes(el))) {
                          this.actionProvider.Pack35();
            if(uti_check[35]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[35]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }              
           }
           else
           if (pack36.some(el => message.includes(el))) {
                          this.actionProvider.Pack36();
            if(uti_check[36]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[31]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack37.some(el => message.includes(el))) {
                          this.actionProvider.Pack37();
                          //
            if(uti_check[37]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+0;
                  uti_check[37]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack38.some(el => message.includes(el))) {
                          this.actionProvider.Pack38();
                          //
            if(uti_check[38]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+0;
                  uti_check[38]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack39.some(el => message.includes(el))) {
                          this.actionProvider.Pack39();
                          //
            if(uti_check[39]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+0;
                  uti_check[39]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack40.some(el => message.includes(el))) {
                          this.actionProvider.Pack40();
            if(uti_check[40]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[40]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack41.some(el => message.includes(el))) {
                          this.actionProvider.Pack41();
            if(uti_check[41]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[41]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack42.some(el => message.includes(el))) {
                          this.actionProvider.Pack42();
                          //
            if(uti_check[42]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+0;
                  uti_check[42]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack43.some(el => message.includes(el))) {
                          this.actionProvider.Pack43();
            if(uti_check[43]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[43]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack44.some(el => message.includes(el))) {
                          this.actionProvider.Pack44();
            if(uti_check[44]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[44]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack45.some(el => message.includes(el))) {
                          this.actionProvider.Pack45();
            if(uti_check[45]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[45]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack46.some(el => message.includes(el))) {
                          this.actionProvider.Pack46();
            if(uti_check[46]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[46]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
                          
           }
           else
           if (pack47.some(el => message.includes(el))) {
                          this.actionProvider.Pack47();
                          // 
            if(uti_check[47]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+0;
                  uti_check[47]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack48.some(el => message.includes(el))) {
                          this.actionProvider.Pack48();
            if(uti_check[48]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[48]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }

           }
           else
           if (pack49.some(el => message.includes(el))) {
                          this.actionProvider.Pack49();
            if(uti_check[49]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+1;
                  uti_check[49]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack50.some(el => message.includes(el))) {
                          this.actionProvider.Pack50();
                          // 
            if(uti_check[50]!==true){
                if(review_of_sys!==Max_review_of_sys)
                  review_of_sys=+0;
                  uti_check[50]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
      // ICE

           else
           if (pack51.some(el => message.includes(el))) {
                          this.actionProvider.Pack51();
            if(uti_check[51]!==true){
                if(ice!==Max_ice)
                  ice=+1;
                  uti_check[51]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack52.some(el => message.includes(el))) {
                          this.actionProvider.Pack52();
            if(uti_check[52]!==true){
                if(ice!==Max_ice)
                  ice=+1;
                  uti_check[52]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack53.some(el => message.includes(el))) {
                          this.actionProvider.Pack53();
            if(uti_check[53]!==true){
                if(ice!==Max_ice)
                  ice=+1;
                  uti_check[53]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
      // Travel
          
           else
           if (pack54.some(el => message.includes(el))) {
                          this.actionProvider.Pack54();
           }
          //  Anything Else
           else
           if (pack55.some(el => message.includes(el))) {
                          this.actionProvider.Pack55();
            if(uti_check[55]!==true){
                if(anything_else!==Max_anything_else)
                  anything_else=+1;
                  uti_check[55]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
          //  Red Flag
           else
           if (pack56.some(el => message.includes(el))) {
                          this.actionProvider.Pack56();
            if(uti_check[56]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[56]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack57.some(el => message.includes(el))) {
                          this.actionProvider.Pack57();
                           
            if(uti_check[57]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[57]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack58.some(el => message.includes(el))) {
                          this.actionProvider.Pack58();
                          // 
             if(uti_check[58]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+0;
                  uti_check[58]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }

           }
           else
           if (pack59.some(el => message.includes(el))) {
                          this.actionProvider.Pack59();
             if(uti_check[59]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[59]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack60.some(el => message.includes(el))) {
                          this.actionProvider.Pack60();
                          // 
             if(uti_check[60]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+0;
                  uti_check[60]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack61.some(el => message.includes(el))) {
                          this.actionProvider.Pack61();
             if(uti_check[61]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[61]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack62.some(el => message.includes(el))) {
                          this.actionProvider.Pack62();
                          // 
             if(uti_check[62]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+0;
                  uti_check[621]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack63.some(el => message.includes(el))) {
                          this.actionProvider.Pack63();
             if(uti_check[63]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[63]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack64.some(el => message.includes(el))) {
                          this.actionProvider.Pack64();
                          // 
             if(uti_check[64]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+0;
                  uti_check[64]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack65.some(el => message.includes(el))) {
                          this.actionProvider.Pack65();
                          // 
             if(uti_check[65]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+0;
                  uti_check[65]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack66.some(el => message.includes(el))) {
                          this.actionProvider.Pack66();
                          // 
             if(uti_check[6]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+0;
                  uti_check[66]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack67.some(el => message.includes(el))) {
                          this.actionProvider.Pack67();
             if(uti_check[67]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[67]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack68.some(el => message.includes(el))) {
                          this.actionProvider.Pack68();
             if(uti_check[68]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[68]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }           
           }
           else
           if (pack69.some(el => message.includes(el))) {
                          this.actionProvider.Pack69();
             if(uti_check[69]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[69]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack70.some(el => message.includes(el))) {
                          this.actionProvider.Pack70();
                          // 
             if(uti_check[70]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+0;
                  uti_check[70]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack71.some(el => message.includes(el))) {
                          this.actionProvider.Pack71();
             if(uti_check[71]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[71]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack72.some(el => message.includes(el))) {
                          this.actionProvider.Pack72();
             if(uti_check[72]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+3;
                  uti_check[72]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack73.some(el => message.includes(el))) {
                          this.actionProvider.Pack73();
                          // 
             if(uti_check[73]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+0;
                  uti_check[73]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack74.some(el => message.includes(el))) {
                          this.actionProvider.Pack74();
                          // 
             if(uti_check[74]!==true){
                if(red_flag!==Max_red_flag)
                  red_flag=+0;
                  uti_check[74]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
          //  Others
           else
           if (pack75.some(el => message.includes(el))) {
                          this.actionProvider.Pack75();
             if(uti_check[75]!==true){
                if(other!==Max_other)
                  other=+2;
                  uti_check[75]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
          
           else
           if (pack76.some(el => message.includes(el))) {
                          this.actionProvider.Pack76();
            if(uti_check[76]!==true){
                if(other!==Max_other)
                  other=+2;
                  uti_check[76]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack77.some(el => message.includes(el))) {
                          this.actionProvider.Pack77();
           }
           else
           if (pack78.some(el => message.includes(el))) {
                          this.actionProvider.Pack78();
           }
           else
           if (pack79.some(el => message.includes(el))) {
                          this.actionProvider.Pack79();
           }
           else
           if (pack80.some(el => message.includes(el))) {
                          this.actionProvider.Pack80();
            if(uti_check[80]!==true){
                if(other!==Max_other)
                  other=+2;
                  uti_check[80]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack81.some(el => message.includes(el))) {
                          this.actionProvider.Pack81();
           }
           else
           if (pack82.some(el => message.includes(el))) {
                          this.actionProvider.Pack82();
           }
           
           else
           if (pack83.some(el => message.includes(el))) {
                          this.actionProvider.Pack83();
           }
           else
           if (pack84.some(el => message.includes(el))) {
                          this.actionProvider.Pack84();
           }
           else
           if (pack85.some(el => message.includes(el))) {
                          this.actionProvider.Pack85();
           }
           else
           if (pack86.some(el => message.includes(el))) {
                          this.actionProvider.Pack86();
           }
           else
           if (pack87.some(el => message.includes(el))) {
                          this.actionProvider.Pack87();
           }
          //  thanks
           else
           if (pack88.some(el => message.includes(el))) {
                          this.actionProvider.Pack88();
              if(uti_check[88]!==true){
                if(thank!==Max_thank)
                  thank=+1;
                  uti_check[88]=true;
                  console.log("Run Score Added")
              }
              else{
                  console.log("already run score not added")
              }
           }
           else
           if (pack89.some(el => message.includes(el))) {
            this.actionProvider.Pack();
           }
           else
           this.actionProvider.bydefault();
         

          }
        }
         
        export default UtiKeywards;