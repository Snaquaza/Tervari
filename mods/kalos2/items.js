exports.BattleItems = {
        "abomasite": {
                id: "abomasite",
                name: "Abomasite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Abomasnow') {
                        if (user.baseTemplate.species === 'Abomasnow-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },
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
                megaStone: "Absol-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Absol."
        },
        "aerodactylite": {
                id: "aerodactylite",
                name: "Aerodactylite",
                spritenum: 0,
                megaStone: "Aerodactyl-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Aerodactyl."
        },
        "aggronite": {
                id: "aggronite",
                name: "Aggronite",
                spritenum: 0,
                megaStone: "Aggron-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Aggron."
        },
        "alakazite": {
                id: "alakazite",
                name: "Alakazite",
                spritenum: 0,
                megaStone: "Alakazam-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Alakazam."
        },
        "ampharosite": {
                id: "ampharosite",
                name: "Ampharosite",
                spritenum: 0,
                megaStone: "Ampharos-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Ampharos."
        },
        "banettite": {
                id: "banettite",
                name: "Banettite",
                spritenum: 0,
                megaStone: "Banette-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Banette."
        },
        "blastoisinite": {
                id: "blastoisinite",
                name: "Blastoisinite",
                spritenum: 0,
                megaStone: "Blastoise-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Blastoise."
        },
        "blazikenite": {
                id: "blazikenite",
                name: "Blazikenite",
                spritenum: 0,
                megaStone: "Blaziken-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Blaziken."
        },
        "charizarditex": {
                id: "charizarditex",
                name: "Charizardite X",
                spritenum: 0,
                megaStone: "Charizard-Mega-X",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Charizard into Mega Charizard X."
        },
        "charizarditey": {
                id: "charizarditey",
                name: "Charizardite Y",
                spritenum: 0,
                megaStone: "Charizard-Mega-Y",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Charizard into Mega Charizard Y."
        },
        "garchompite": {
                id: "garchompite",
                name: "Garchompite",
                spritenum: 0,
                megaStone: "Garchomp-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Garchomp."
        },
        "gardevoirite": {
                id: "gardevoirite",
                name: "Gardevoirite",
                spritenum: 0,
                megaStone: "Gardevoir-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Gardevoir."
        },
        "gengarite": {
                id: "gengarite",
                name: "Gengarite",
                spritenum: 0,
                megaStone: "Gengar-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Gengar."
        },
        "gyaradosite": {
                id: "gyaradosite",
                name: "Gyaradosite",
                spritenum: 0,
                megaStone: "Gyarados-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Gyarados."
        },
        "heracronite": {
                id: "heracronite",
                name: "Heracronite",
                spritenum: 0,
                megaStone: "Heracross-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Heracross."
        },
        "houndoominite": {
                id: "houndoominite",
                name: "Houndoominite",
                spritenum: 0,
                megaStone: "Houndoom-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Houndoom."
        },
        "kangaskhanite": {
                id: "kangaskhanite",
                name: "Kangaskhanite",
                spritenum: 0,
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
                megaStone: "Lucario-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Lucario."
        },
        "manectite": {
                id: "manectite",
                name: "Manectite",
                spritenum: 0,
                megaStone: "Manectric-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Manectric."
        },
        "mawilite": {
                id: "mawilite",
                name: "Mawilite",
                spritenum: 0,
                megaStone: "Mawile-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Mawile."
        },
        "medichamite": {
                id: "medichamite",
                name: "Medichamite",
                spritenum: 0,
                megaStone: "Medicham-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Medicham."
        },
        "mewtwonitex": {
                id: "mewtwonitex",
                name: "Mewtwonite X",
                spritenum: 0,
                megaStone: "Mewtwo-Mega-X",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Mewtwo into Mega Mewtwo X."
        },
        "mewtwonitey": {
                id: "mewtwonitey",
                name: "Mewtwonite Y",
                spritenum: 0,
                megaStone: "Mewtwo-Mega-Y",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Mewtwo into Mega Mewtwo Y."
        },
        "pinsirite": {
                id: "pinsirite",
                name: "Pinsirite",
                spritenum: 0,
                megaStone: "Pinsir-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Pinsir."
        },
        "scizorite": {
                id: "scizorite",
                name: "Scizorite",
                spritenum: 0,
                megaStone: "Scizor-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Scizor."
        },
        "tyranitarite": {
                id: "tyranitarite",
                name: "Tyranitarite",
                spritenum: 0,
                megaStone: "Tyranitar-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Tyranitar."
        },
        "venusaurite": {
                id: "venusaurite",
                name: "Venusaurite",
                spritenum: 0,
                megaStone: "Venusaur-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Venusaur."
        }
};     
        
        
        
