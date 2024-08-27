//DOM

const silhueta = document.querySelector('#silhueta')
const raiva = document.querySelector('#raiva')
const alegria = document.querySelector('#alegria')
const tristeza = document.querySelector('#tristeza')
const nojo = document.querySelector('#nojo')

// evento

raiva.addEventListener('click', raiva)
alegria.addEventListener('click', alegria)
tristeza.addEventListener('click', tristeza)
nojo.addEventListener('click', nojo)

// funções

function raiva(){
    silhueta.src='images/raiva.png'
}

function alegria(){
    silhueta.src='images/alegria.png'
}

function tristeza(){
    silhueta.src='images/tristeza.png'
}

function nojo(){
    silhueta.src='images/nojo.png'
}