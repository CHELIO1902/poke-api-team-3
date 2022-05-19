const pokemonContainer = document.querySelector('.pokemon-container');
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

function createPokemon(pokemon) {
    const card = document.createElement("div");
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(name);

    pokemonContainer.appendChild(card)
    console.log(pokemon);
}

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            createPokemon(data)
        });

}

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }

}



fetchPokemons(20);