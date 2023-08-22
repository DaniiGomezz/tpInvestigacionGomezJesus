const met1 = document.querySelector('#punto1');
const met2 = document.querySelector('#punto2');
const met3 = document.querySelector('#punto3');
const meterImg = document.querySelector("#caja3");


//PUNTO 1
const traerInformacion = () => {

    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response[0]);
            console.log(response[1]);
            console.log(response[2]);
    })
        .catch((error) => console.error(error))

}
met1.addEventListener('click', () => {
    traerInformacion();
})

//Punto 2
const solicitudPost = (obj) => {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => console.error(error))
}

met2.addEventListener('click', () => {
    const objeto = {
        title: 'Hola mundo',
        body: 'Soy el cuerpo ¡Hola!!!'
    }
    solicitudPost(objeto);
})

// Punto 3
// No me funciona ellink 

met3    .addEventListener('click', (e)=>{
    e.preventDefault();
    traerPokemon();
}
)

function traerPokemon (){
    fetch('https://pokeapi.co/api/v2/pokemon/charmander/')
    .then((response) => response.json())
    .then((data)=> {
        imagenPokemon(data);
    });
};

function imagenPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const texto = document.createElement('p');
    texto.textContent = "No me funciono link de la consigna, pero le muestro un charmander";

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(texto);

    meterImg.appendChild(div);
}