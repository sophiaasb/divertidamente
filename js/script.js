//DOM

const silhueta = document.querySelector('#s')
const raiva = document.querySelector('#r')
const alegria = document.querySelector('#a')
const tristeza = document.querySelector('#t')
const nojo = document.querySelector('#n')

// evento

raiva.addEventListener('click', r)
alegria.addEventListener('click', a)
tristeza.addEventListener('click', t)
nojo.addEventListener('click', n)

// funções

function r(){
    silhueta.src='images/raiva.png'
}

function a(){
    silhueta.src='images/alegria.png'
}

function t(){
    silhueta.src='images/tristeza.png'
}

function n(){
    silhueta.src='images/nojo.png'
}