'use strict';

const P = new Pokedex.Pokedex();

var vue = new Vue({
  el: '#vue',
  data: {
    input: '',
    image: 'assets/images/photo.svg',
    name: 'none',
    id: 0,
    type: ['none', ''],
    hp: 0,
    attack: 0,
    defense: 0,
    special_attack: 0,
    special_defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    moves: ['none']
  },
  methods: {
    pokemonName() {
      P.getPokemonByName(this.input.toLowerCase())
        .then(response => {
          this.image = response.sprites.front_default;
          this.name = response.name;
          this.id = response.id;
          this.type[0] = response.types[0].type.name;
          try {
            this.type[1] = '/' + response.types[1].type.name;
          } catch {
            this.type[1] = '';
          }
          this.hp = response.stats[0].base_stat;
          this.attack = response.stats[1].base_stat;
          this.defense = response.stats[2].base_stat;
          this.special_attack = response.stats[3].base_stat; //:key="item.message"
          this.special_defense = response.stats[4].base_stat;
          this.speed = response.stats[5].base_stat;
          this.height = response.height;
          this.weight = response.weight;
          this.moves = [];
          for (let i = 0; i in response.moves; i++) {
            P.getMoveByName(response.moves[i].move.name).then(response => {
              this.moves[i] = `${response.name}: power: ${response.power}, accuracy: ${response.accuracy}, damage class: ${response.damage_class.name}, type: ${response.type.name}, pp: ${response.pp}\n`;
            });
          }

          if (this.image == null) {
            this.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.id}.png`
          }
        }).catch(err => {
          alert(err);
        });
    }
  }
});
