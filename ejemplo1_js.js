//Excepciones
const preguntaDir = (pregunta) => {
    let response = prompt(pregunta);
    if (response.toLowerCase() == "izquierda") {
        return "I"
    }
    if (response.toLowerCase() == "derecha") {
        return "D"
    }
    throw new Error("No puedes ir ahi: " + response);
}
  
const mirar = () => {
    if ( preguntaDir("A que lado? ") == "I") {
        return "Oxxo";
    } else {
        return "Parque";
    }
}

// codigo que posiblemente genera una excepcion, por que se sale de los parametros que podemos controlar
// pero si podemos controllar que hacer cuando se presenta este evento con una excepcion
try {
    console.log("Hacia donde quieres ir? ", mirar());
} catch (error) {
    console.log("Hubo un error: " + error);
}