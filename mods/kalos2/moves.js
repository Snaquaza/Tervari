exports.BattleMovedex = {
        "triattack": {
                num: 161,
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 20% chance to either burn, freeze, or paralyze it.",
                shortDesc: "20% chance to paralyze or burn or freeze target.",
                id: "triattack",
                isViable: true,
                name: "Tri Attack",
                pp: 10,
                priority: 0,
                secondary: {
                        chance: 20,
                        onHit: function(target, source) {
                                var result = this.random(3);
                                if (result===0) {
                                        target.trySetStatus('brn', source);
                                } else if (result===1) {
                                        target.trySetStatus('par', source);
                                } else {
                                        target.trySetStatus('frz', source);
                                }
                        }
                },
                target: "normal",
                type: "Normal"
        },
};
