exports.BattleScripts = {
    init: function() {
        for (var i in this.data.Pokedex) {
            if (this.data.Pokedex[i].types[0] === 'Water') {
                this.modData('Pokedex', i).types[0] = 'Grass';
            } 

else if (this.data.Pokedex[i].types[0] === 'Fire') {
                this.modData('Pokedex', i).types[0] = 'Water';

            }

else if (this.data.Pokedex[i].types[0] === 'Grass') {
                this.modData('Pokedex', i).types[0] = 'Fire';

            }

else if (this.data.Pokedex[i].types[0] === 'Normal') {
                this.modData('Pokedex', i).types[0] = 'Ghost';
}

else if (this.data.Pokedex[i].types[0] === 'Poison') {
                this.modData('Pokedex', i).types[0] = 'Steel';
}

else if (this.data.Pokedex[i].types[0] === 'Psychic') {
                this.modData('Pokedex', i).types[0] = 'Fighting';
}

else if (this.data.Pokedex[i].types[0] === 'Bug') {
                this.modData('Pokedex', i).types[0] = 'Dragon';
}

else if (this.data.Pokedex[i].types[0] === 'Ground') {
                this.modData('Pokedex', i).types[0] = 'Flying';
}

else if (this.data.Pokedex[i].types[0] === 'Electric') {
                this.modData('Pokedex', i).types[0] = 'Dark';
}

else if (this.data.Pokedex[i].types[0] === 'Ice') {
                this.modData('Pokedex', i).types[0] = 'Rock';

            }

if (this.data.Pokedex[i].types[1] === 'Water') {
                this.modData('Pokedex', i).types[1] = 'Grass';

            }

else if (this.data.Pokedex[i].types[1] === 'Fire') {
                this.modData('Pokedex', i).types[1] = 'Water';

            }
        
else if (this.data.Pokedex[i].types[1] === 'Grass') {
                this.modData('Pokedex', i).types[1] = 'Fire';

            }

else if (this.data.Pokedex[i].types[1] === 'Normal') {
                this.modData('Pokedex', i).types[1] = 'Ghost';
}

else if (this.data.Pokedex[i].types[1] === 'Poison') {
                this.modData('Pokedex', i).types[1] = 'Steel';
}

else if (this.data.Pokedex[i].types[1] === 'Psychic') {
                this.modData('Pokedex', i).types[1] = 'Fighting';
}

else if (this.data.Pokedex[i].types[1] === 'Bug') {
                this.modData('Pokedex', i).types[1] = 'Dragon';
}

else if (this.data.Pokedex[i].types[1] === 'Ground') {
                this.modData('Pokedex', i).types[1] = 'Flying';
}

else if (this.data.Pokedex[i].types[1] === 'Electric') {
                this.modData('Pokedex', i).types[1] = 'Dark';
}

else if (this.data.Pokedex[i].types[1] === 'Ice') {
                this.modData('Pokedex', i).types[1] = 'Rock';

            }
        }
    }
};

