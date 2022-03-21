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
            let nombre = data.name;
            let tipoPokemon = data.types[0].type.name;
            // Estadisticas
            let hp = data.stats[0].base_stat;
            let ataque = data.stats[1].base_stat;
            let defensa = data.stats[2].base_stat;
            let ataqueEspecial = data.stats[3].base_stat;
            let defensaEspecial = data.stats[4].base_stat;
            let velocidad = data.stats[5].base_stat;

            
            //let movimientos = data.;
            
            document.getElementById("pokemonImagen").src = pokeImg;
            document.getElementById("nombre").innerText = nombre;
            document.getElementById("tipoPokemon").innerText = tipoPokemon;
            // Estadisticas
            document.getElementById("hp").innerText = hp;
            document.getElementById("ataque").innerText = ataque;
            document.getElementById("defensa").innerText = defensa;
            document.getElementById("ataqueEspecial").innerText = ataqueEspecial;
            document.getElementById("defensaEspecial").innerText = defensaEspecial;
            document.getElementById("velocidad").innerText = velocidad;



        }
    })


}