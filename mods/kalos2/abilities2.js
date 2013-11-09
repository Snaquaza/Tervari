exports.BattleAbilities = {
        "protean": {
                desc: "Changes user's type to match the user's current move before it attacks.",
                shortDesc: "Changes user's type to match its move.",
                onBeforeMove: function(pokemon, target, move) {
                        if (!move) return;
                        var moveType = (move.id === 'hiddenpower' ? pokemon.hpType : move.type);
                        if (pokemon.types.join() !== moveType) {
                                this.add('-start', pokemon, moveType, 'typechange', '[from] Protean');
                                pokemon.types = [moveType];
                        }
                },
                id: "protean",
                name: "Protean",
                rating: 1.5,
                num: -6,
                gen: 6
        },
};
