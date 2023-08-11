const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);
// Pokemones divisibles por 3//
const divPor3 = pokemon.filter(poke => poke.id % 3 === 0);
console.log(divPor3);

// Pokemones de fuego//
const fireType = pokemon.filter(poke => poke.types.includes("fire"));
console.log(fireType);

//Pokemones Duales//
const dualPokemons = pokemon.filter(poke => poke.types.length > 1);
console.log(dualPokemons);

// Matriz Pokemones //
const pokemonNames = pokemon.map(poke => poke.name);
console.log(pokemonNames);

//Pokemones id + 99//
const pokemonIdPlus99 = pokemon
    .filter(poke => poke.id > 99)
    .map(poke => poke.name);
console.log(pokemonIdPlus99);

//Pokemon tipo Veneno//
const poisonTypePokemonNames = pokemon
    .filter(poke => poke.types.length === 1 && poke.types.includes("poison"))
    .map(poke => poke.name);
console.log(poisonTypePokemonNames);

// Pokemon cuyo segundo tipo es "volador"//
const firstTypeFlyingPokemons = pokemon
    .filter(poke => poke.types.length === 2 && poke.types[1] === "flying")
    .map(poke => poke.types[0]);
console.log(firstTypeFlyingPokemons);

// Pokémon que son de tipo "normal"//
const normalTypeCount = pokemon.filter(poke => poke.types.includes("normal")).length;
console.log(`Cantidad de Pokémon de tipo "normal": ${normalTypeCount}`);