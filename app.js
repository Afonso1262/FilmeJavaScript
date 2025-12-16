const descricaoUm = document.getElementById('descriUm')
const descricaoDois = document.getElementById('descriDois')
const descricaoTres = document.getElementById('descriTres')
const descricaoQuatro = document.getElementById('descriQuatro')

const posterUm = document.querySelector('#filmeUm')
const posterDois = document.querySelector('#filmeDois')
const posterTres = document.querySelector('#filmeTres')
const posterQuatro = document.querySelector('#filmeQuatro')

let descricaoFilmeUm = false;
let descricaoFilmeDois = false;
let descricaoFilmeTres = false;
let descricaoFilmeQuatro = false;

function sinopseFilmeUm() {
    descricaoFilmeUm = !descricaoFilmeUm
    if (descricaoFilmeUm == true) {
        descricaoUm.style.display = 'inline'
    } else {
        descricaoUm.style.display = 'none'
    }
}

function sinopseFilmeDois() {
    descricaoFilmeDois = !descricaoFilmeDois
    if (descricaoFilmeDois == true) {
        descricaoDois.style.display = 'inline'
    } else {
        descricaoDois.style.display = 'none'
    }
}

function sinopseFilmeTres() {
    descricaoFilmeTres = !descricaoFilmeTres
    if (descricaoFilmeTres == true) {
        descricaoTres.style.display = 'inline'
    } else {
        descricaoTres.style.display = 'none'
    }
}

function sinopseFilmeQuatro() {
    descricaoFilmeQuatro = !descricaoFilmeQuatro
    if (descricaoFilmeQuatro == true) {
        descricaoQuatro.style.display = 'inline'
    } else {
        descricaoQuatro.style.display = 'none'
    }
}

posterUm.addEventListener('click', function () {
    sinopseFilmeUm()
})

posterDois.addEventListener('click', function () {
    sinopseFilmeDois()
})

posterTres.addEventListener('click', function () {
    sinopseFilmeTres()

})

posterQuatro.addEventListener('click', function () {
    sinopseFilmeQuatro()
})