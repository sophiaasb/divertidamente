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

function ang(){
    silhueta.src='images/raiva.png'
}

function hap(){
    silhueta.src='images/alegria.png'
}

function sad(){
    silhueta.src='images/tristeza.png'
}

function ick(){
    silhueta.src='images/nojo.png'
}