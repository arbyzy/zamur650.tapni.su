const P = new Pokedex.Pokedex();

var vue = new Vue({
  el: '#vue',
  data: {
    input: '',
    image: 'assets/images/photo.svg',
    name: 'Name',
    id: 0,
    type: ['none', 'none'],
    hp: 0,
    attack: 0,
    defense: 0,
    special_attack: 0,
    special_defense: 0,
    speed: 0,
    height: 0,
    weight: 0    
  },
  methods: {
    pokemonName() {
      P.getPokemonByName(this.input.toLowerCase())
        .then(response => {
          this.image = response.sprites.front_default;
          this.name = response.name;
          this.id = response.id;
          this.type[0] = response.types[0].type.name
          try {
            this.type[1] = response.types[1].type.name
          } catch{
            this.type[1] = 'none'
          }
          this.hp = response.stats[0].base_stat;
          this.attack = response.stats[1].base_stat;
          this.defense = response.stats[2].base_stat;
          this.special_attack = response.stats[3].base_stat;
          this.special_defense = response.stats[4].base_stat;
          this.speed = response.stats[5].base_stat;
          this.height = response.height;
          this.weight = response.weight;    
          if (this.image === null) {
            this.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.id}.png`
          }  
        }).catch( err => {
          alert('Error!');
        });
    }
  }
});