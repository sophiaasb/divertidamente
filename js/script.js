//DOM

const silhueta = document.querySelector('#sil')
const raiva = document.querySelector('#ang')
const felicidade = document.querySelector('#hap')
const tristeza = document.querySelector('#sad')
const nojo = document.querySelector('#ick')

// evento

raiva.addEventListener('click', ang)
felicidade.addEventListener('click', hap)
tristeza.addEventListener('click', sad)
nojo.addEventListener('click', nojo)

// funções

function ang(){
    silhueta.src='images/raiva.png'
}

function hap(){
    silhueta.src='images/felicidade.png'
}

function sad(){
    silhueta.src='images/tristeza.png'
}

function ick(){
    silhueta.src='images/nojo.png'
}