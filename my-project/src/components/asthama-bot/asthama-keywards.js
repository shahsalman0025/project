// in MessageParser.js
class UtiKeywards {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  

   
  parse(message) {
    message=message.toLowerCase();
    const key1 =["my name", "doctor", "physician", "associate", "pharmacist","hello","hey","PA"];
    const key2 =["born", "dob", "birth", "name", "date"];
    const advice =["advice"];
    const name =["name"];
    const key3 = ["old", "age"];
    const key4 = ["consent","history", "is that okay", "is that alright", "are you okay with", "take a history","some questions"];
    const key5 = ["alright", "how are you", "how do you", "feeling"];
    const key6 = ["syncope", "been happening", "here for","concerned", "short of breath", "breathe","going on", "can I", "you here", "you with"];
    const key7 = ["location", "located", "where is", "where is the pain", "central", "centrally", "middle", "side", "bilaterally", "unilaterally"];
    const key8 = ["crushing", "tight", "dull", "sharp", "heart burn/reflux", "describe the pain", "feel like", "indigestion", "throbbing", "pounding", "feel like"];
    const key9 = ["coughing", "phlegm", "sputum", "mucus", "cough", "dry cough", "bringing up"];
    const key10 = ["touch", "put pressure", "sore"];
    const key11 = ["onset", "started", "begun", "began", "start", "quickly", "sudden", "duration"];
    const key12 = ["radiate", "spreads", "spread", "move", "moves", "anywhere else", "shooting", "radiate", "moves"];
    const key13 = ["relieves", "improves", "alleviates", "eases", "better","improve"];
    const key14 = ["harsher", "worse", "exacerbates", "aggravates", "triggers","trigger", "progressive", "gradual"];
    const key15 = ["signs", "other symptoms", "vomiting", "nausea", "abdominal pain"];
    const key16 = [ "score", "out of 10", "how severe", "severity"];
    const key17 = ["previous", "prior", "preceding", "earlier", "before", "episodes", "similar", "aura","doing"];
    const key18 = ["throughout", "during","doing at the time"];
    const key19 = ["following", "after"];
    const key20 = ["underlying conditions", "known conditions","medical conditions", "past medical", "diagnosed", "medical history", "recently unwell", "cold", "strep", "obesity", "surgery", "surgeries", "diabetes", "admission", "hospital"];
    const key21 = ["immunised", "vaccines", "vaccinated"];
    const key22 = ["drugs", "recreational", "over the counter", "analgesia", "pain relief", "nsaid", "medications", "meds", "ointment", "cream", "medications"];
    const key23 = ["reactions", "sensitivities", "allergies"];
    const key24 = ["mum", "dad", "brother", "sister", "family history"];
    const key25 = ["job", "school", "education", "social", "work", "occupation"];
    const key26 = ["Smoke", "cigarettes", "smoked", "smoking"];
    const key27 = ["spirit", "wine", "beer", "alcohol", "do you drink"];
    const key28 = ["diet", "you eat", "fluid", "you eating", "drinking", "dry", "dehydration", "food", "appetite", "cholesterol"];
    const key29 = ["home", "house", "living", "flat", "live", "support", "dependents"];
    const key30 = ["routine", "daily life", "way of life", "walk", "exercise", "fitness", "workout", "lifestyle", "your life", "your lifestyle"];
    const key31 = ["coffee",  "caffeine" ];
    const key32 = ["breath", "short of", "breathing", "sob", "shortness", "wheezing", "wheeze"];
    const key33 = [ "feverish", "a fever", "shivering", "rigors", "sweating", "sweat"];
    const key34 = ["oedema", "swelling", "ankles", "inflammation", "calf", "calves", "swollen"];
    const key35 = ["woke", "sleeping", "pillow", "sat up", "nap", "sleep", "upright", "bed"];
    const key36 = ["outside chest", "palpitations", "racing", "feel your heart"];
    const key37 = ["tiredness", "lethargy", "muscle", "ache", "tired", "fatigue", "exhausted", "drowsiness", "drowsy"];
    const key38 = ["upset", "down", "sad", "unhappy", "miserable", "stress", "stressed","stressful"];
    const key39 = ["anxious", "anxiety"];
    const key40 = ["mood", "behaviour", "attitude"];
    const key41 = ["adjustments", "new", "recent changes","life changes"];
    const key42 = [ "wound", "hard", "accident", "trauma", "injury "];
    const key43 = ["hay", "asthma", "eczema"];
    const key44 = ["urinate", "wee", "poo", "faeces", "diarrhoea", "diarrhoeal", "incontinent", "incontinence", "bowel", "toilet", "constipated", "constipation", "water works", "toileting", "dysuria", "stool", "colour"];
    const key45 = ["lesions", "pimples", "spots", "hives", "rash", "rashes", "skin", "irritation"];
    const key46 = [ "smelling", "sight", "vision", "sounds", "sound", "listen", "visual", "smell", "smelling", "dizzy", "dizziness"];
    const key47 = ["menopause", "period", "pregnancy", "pregnant", ];
    const key48 = ["sexually active", "sex", "sexual" ];
    const key49 = ["itch", "itchiness", "tickle"];
    const key50 = ["tender", "tenderness"];
    const key51 = ["faint","blackout", "collapse","consciousness","consciousness"];
    const key52 = ["think", "thoughts", "your ideas","idea"];
    const key53 = ["worrying", "troubling you", "concerns","concerning"];
    const key54 = ["expect", "out of", "you want to", "expectations","wanting to"];
    const key55 = ["holidays", "journey", "flight", "long haul", "travel", "exotic", "countries"];
    const key56 = ["anything else"];
    const key57 = ["anal tone", "anal sensation","anus"];
    const key58 = ["bone pain"];
    const key59 = ["seizure"];
    const key60 = ["neck stiffness"];
    const key61 = ["blanching", "rash"];
    const key62 = ["photophobia", "light sensitivity"];
    const key63 = ["weight loss", "weight"];
    const key64 = ["papilledema", "ear ringing "];
    const key65 = ["scalp"];
    const key66 = ["swallow", "swallowing", "dysphagia"];
    const key67 = ["anaemia"];
    const key68 = ["steroid", "steroids"];
    const key69 = ["pink urine", "red urine", "haematuria", "blood in urine"];
    const key70 = ["bruising", "bruise "];
    const key71 = ["flank pain", "pain in side", "kidney pain", "side pain"];
    const key72 = ["haemoptysis", "coughing up blood", "blood"];
    const key73 = ["confusion", "confused", "personality change", "behavioural changes"];
    const key74 = ["clots", "clotting"];
    const key75 = ["covid", "covid-19", "sars", "corona"];
    const key76 = ["balance", "coordination", "ataxia", "walking"];
    const key77 = ["belching", "burping", "bloated", "passing wind", "trump"];
    const key78 = ["back pain", "pain in back", "joints"];
    const key79 = ["lump", "growth", "abscess", "cancer", "tumour", "bumps"];
    const key80 = ["pins and needles", "tingling", "numb"];
    const key81 = ["face drooping", "loss of face "];
    const key82 = ["arm"];
    const key83 = ["speech", "dysarthria"];
    const key84 = ["motor", "strength", "weak", "weakness"];
    const key85 = ["counselling", "council", "psychiatry", "shrink "];
    const key86 = ["thank you", "now finished", "complete the", "completed", "ended"];
    const key87 = ["How long", "going on for"];












    if (key1.some(el => message.includes(el))) {
      this.actionProvider.ftnKey1();
    }
    else
   if (key2.some(el => message.includes(el))) {
      this.actionProvider.ftnKey2();
    }
    else
   if (name.some(el => message.includes(el))) {
      this.actionProvider.handleName();
    }

    else
   if (key3.some(el => message.includes(el))) {
      this.actionProvider.ftnKey3();
    }

    else
    if (key4.some(el => message.includes(el))) {
       this.actionProvider.ftnKey4();
     }

     else
    if (key5.some(el => message.includes(el))) {
       this.actionProvider.ftnKey5();
     }

     else
    if (key6.some(el => message.includes(el))) {
       this.actionProvider.ftnKey6();
     }

     else
     if (key7.some(el => message.includes(el))) {
        this.actionProvider.ftnKey7();
      }

      else
     if (key8.some(el => message.includes(el))) {
        this.actionProvider.ftnKey8();
      }

      else
     if (key9.some(el => message.includes(el))) {
        this.actionProvider.ftnKey9();
      }

      else
     if (key10.some(el => message.includes(el))) {
        this.actionProvider.ftnKey10();
      }

      else
     if (key11.some(el => message.includes(el))) {
        this.actionProvider.ftnKey11();
      }

      else
     if (key12.some(el => message.includes(el))) {
        this.actionProvider.ftnKey12();
      }

      else
     if (key13.some(el => message.includes(el))) {
        this.actionProvider.ftnKey13();
      }

      else
     if (key14.some(el => message.includes(el))) {
        this.actionProvider.ftnKey14();
      }

      else
     if (key15.some(el => message.includes(el))) {
        this.actionProvider.ftnKey15();
      }

      else
     if (key16.some(el => message.includes(el))) {
        this.actionProvider.ftnKey16();
      }

      else
     if (key17.some(el => message.includes(el))) {
        this.actionProvider.ftnKey17();
      }

      else
     if (key18.some(el => message.includes(el))) {
        this.actionProvider.ftnKey18();
      }

      else
     if (key19.some(el => message.includes(el))) {
        this.actionProvider.ftnKey19();
      }

      else
     if (key20.some(el => message.includes(el))) {
        this.actionProvider.ftnKey20();
      }

    else
    if (key21.some(el => message.includes(el))) {
        this.actionProvider.ftnKey21();
      }

      else
      if (key22.some(el => message.includes(el))) {
        this.actionProvider.ftnKey22();
      }

      else
      if (key23.some(el => message.includes(el))) {
          this.actionProvider.ftnKey23();
        }

        else
        if (key24.some(el => message.includes(el))) {
          this.actionProvider.ftnKey24();
        }

        else
        if (key25.some(el => message.includes(el))) {
            this.actionProvider.ftnKey25();
          }

          else
          if (key26.some(el => message.includes(el))) {
            this.actionProvider.ftnKey26();
          }

          else
          if (key27.some(el => message.includes(el))) {
              this.actionProvider.ftnKey27();
            }

            else
            if (key28.some(el => message.includes(el))) {
              this.actionProvider.ftnKey28();
            }

            else
            if (key29.some(el => message.includes(el))) {
                this.actionProvider.ftnKey29();
              }

              else
              if (key30.some(el => message.includes(el))) {
                this.actionProvider.ftnKey30();
              }

              else
              if (key31.some(el => message.includes(el))) {
                  this.actionProvider.ftnKey31();
                }

        else
        if (key32.some(el => message.includes(el))) {
          this.actionProvider.ftnKey32();
        }

        else
        if (key33.some(el => message.includes(el))) {
            this.actionProvider.ftnKey33();
          }

          else
          if (key34.some(el => message.includes(el))) {
              this.actionProvider.ftnKey34();
            }

            else
            if (key35.some(el => message.includes(el))) {
              this.actionProvider.ftnKey35();
            }

            else
            if (key36.some(el => message.includes(el))) {
                this.actionProvider.ftnKey36();
              }

              else
              if (key37.some(el => message.includes(el))) {
                this.actionProvider.ftnKey37();
              }

              else
              if (key38.some(el => message.includes(el))) {
                  this.actionProvider.ftnKey38();
                }

                else
                if (key39.some(el => message.includes(el))) {
                  this.actionProvider.ftnKey39();
                }

else
if (key40.some(el => message.includes(el))) {
  this.actionProvider.ftnKey40();
}

else
if (key41.some(el => message.includes(el))) {
  this.actionProvider.ftnKey41();
}

else
if (key42.some(el => message.includes(el))) {
  this.actionProvider.ftnKey42();
}

else
if (key43.some(el => message.includes(el))) {
  this.actionProvider.ftnKey43();
}

else
if (key44.some(el => message.includes(el))) {
  this.actionProvider.ftnKey44();
}

else
if (key45.some(el => message.includes(el))) {
  this.actionProvider.ftnKey45();
}

else
if (key46.some(el => message.includes(el))) {
  this.actionProvider.ftnKey46();
}

else
if (key47.some(el => message.includes(el))) {
  this.actionProvider.ftnKey47();
}

else
if (key48.some(el => message.includes(el))) {
  this.actionProvider.ftnKey48();
}

else
if (key49.some(el => message.includes(el))) {
  this.actionProvider.ftnKey49();
}

else
if (key50.some(el => message.includes(el))) {
  this.actionProvider.ftnKey50();
}

else
if (key51.some(el => message.includes(el))) {
  this.actionProvider.ftnKey51();
}

else
if (key52.some(el => message.includes(el))) {
  this.actionProvider.ftnKey52();
}

else
if (key53.some(el => message.includes(el))) {
  this.actionProvider.ftnKey53();
}

else
if (key54.some(el => message.includes(el))) {
  this.actionProvider.ftnKey54();
}

else
if (key55.some(el => message.includes(el))) {
  this.actionProvider.ftnKey55();
}

else
if (key56.some(el => message.includes(el))) {
  this.actionProvider.ftnKey56();
}


else
if (key57.some(el => message.includes(el))) {
  this.actionProvider.ftnKey57();
}


else
if (key58.some(el => message.includes(el))) {
  this.actionProvider.ftnKey58();
}


else
if (key59.some(el => message.includes(el))) {
  this.actionProvider.ftnKey59();
}


else
if (key60.some(el => message.includes(el))) {
  this.actionProvider.ftnKey60();
}


else
if (key61.some(el => message.includes(el))) {
  this.actionProvider.ftnKey61();
}


else
if (key62.some(el => message.includes(el))) {
  this.actionProvider.ftnKey62();
}


else
if (key63.some(el => message.includes(el))) {
  this.actionProvider.ftnKey63();
}


else
if (key64.some(el => message.includes(el))) {
  this.actionProvider.ftnKey64();
}


else
if (key65.some(el => message.includes(el))) {
  this.actionProvider.ftnKey65();
}


else
if (key66.some(el => message.includes(el))) {
  this.actionProvider.ftnKey66();
}


else
if (key67.some(el => message.includes(el))) {
  this.actionProvider.ftnKey67();
}


else
if (key68.some(el => message.includes(el))) {
  this.actionProvider.ftnKey68();
}


else
if (key69.some(el => message.includes(el))) {
  this.actionProvider.ftnKey69();
}


else
if (key70.some(el => message.includes(el))) {
  this.actionProvider.ftnKey70();
}


else
if (key71.some(el => message.includes(el))) {
  this.actionProvider.ftnKey71();
}


else
if (key72.some(el => message.includes(el))) {
  this.actionProvider.ftnKey72();
}


else
if (key73.some(el => message.includes(el))) {
  this.actionProvider.ftnKey73();
}


else
if (key74.some(el => message.includes(el))) {
  this.actionProvider.ftnKey74();
}


else
if (key75.some(el => message.includes(el))) {
  this.actionProvider.ftnKey75();
}


else
if (key76.some(el => message.includes(el))) {
  this.actionProvider.ftnKey76();
}


else
if (key77.some(el => message.includes(el))) {
  this.actionProvider.ftnKey77();
}


else
if (key78.some(el => message.includes(el))) {
  this.actionProvider.ftnKey78();
}


else
if (key79.some(el => message.includes(el))) {
  this.actionProvider.ftnKey79();
}


else
if (key80.some(el => message.includes(el))) {
  this.actionProvider.ftnKey80();
}


else
if (key81.some(el => message.includes(el))) {
  this.actionProvider.ftnKey81();
}


else
if (key82.some(el => message.includes(el))) {
  this.actionProvider.ftnKey82();
}


else
if (key83.some(el => message.includes(el))) {
  this.actionProvider.ftnKey83();
}


else
if (key84.some(el => message.includes(el))) {
  this.actionProvider.ftnKey84();
}


else
if (key85.some(el => message.includes(el))) {
  this.actionProvider.ftnKey85();
}


else
if (key86.some(el => message.includes(el))) {
  this.actionProvider.ftnKey86();
}
else
if (advice.some(el => message.includes(el))) {
  this.actionProvider.handleAdvice();
}
else
if (key87.some(el => message.includes(el))) {
  this.actionProvider.ftnKey87();
}
else
    this.actionProvider.bydefault();





















    
  }
} 

export default UtiKeywards;