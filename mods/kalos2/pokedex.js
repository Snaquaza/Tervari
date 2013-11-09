exports.BattlePokedex = {
        latias: {
                inherit: true,
                types: ["Dragon","Fairy"]
                baseStats: {hp:90,atk:65,def:100,spa:105,spd:140,spe:110}
       },
       flygon: {
                inherit: true,
                types: ["Bug","Ground"]
                abilites: {0:"Levtitate",1:"Compoundeyes",H:"Tinted Lens"}
                baseStats: {hp:80,atk:110,def:100,spa:80,spd:95,spe:105}
       },
       mew: {
                inherit: true,
                types: ["Psychic","Fairy"]
                abilites: {0:"Regenerator",H:"Synchronoise"}
       },
       celebi: {
                inherit: true,
                types: ["Grass","Fairy"]
       },
       jirachi: {
                inherit: true,
                types: ["Steel","Fairy"]
                abilites: {0:"Synchronoise",H:"Illuminate"}
       },
       manaphy: {
                inherit: true,
                types: ["Water","Fairy"]
                abilites: {0:"Hydraition",H:"Swift Swim"}
       },
       shaymin: {
                inherit: true,
                types: ["Grass","Normal"]
                abilites: {0:"Unaware"}
       },
       meloetta: {
                inherit: true,
                abilites: {0:"Stance Change"}
       },
       victini: {
                inherit: true,
                types: ["Fire","Fairy"]
                abilites: {0:"Victory Star",H:"Pixilate"}
       },
       abomasnowmega: {
                inherit: true,
                abilites: {0:"Analytic"}
                baseStats: {hp:100,atk:140,def:90,spa:165,spd:95,spe:30}
       },
       garchompmega: {
                inherit: true,
                types: ["Dragon","Fighting"]
                abilites: {0:"Tough Claws"}
                baseStats: {hp:110,atk:175,def:110,spa:110,spd:100,spe:98}
       },
       heracrossmega: {
                inherit: true,
                abilites: {0:"Scrappy"}
                baseStats: {hp:80,atk:165,def:90,spa:85,spd:90,spe:100}
       },
       gyaradosmega: {
                inherit: true,
                abilites: {0:"Moxie"}
                baseStats: {hp:100,atk:165,def:90,spa:85,spd:110,spe:100}
       },
       flygon: {
                inherit: true,
                types: ["Bug","Ground"]
                abilites: {0:"Levtitate",1:"Compoundeyes",H:"Tinted Lens"}
                baseStats: {hp:80,atk:110,def:100,spa:80,spd:95,spe:105}
       },
       xerneas:{num:716,species:"Xerneas",types:["Fairy"],gender:"N",baseStats:{hp:126,atk:131,def:95,spa:131,spd:98,spe:99},abilities:{0:"Fairy Aura"},heightm:3,weightkg:215,color:"",eggGroups:["No Eggs"],otherFormes:["xerneasmega"]},
       yveltal:{num:717,species:"Yveltal",types:["Dark","Flying"],gender:"N",baseStats:{hp:126,atk:131,def:95,spa:131,spd:98,spe:99},abilities:{0:"Dark Aura"},heightm:5.8,weightkg:203,color:"",eggGroups:["No Eggs"],otherFormes:["yveltalmega"]},
       xerneasmega:{num:716,species:"Xerneas-Mega",baseSpecies:"Xerneas",forme:"Mega",formeLetter:"M",types:["Fairy","Grass"],gender:"N",baseStats:{hp:165,atk:60,def:135,spa:115,spd:165,spe:105},abilities:{0:"Natural Cure"},heightm:3,weightkg:215,color:"",eggGroups:["No Eggs"]},
       yveltalmega:{num:717,species:"Yveltal-Mega",baseSpecies:"Yveltal",forme:"Mega",formeLetter:"M",types:["Dark","Flying"],gender:"N",baseStats:{hp:105,atk:185,def:90,spa:175,spd:85,spe:115},abilities:{0:"Gale Wings"},heightm:5.8,weightkg:203,color:"",eggGroups:["No Eggs"]},
};
