//DOM

const silhueta = document.querySelector('#sil')
const raiva = document.querySelector('#ang')
const alegria = document.querySelector('#hap')
const tristeza = document.querySelector('#sad')
const nojo = document.querySelector('#ick')

// evento

raiva.addEventListener('click', ang)
alegria.addEventListener('click', hap)
tristeza.addEventListener('click', sad)
nojo.addEventListener('click', ick)

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