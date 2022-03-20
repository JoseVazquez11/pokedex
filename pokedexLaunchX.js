const getPokemon = () => {
    const pokeName = document.getElementById("pokeName")
    let pokeInput = pokeName.value

    pokeInput = pokeInput.toLowerCase();
    if(pokeInput == "") {
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((response) => {
        if (response.status == 200) {
            return response.json();            
        } else {
            document.getElementById("pokemonImagen").src = "img/sad-pikachu.gif";                        
            return "error"
        }
    }).then((data) => {
        if( data != "error" ) {
            let pokeImg = data.sprites.other.dream_world.front_default;
            document.getElementById("pokemonImagen").src = pokeImg;
        }
    })


}