exports.BattleItems = {
        "abomasite": {
                id: "abomasite",
                name: "Abomasite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Abomasnow') { else if (user.baseTemplate.species === 'Abomasnow-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }
                megaStone: "Abomasnow-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Abomasnow."
        },
        "absolite": {
                id: "absolite",
                name: "Absolite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Absol') {else if (user.baseTemplate.species === 'Absol-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },               
                megaStone: "Absol-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Absol."
        },
        "aerodactylite": {
                id: "aerodactylite",
                name: "Aerodactylite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Aerodactyl') {else if (user.baseTemplate.species === 'Aerodactyl-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }             
                megaStone: "Aerodactyl-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Aerodactyl."
        },
        "aggronite": {
                id: "aggronite",
                name: "Aggronite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Aggron') {else if (user.baseTemplate.species === 'Aggron-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Aggron-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Aggron."
        },
        "alakazite": {
                id: "alakazite",
                name: "Alakazite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Alakazam') {else if (user.baseTemplate.species === 'Aalakazam-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Alakazam-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Alakazam."
        },
        "ampharosite": {
                id: "ampharosite",
                name: "Ampharosite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Ampharos') {else if (user.baseTemplate.species === 'Ampharos-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Ampharos-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Ampharos."
        },
        "banettite": {
                id: "banettite",
                name: "Banettite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Banette') {else if (user.baseTemplate.species === 'Banette-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }
                megaStone: "Banette-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Banette."
        },
        "blastoisinite": {
                id: "blastoisinite",
                name: "Blastoisinite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Blastoise') {else if (user.baseTemplate.species === 'Blastoise-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Blastoise-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Blastoise."
        },
        "blazikenite": {
                id: "blazikenite",
                name: "Blazikenite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Blaziken') {else if (user.baseTemplate.species === 'Blaziken-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Blaziken-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Blaziken."
        },
        "charizarditex": {
                id: "charizarditex",
                name: "Charizardite X",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Charizard') {else if (user.baseTemplate.species === 'Charizard-Mega-X') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Charizard-Mega-X",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Charizard into Mega Charizard X."
        },
        "charizarditey": {
                id: "charizarditey",
                name: "Charizardite Y",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Charizard') {else if (user.baseTemplate.species === 'Charizard-Mega-Y') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Charizard-Mega-Y",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Charizard into Mega Charizard Y."
        },
        "garchompite": {
                id: "garchompite",
                name: "Garchompite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Garchomp') {else if (user.baseTemplate.species === 'Garchomp-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Garchomp-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Garchomp."
        },
        "gardevoirite": {
                id: "gardevoirite",
                name: "Gardevoirite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Gardevoir') {else if (user.baseTemplate.species === 'Gardevoir-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Gardevoir-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Gardevoir."
        },
        "gengarite": {
                id: "gengarite",
                name: "Gengarite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Gengar') {else if (user.baseTemplate.species === 'Gengar-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Gengar-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Gengar."
        },
        "gyaradosite": {
                id: "gyaradosite",
                name: "Gyaradosite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Gyarados') {else if (user.baseTemplate.species === 'Gyarados-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Gyarados-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Gyarados."
        },
        "heracronite": {
                id: "heracronite",
                name: "Heracronite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Heracross') {else if (user.baseTemplate.species === 'Heracross-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Heracross-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Heracross."
        },
        "houndoominite": {
                id: "houndoominite",
                name: "Houndoominite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Houndoom') {else if (user.baseTemplate.species === 'Houndoom-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Houndoom-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Houndoom."
        },
        "kangaskhanite": {
                id: "kangaskhanite",
                name: "Kangaskhanite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Kangaskhan') {else if (user.baseTemplate.species === 'Kangaskhan-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Kangaskhan-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Kangaskhan."
        },
        "lucarionite": {
                id: "lucarionite",
                name: "Lucarionite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Lucario') {else if (user.baseTemplate.species === 'Lucario-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Lucario-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Lucario."
        },
        "manectite": {
                id: "manectite",
                name: "Manectite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Manectric') {else if (user.baseTemplate.species === 'Manectric-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Manectric-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Manectric."
        },
        "mawilite": {
                id: "mawilite",
                name: "Mawilite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Mawile') {else if (user.baseTemplate.species === 'Mawile-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Mawile-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Mawile."
        },
        "medichamite": {
                id: "medichamite",
                name: "Medichamite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Medicham') {else if (user.baseTemplate.species === 'Medicham-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Medicham-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Medicham."
        },
        "mewtwonitex": {
                id: "mewtwonitex",
                name: "Mewtwonite X",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Mewtwo') {else if (user.baseTemplate.species === 'Mewtwo-Mega-X') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Mewtwo-Mega-X",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Mewtwo into Mega Mewtwo X."
        },
        "mewtwonitey": {
                id: "mewtwonitey",
                name: "Mewtwonite Y",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Mewtwo') {else if (user.baseTemplate.species === 'Mewtwo-Mega-Y') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Mewtwo-Mega-Y",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Mewtwo into Mega Mewtwo Y."
        },
        "pinsirite": {
                id: "pinsirite",
                name: "Pinsirite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Pinsir') {else if (user.baseTemplate.species === 'Pinsir-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Pinsir-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Pinsir."
        },
        "scizorite": {
                id: "scizorite",
                name: "Scizorite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Scizor') {else if (user.baseTemplate.species === 'Scizor-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }              
                megaStone: "Scizor-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Scizor."
        },
        "tyranitarite": {
                id: "tyranitarite",
                name: "Tyranitarite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Tyranitar') {else if (user.baseTemplate.species === 'Tyranitar-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }           
                megaStone: "Tyranitar-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Tyranitar."
        },
        "venusaurite": {
                id: "venusaurite",
                name: "Venusaurite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Venusaur') {else if (user.baseTemplate.species === 'Venusaur-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Venusaur-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Venusaur."
        },
        "xernite": {
                id: "xernite",
                name: "Xernite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Xerneas') {else if (user.baseTemplate.species === 'Xerneas-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Xerneas-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Xerneas."
        },
        "yvelite": {
                id: "yvelite",
                name: "Yvelite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Yveltal') {else if (user.baseTemplate.species === 'Yveltal-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Yveltal-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Yveltal."
        },
        "latiteblue": {
                id: "latiteblue",
                name: "Latite-Blue",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Latios') {else if (user.baseTemplate.species === 'Latios-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }                
                megaStone: "Latios-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Yveltal."
        },
        "latitered": {
                id: "latitered",
                name: "Latite-Red",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Latias') {else if (user.baseTemplate.species === 'Latias-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                }               
                megaStone: "Latias-Mega",
                num: -6,
                gen: 6,
                desc: "Mega-evolves Yveltal."
        },
        "godstone": {
                id: "godstone",
                name: "God Stone",
                spritenum: 0,
                onBasePowerPriority: 6,
                onBasePower: function(basePower, user, target, move) {
                        if (user.baseTemplate.num === 493 && (move.type === 'Normal' || move.type === 'Fairy')) {
                                return this.chainModify(1.2);
                        }
                },
                onTakeItem: function(item, pokemon, source) {
                        if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493) {
                                return false;
                        }
                },
                num: -199,
                gen: 6,
                desc: "God Stone."
        }        
};     
        
        
        
