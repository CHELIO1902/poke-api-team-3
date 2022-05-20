const pokemonContainer = document.querySelector('#container');
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let offset = 1;
let limit = 9;

previous.addEventListener('click', () => {
    if (offset != 1) {
        offset -= 10;
        removeChildNodes(pokemonContainer);
        fetchPokemons(offset, limit);
    }
});

next.addEventListener('click', () => {
    offset += 10;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
});

function createPokemon(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card", "m-2", "col-md-2");
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    const number = document.createElement('p');
    number.textContent = pokemon.id

    const weight = document.createElement('p');
    weight.textContent = pokemon.weight


    const abilities = document.createElement('p');
    abilities.textContent = pokemon.abilities.name



    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    spriteContainer.appendChild(sprite);
    card.appendChild(spriteContainer);
    card.appendChild(weight);
    card.appendChild(number);
    card.appendChild(abilities);
    card.appendChild(name);

    pokemonContainer.appendChild(card)
        //console.log(pokemon);
}

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            createPokemon(data)
        });

}

/* function fetchPokemonName(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          createPokemon(data)
      });

} */

/* let busqueda = document.EventListener("submit")

function search (name) {
   busqueda = fetchPokemonName.filter(({ name }) =>
  name.toLocaleLowerCase().includes(event.target.pokemon.value.toLocaleLowerCase())
);
} */

function fetchPokemons(offset, limit) {
    for (let i = offset; i <= offset + limit; i++) {
        fetchPokemon(i);
    }

}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

fetchPokemons(offset, limit);



