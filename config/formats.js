// Note: This is the list of formats
// The rules that formats use are stored in data/formats.js

exports.Formats = [
////////////////Tervari Tiers
///////////////////////////////////////////////////////////////////////////////////////////
        {
                name: "Tervari Random Battle",
                section: "Tervari Random Tiers",

                mod: 'tervari',
                canUseRandomTeam: true,
                team: 'random',
                ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
        },
        {
                name: "Tervari Challenge Cup",
                section: "Tervari Random Tiers",

                mod: 'tervari',
                team: 'randomCC',
                canUseRandomTeam: true,
                ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod']
        },
        {
                name: "Tervari Challenge Cup 1-vs-1",
                section: "Tervari Random Tiers",

                mod: 'tervari',
                team: 'randomCC',
                canUseRandomTeam: true,
                ruleset: ['PotD', 'Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
                onBegin: function() {
                        this.debug('Cutting down to 1');
                        this.p1.pokemon = this.p1.pokemon.slice(0, 1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0, 1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                }
        },
        {
                name: "Tervari OU",
                section: "Tervari Tiers",

                mod: 'tervari',
                ruleset: ['Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber','Lucarionite']        
        },
        {
                name: "Tervari Ubers",
                section: "Tervari Tiers",

                mod: 'tervari',
                ruleset: ['Team Preview', 'Sleep Clause Mod', 'Standard Ubers'],
                banlist: []
        },
        {
                name: "Tervari MU",
                section: "Tervari Tiers",

                mod: 'tervari',
                ruleset: ['OU'],
                banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
        },
        {
                name: "Tervari UU",
                section: "Tervari Tiers",

                mod: 'tervari',
                ruleset: ['OU'],
                banlist: ['MU', 'BL2', 'Drought', 'Sand Stream']
        },        
        {
                name: "Tervari RU",
                section: "Tervari Tiers",

                mod: 'tervari',
                ruleset: ['UU'],
                banlist: ['UU', 'BL3', 'Shell Smash + Baton Pass']
        },
        {
                name: "Tervari NU",
                section: "Tervari Tiers",

                mod: 'tervari',
                ruleset: ['RU'],
                banlist: ['RU','BL4']
        },
        {
                name: "Tervari PU",
                section: "Tervari Tiers",

                mod: 'tervari',
                ruleset: ['NU'],
                banlist: ['NU','BL5']
        },
        {
                name: "Tervari LC",
                section: "Tervari Tiers",

                mod: 'tervari',
                maxLevel: 5,
                ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
                banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
        },

        {
                name: "Tervari Doubles",
                section: "Tervari Double Tiers",

                mod: 'tervari',
                gameType: 'doubles',
                ruleset: ['Pokemon', 'Team Preview', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'HP Percentage Mod'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
                        'Mewtwo',
                        'Lugia',
                        'Ho-Oh',
                        'Kyogre',
                        'Groudon',
                        'Rayquaza',
                        'Dialga',
                        'Palkia',
                        'Giratina', 'Giratina-Origin',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Reshiram',
                        'Zekrom',
                        'Kyurem-White'
                ]
        },
        {
                name: "Tervari Uber Doubles",
                section: "Tervari Double Tiers",

                mod: 'tervari',
                gameType: 'doubles',
                ruleset: ['Pokemon', 'Team Preview', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'HP Percentage Mod'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop']
        },
	{
                name: "Tervari Balanced Hackmons",
                section: "Tervari Other Metagames",
		mod: 'tervari',
                ruleset: ['Pokemon', 'OHKO Clause'],
                banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
        },
	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Pokebank OU (beta)",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Pokebank', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew']
	},
	{
		name: "Pokebank Ubers (beta)",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Pokebank', 'Team Preview'],
		banlist: ['']
	},
	{
		name: "Pokebank LC (beta)",
		section: "XY Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard Pokebank', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther']
	},
	{
		name: "CAP (beta)",
		section: "XY Singles",

		ruleset: ['CAP Pokemon', 'Standard Pokebank', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber']
	},
	{
		name: "Custom Game",
		section: "XY Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 1000,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},
        

	
	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Random Battle",
		section: "BW2 Singles",

		mod: 'gen5',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "[Gen 5] Unrated Random Battle",
		section: "BW2 Singles",

		mod: 'gen5',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Random Battle']
	},
	{
		name: "[Gen 5] OU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
	},
	{
		name: "[Gen 5] RU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU','BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		validateSet: function(set) {
			if (!set.level || set.level >= 50) set.forcedLevel = 50;
			return [];
		},
		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Species Clause', 'Item Clause', 'Team Preview GBU'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo', 'Mew', 'Lugia', 'Ho-Oh', 'Celebi', 'Kyogre', 'Groudon',
			'Rayquaza', 'Jirachi',  'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
			'Chatot', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Phione',
			'Manaphy',  'Darkrai', 'Shaymin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire',
			'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison',
			'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Kyurem-Black', 'Kyurem-White',
			'Keldeo', 'Keldeo-Resolute',  'Meloetta', 'Genesect'
		]
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 1000,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Pokebank Smogon Doubles (beta)",
		section: "XY Doubles",
		column: 2,

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Pokebank', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	{
		name: "Doubles Custom Game",
		section: "XY Doubles",
		column: 2,

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		ruleset: ['Team Preview']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Smogon Doubles",
		section: 'BW2 Doubles',
		column: 2,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	{
		name: "[Gen 5] Doubles VGC 2013",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Team Preview VGC', 'Species Clause', 'Item Clause'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo',
			'Mew',
			'Lugia',
			'Ho-Oh',
			'Celebi',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Jirachi',
			'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
			'Chatot',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Phione',
			'Manaphy',
			'Darkrai',
			'Shaymin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Victini',
			'Reshiram',
			'Zekrom',
			'Kyurem', 'Kyurem-Black', 'Kyurem-White',
			'Keldeo', 'Keldeo-Resolute',
			'Meloetta',
			'Genesect'
		]
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 1000,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},
	{
		name: "[Gen 5] Doubles Challenge Cup",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},

           // Doubles
        ///////////////////////////////////////////////////////////////////

        {
		name: "Doubles VGC 2013",
		section: 'Doubles',

		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Team Preview VGC', 'Species Clause', 'Item Clause'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo',
			'Mew',
			'Lugia',
			'Ho-Oh',
			'Celebi',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Jirachi',
			'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
			'Chatot',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Phione',
			'Manaphy',
			'Darkrai',
			'Shaymin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Victini',
			'Reshiram',
			'Zekrom',
			'Kyurem', 'Kyurem-Black', 'Kyurem-White',
			'Keldeo', 'Keldeo-Resolute',
			'Meloetta',
			'Genesect'
		]
	},
	{
		name: "Smogon Doubles",
		section: 'Doubles',

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Team Preview', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'HP Percentage Mod'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	{
		name: "Doubles Random Battle (dev)",
		section: 'Doubles',
		
		gameType: 'doubles',
		team: 'random',
		canUseRandomTeam: true,
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Doubles Challenge Cup",
		section: 'Doubles',

		gameType: 'doubles',
		team: 'randomCC',
		challengeShow: true,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Doubles Custom Game",
		section: 'Doubles',
		
		gameType: 'doubles',
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 1000,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	}, 

        // Other Metagames
        ///////////////////////////////////////////////////////////////////
        
       /* onev1: {
                name: "1v1",
                section: "OM of the Month",

                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                onBegin: function() {
                        this.p1.pokemon = this.p1.pokemon.slice(0,1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['HP Percentage Mod', 'Pokemon', 'OHKO Clause', 'Evasion Moves Clause', 'Moody Clause'],
                banlist: ['Unreleased', 'Illegal', 'Soul Dew',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Darkrai', 
                        'Deoxys', 'Deoxys-Attack',
                        'Dialga', 
                        'Giratina', 'Giratina-Origin', 
                        'Groudon', 
                        'Ho-Oh', 
                        'Kyogre', 
                        'Kyurem-White', 
                        'Lugia', 
                        'Mewtwo',
                        'Palkia', 
                        'Rayquaza', 
                        'Reshiram', 
                        'Shaymin-Sky', 
                        'Zekrom',
                        'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit'
                ]
        },
        onev1TP: {
                name: "1v1 Team Preview",
                section: "OM of the Month",

                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                onBegin: function() {
                        this.debug('Cutting down to 1');
                        this.p1.pokemon = this.p1.pokemon.slice(0, 1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0, 1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['HP Percentage Mod', 'Pokemon', 'OHKO Clause', 'Evasion Moves Clause', 'Moody Clause', 'Team Preview 1v1'],
                banlist: ['Unreleased', 'Illegal', 'Soul Dew',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Darkrai',
                        'Deoxys', 'Deoxys-Attack',
                        'Dialga',
                        'Giratina', 'Giratina-Origin',
                        'Groudon',
                        'Ho-Oh',
                        'Kyogre',
                        'Kyurem-White',
                        'Lugia',
                        'Mewtwo',
                        'Palkia',
                        'Rayquaza',
                        'Reshiram',
                        'Shaymin-Sky',
                        'Zekrom',
                        'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit'
                ]
        },
        twov2: {
                name: "2v2",
                section: "OM of the Month",

                effectType: 'Format',
                gameType: 'doubles',
                rated: true,
                challengeShow: true,
                searchShow: true,
                onBegin: function() {
                        this.debug('Cutting down to 2');
                        this.p1.pokemon = this.p1.pokemon.slice(0,2);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,2);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['HP Percentage Mod', 'Pokemon', 'OHKO Clause', 'Evasion Moves Clause', 'Moody Clause'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
                        'Mewtwo',
                        'Lugia',
                        'Ho-Oh',
                        'Kyogre',
                        'Groudon',
                        'Rayquaza',
                        'Dialga',
                        'Palkia',
                        'Giratina', 'Giratina-Origin',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Reshiram',
                        'Zekrom',
                        'Kyurem-White',
                        'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit'
                ]
        },
        twov2TP: {
                name: "2v2 Team Preview",
                section: "OM of the Month",

                effectType: 'Format',
                gameType: 'doubles',
                rated: true,
                challengeShow: true,
                searchShow: true,
                onBegin: function() {
                        this.debug('Cutting down to 2');
                        this.p1.pokemon = this.p1.pokemon.slice(0,2);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0,2);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                },
                ruleset: ['Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'HP Percentage Mod', 'Team Preview 2v2'],
                banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
                        'Mewtwo',
                        'Lugia',
                        'Ho-Oh',
                        'Kyogre',
                        'Groudon',
                        'Rayquaza',
                        'Dialga',
                        'Palkia',
                        'Giratina', 'Giratina-Origin',
                        'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
                        'Reshiram',
                        'Zekrom',
                        'Kyurem-White',
                        'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit'
                ]
        },
        seasonaljunejubilee: {
                name: "[Seasonal] June Jubilee",
                section: "OM of the Month",
                
                team: 'randomSeasonalJJ',
                canUseRandomTeam: true,
                effectType: 'Format',
                rated: true,
                challengeShow: true,
                searchShow: true,
                ruleset: ['HP Percentage Mod', 'Sleep Clause'],
                onBegin: function() {
                        this.add('-message', "Greetings, trainer! Delibird needs your help! It's lost in the US and it needs to find its way back to the arctic before summer starts! Help your Delibird while travelling north, but you must defeat the opponent before he reaches there first!");
                        this.setWeather('Sunny Day');
                        delete this.weatherData.duration;
                },
                onBeforeMove: function(pokemon, target, move) {
                        // Reshiram changes weather with its tail until you reach the arctic
                        if (pokemon.template.speciesid === 'reshiram' && pokemon.side.battle.turn < 15) {
                                var weatherMsg = '';
                                var dice = this.random(100);
                                if (dice < 25) {
                                        this.setWeather('Rain Dance');
                                        weatherMsg = 'a Drizzle';
                                } else if (dice < 50) {
                                        this.setWeather('Sunny Day');
                                        weatherMsg = 'a Sunny Day';
                                } else if (dice < 75) {
                                        this.setWeather('Hail');
                                        weatherMsg = 'Hail';
                                } else {
                                        this.setWeather('Sandstorm');
                                        weatherMsg = 'a Sandstorm';
                                }
                                this.add('-message', "Reshiram caused " + weatherMsg + " with its tail!");
                                delete this.weatherData.duration;
                        }
                },
                onBeforeMove: function(pokemon) {
                        if (!pokemon.side.battle.seasonal) pokemon.side.battle.seasonal = {'none':false, 'drizzle':false, 'hail':false};
                        if (pokemon.side.battle.turn >= 4 && pokemon.side.battle.seasonal.none === false) {
                                this.add('-message', "You are travelling north and you have arrived to North Dakota! There's a clear sky and the temperature is lower here.");
                                this.clearWeather();
                                pokemon.side.battle.seasonal.none = true;
                        }
                        if (pokemon.side.battle.turn >= 8 && pokemon.side.battle.seasonal.drizzle === false) {
                                this.add('-message', "You are travelling further north and you have arrived to Edmonton! It started raining a lot... and it's effing cold.");
                                this.setWeather('Rain Dance');
                                delete this.weatherData.duration;
                                pokemon.side.battle.seasonal.drizzle = true;
                        }
                        if (pokemon.side.battle.turn >= 12 && pokemon.side.battle.seasonal.hail === false) {
                                this.add('-message', "You have arrived to the arctic! Defeat the other trainer so Delibird can be free!");
                                this.setWeather('Hail');
                                delete this.weatherData.duration;
                                pokemon.side.battle.seasonal.hail = true;
                        }
                },
                onFaint: function(pokemon) {
                        if (pokemon.template.id === 'delibird') {
                                var name = pokemon.side.name;
                                var winner = '';
                                if (pokemon.side.id === 'p1') {
                                        winner = 'p2';
                                } else {
                                        winner = 'p1';
                                }
                                this.add('-message', "No!! You let Delibird down. He trusted you. You lost the battle, " + name + ". But you lost something else: your PokÈmon's trust.");
                                pokemon.battle.win(winner);
                        }
                }
        },
*/
        {
                name: "Challenge Cup",
                section: "Other Metagames",
		mod: 'gen5',
                team: 'randomCC',
                canUseRandomTeam: true,
                ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod']
        },
        {
                name: "Challenge Cup 1-vs-1",
                section: "Other Metagames",
		mod: 'gen5',
                team: 'randomCC',
                canUseRandomTeam: true,
                ruleset: ['PotD', 'Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
                onBegin: function() {
                        this.debug('Cutting down to 1');
                        this.p1.pokemon = this.p1.pokemon.slice(0, 1);
                        this.p1.pokemonLeft = this.p1.pokemon.length;
                        this.p2.pokemon = this.p2.pokemon.slice(0, 1);
                        this.p2.pokemonLeft = this.p2.pokemon.length;
                }
        },
        {
                name: "Hackmons",
                section: "Other Metagames",
		mod: 'gen5',
                ruleset: ['Pokemon'],
                banlist: []
        },
        {
                name: "Balanced Hackmons",
                section: "Other Metagames",
		mod: 'gen5',
                ruleset: ['Pokemon', 'OHKO Clause'],
                banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
        },
        {
                name: "BH XY",
                section: "Other Metagames",
                ruleset: ['Pokemon', 'OHKO Clause'],
                banlist: ['Pure Power','Huge Power','Wonder Guard','Shadow Tag', 'Arena Trap']
        },
        {
                name: "Haxmons",
                section: "Other Metagames",
		mod: 'gen5',
                ruleset: ['Hax Clause', 'Pokemon', 'Evasion Abilities Clause', 'Team Preview', 'Sleep Clause Mod', 'Freeze Clause', 'standard'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Kings Rock', 'Razor Fang']
        },
      // haxmonsdoubles: {
        //        name: "Double Haxmons",
          //      section: "Other Metagames",
	//	 gametype: 'doubles',
          //      effectType: 'Format',
            //    rated: true,
              //  challengeShow: true,
                //searchShow: true,
         //       isTeambuilderFormat: true,
           //     ruleset: ['Hax Clause', 'Pokemon', 'Evasion Abilities Clause', 'Team Preview','Freeze Clause'],
             //   banlist: ['Uber', 'Kings Rock', 'Razor Fang']
      //  },
	{
		name: "Uber Haxmons",
		section: "Other Metagames",
		
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: ['Kings Rock', 'Razor Claw']
	},
	{
               name: "Random Haxmons",
               section: "Other Metagames",

                team: 'random',
                canUseRandomTeam: true,
                ruleset: ['Hax Clause', 'PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
        {
                name: "No Haxmons",
                section: "Other Metagames",
                mod: 'nohax',
                ruleset: ['No Hax Clause', 'Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview', 'Standard Pokebank'],
                banlist: ['Drizzle ++ Swift Swim', 'Soul Dew', 'Ubers',]
        },
	{
               name: "Random No Haxmons",
               section: "Other Metagames",

                mod: 'nohax',
                team: 'random',
                canUseRandomTeam: true,
                ruleset: ['No Hax Clause', 'PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
        {
                name: "OU Monotype",
                section: "Other Metagames",

                ruleset: ['Pokemon', 'Standard', 'Same Type Clause', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },
        {
                name: "Glitchmons",
                section: "Other Metagames",

                ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
                banlist: ['Illegal', 'Unreleased'],
                mimicGlitch: true
        },
//        {
  //              name: "LC Ubers",
    //            section: "Other Metagames",

//                maxLevel: 5,
  //              ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
    //            banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Soul Dew']
      //  },
//        {
  //              name: "LC UU",
    //            section: "Other Metagames",

      //          maxLevel: 5,
        //        ruleset: ['LC'],
          //      banlist: ['Abra', 'Aipom', 'Archen', 'Axew', 'Bronzor', 'Chinchou', 'Clamperl', 'Cottonee', 'Cranidos', 'Croagunk', 'Diglett', 'Drifloon', 'Drilbur', 'Dwebble', 'Ferroseed', 'Foongus', 'Frillish', 'Gastly', 'Hippopotas', 'Houndour', 'Koffing', 'Larvesta', 'Lileep', 'Machop', 'Magnemite', 'Mienfoo', 'Misdreavus', 'Munchlax', 'Murkrow', 'Pawniard', 'Ponyta', 'Porygon', 'Riolu', 'Sandshrew', 'Scraggy', 'Shellder', 'Shroomish', 'Slowpoke', 'Snover', 'Staryu', 'Tentacool', 'Timburr', 'Tirtouga']
    //    },
      //  {
        //        name: "Dream World",
          //      section: "Other Metagames",
 
   //             ruleset: ['Pokemon', 'Standard DW', 'Team Preview'],
     //           banlist: []
  //      },
        {
                name: "Tier Shift",
                section: "Other Metagames",

                mod: 'tiershift',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },
        {
                name: "Reverse Tier Shift",
                section: "Other Metagames",

                mod: 'reversetshift',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },
        {
                name: "Super Shift",
                section: "Other Metagames",

                mod: 'snaqshift',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
        },
	{
        	name: "CAP V. 2",
        	section: "Other Metagames",
        	
       		mod: 'capv2',
        	ruleset: ['CAP Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
        	banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},	
        {
                name: "Stabmons",
                section: "Other Metagames",

                ruleset: ['Pokemon', 'Evasion Abilities Clause', 'Team Preview', 'Sleep Clause', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause'],
                banlist: ['Unreleased', 'Uber', 'Drizzle ++ Swift Swim', 'Soul Dew'],
        },
        {
                name: "Bluntmons",
                section: "Other Metagames",

                ruleset: ['Pokemon', 'Evasion Abilities Clause', 'Team Preview', 'Sleep Clause', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause'],
                banlist: ['Unreleased', 'Uber', 'Drizzle ++ Swift Swim', 'Soul Dew'],
                validateSet: function (set, format) {
                        var problems = [];
                        // Check that moves aren't repeated
                        var moves = [];
                        if (set.moves) {
                                var hasMove = {};
                                for (var i=0; i<set.moves.length; i++) {
                                        var move = this.getMove(set.moves[i]);
                                        var moveid = move.id;
                                        if (hasMove[moveid]) continue;
                                        hasMove[moveid] = true;
                                        moves.push(set.moves[i]);
                                }
                        }
                        set.moves = moves;

                        // Check learnset for illegalities INCLUDING same type moves that aren't status
                        var lsetData = {set:set, format:format};
                        var template = this.getTemplate(string(set.species));
                        for (var i=0; i<set.moves.length; i++) {
                                if (!set.moves[i]) continue;
                                var move = this.getMove(string(set.moves[i]));
                                // Check if the Pokémon has the move type
                                var check = true;
                                for (var t in template.types) {
                                        if (template.types[t] === move.type && move.category !== 'Status') {
                                        	problems.push(move.name+' is the same type as '+set.name+', and is not a Status move.');
                                        }
                                }
                        }

                        // Check EVs
                        var totalEV = 0;
                        for (var k in set.evs) {
                                if (typeof set.evs[k] !== 'number') {
                                        set.evs[k] = 0;
                                }
                                totalEV += set.evs[k];
                        }
                        if (totalEV > 510) {
                                problems.push(name+" has more than 510 total EVs.");
                        }

                        return problems;
                }
        },
    //    lessbasepower: {
    //            name: "Less Base Power",
    //            section: "Singles",
    //		  mod: 'lessbasepower',
    //            effectType: 'Format',
    //            challengeDefault: true,
    //            rated: true,
    //            challengeShow: true,
    //            searchShow: true,
    //            isTeambuilderFormat: true,
    //            ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
    //            banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
    //    },

 // divebattles: {
 //               name: "Dive Battle",
 //               section: "Other Metagames",

 //               effectType: 'Format',
 //               challengeDefault: true,
 //               rated: true,
 //               challengeShow: true,
 //               searchShow: true,
 //               isTeambuilderFormat: true,
 //               ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview','DiveBattle clause'],
 //               banlist: ['Uber', 'Drizzle', 'Soul Dew']
 //       },	
       {
                name: "Special Stat",
                section: "Other Metagames",
                
		mod: 'special',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },
        {
                name: "Splitmons",
                section: "Other Metagames",
                
                mod: 'split',
                ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
                banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
        },
 //     levelone: {
   //             name: "Level 1",
     //           section: "Other Metagames",
//
  //              effectType: 'Format',
    //            maxForcedLevel: 1,
      //          rated: true,
        //        challengeShow: true,
          //      searchShow: true,
            //    isTeambuilderFormat: true,
              //  ruleset: ['Pokemon', 'Standard', 'Team Preview'],
                //banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Drought']
 //       },
	{
		name: "Type-Swap",
		section: "Other Metagames",
		mod: 'typeswap',
		
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
 //     puremons: {
  //              name: "Pure Meta",
   //             section: "Other Metagames",
//
  //              mod: 'puremeta',
    //            effectType: 'Format',
      //          challengeDefault: true,
        //        rated: true,
          //      challengeShow: true,
            //    searchShow: true,
              //  isTeambuilderFormat: true,
                //ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
 //               banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']        
   //     },
	{
		name: "Statloop",
		section: "Other Metagames",

		mod: 'statloop',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
        // Kalos2.0
	///////////////////////////////////////////////////////////////////
        {
		name: "Kalos 2.0 OU",
		section: "Kalos 2.0",

                mod: 'kalos2', 
		ruleset: ['Kalos 2 Pokemon', 'Standard Pokebank', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Charizardite-X']
	},
        {
		name: "Kalos 2.0 Uber",
		section: "Kalos 2.0",

                mod: 'kalos2', 
		ruleset: ['Kalos 2 Pokemon', 'Standard Pokebank', 'Team Preview'],
		banlist: ['Charizardite-X']
	},
	{
                name: "Kalos 2.0 BH",
                section: "Kalos 2.0",

                mod: 'kalos2', 
                ruleset: ['OHKO Clause'],
                banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
       },
        {
		name: "Kalos 2.0 Doubles",
		section: "Kalos 2.0",

                mod: 'kalos2', 
                gameType: 'doubles',
		ruleset: ['Kalos 2 Pokemon', 'Standard Pokebank', 'Team Preview'],
		banlist: ['Charizardite-X']
	},	
        {
		name: "Kalos 2.0 LC",
		section: "Kalos 2.0",

                mod: 'kalos2', 
		ruleset: ['Pokemon', 'Standard Pokebank', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther']
	},
        // Past Generations
        ///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] Uber",
		mod: 'gen4',
		section: "Past Generations",
		effectType: 'Format',

		ruleset: ['Pokemon', 'Standard'],
		banlist: []
	},
	{
		name: "[Gen 4] OU",
		mod: 'gen4',
		section: "Past Generations",
		effectType: 'Format',

		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 3] OU",
		mod: 'gen3',
		section: "Past Generations",
		effectType: 'Format',

		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		mod: 'gen1',
		effectType: 'Format',
		name: "[Gen 1] OU",
		section: "Past Generations",

		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Wrap', 'Fire Spin', 'Clamp', 'Bind']
	},
	{
		mod: 'gen1',
		effectType: 'Format',
		name: "[Gen 1] UU",
		section: "Past Generations",

		ruleset: ['Pokemon', 'Sleep Clause', 'Species Clause', 'OHKO Clause', 'Evasion Clause', 'Freeze Clause'],
		banlist: ['Uber', 'OU', 'Illegal']
	},
	{
		mod: 'gen1',
		effectType: 'Format',
		name: "[Gen 1] LC",
		section: "Past Generations",
		maxLevel: 5,

		ruleset: ['Pokemon', 'Little Cup', 'Sleep Clause', 'Species Clause', 'OHKO Clause', 'Evasion Clause', 'Freeze Clause'],
		banlist: ['Uber', 'OU', 'UU', 'Illegal', 'Sonicboom', 'Dragon Rage']
	},
	{
		mod: 'gen1',
		effectType: 'Format',
		name: "[Gen 1] Challenge Cup",
		section: "Past Generations",
		team: 'randomCC',

		ruleset: ['Pokemon']
	}

];	
