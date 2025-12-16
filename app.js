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






// const popUm = document.getElementById('popupUm')
// const popDois = document.getElementById('popupDois')
// const popTres = document.getElementById('popupTres')
// const popQuatro = document.getElementById('popupQuatro')

// const sobreporUm = document.querySelector('#popupUm')
// const sobreporDois = document.querySelector('#popupDois')
// const sobreporTres = document.querySelector('#popupTres')
// const sobreporQuatro = document.querySelector('#popupQuatro')

// let moreInfoUm = false;
// let moreInfoDois = false;
// let moreInfoTres = false;
// let moreInfoQuatro = false;

// function popupButaoUm() {
//     moreInfoUm = !moreInfoUm
//     if (moreInfoUm == true) {
//         popUm.style.display = 'inline'
//     } else {
//         popUm.style.display = 'none'
//     }
// }

// function popupButaoDois() {
//     moreInfoDois = !moreInfoDois
//     if (moreInfoDois == true) {
//         popDois.style.display = 'inline'
//     } else {
//         popDois.style.display = 'none'
//     }
// }

// function popupButaoTres() {
//     moreInfoTres = !moreInfoTres
//     if (moreInfoTres == true) {
//         popTres.style.display = 'inline'
//     } else {
//         popTres.style.display = 'none'
//     }
// }

// function popupButaoQuatro() {
//     moreInfoQuatro = !moreInfoQuatro
//     if (moreInfoQuatro == true) {
//         popQuatro.style.display = 'inline'
//         pop
//         popQuatro.style.display = 'none'
//     }
// }

// sobreporUm.addEventListener('click', function () {
//     popupButaoUm()
// })

// sobreporDois.addEventListener('click', function () {
//     popupButaoDois()
// })

// sobreporTres.addEventListener('click', function () {
//     popupButaoTres()

// })

// sobreporQuatro.addEventListener('click', function () {
//     popupButaoQuatro()
// })
