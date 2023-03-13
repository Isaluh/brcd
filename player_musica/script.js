const tocar = document.querySelectorAll("img.play")
const music = document.querySelector('audio')
const textoSegundos = document.querySelectorAll('.segundos')
const textoMinutos = document.querySelectorAll('.minutos')
const barraUm = document.querySelector('#linhacima')
const barraDois = document.querySelector('#linhacimadois')

let ativado = 'True'
let timer = ''
tocar.forEach((tocarUm) => {
    tocarUm.addEventListener('click', () => {
        if (tocarUm.classList.contains('tocando')) {
            tocar.forEach((tocarUm) => {
                tocarUm.setAttribute('src', './assets/play.svg')
                music.pause()
                tocarUm.classList.remove('tocando')
            })
            clearInterval(timer)
        }
        else {
            tocar.forEach((tocarUm) => {
                tocarUm.setAttribute('src', './assets/pause.svg')
                music.play()
                tocarUm.classList.add('tocando')
            })
            timer = setInterval(tempoCorrendo, 1000)
        }             
    })
})

let wid = 0
let widt = 0

function tempoCorrendo() {
    wid = wid + 0.9178743
    widt = widt + 1.4492753
    barraUm.setAttribute('style', `width: ${wid}px`)
    barraDois.setAttribute('style', `width: ${widt}px`)

    textoSegundos.forEach((segs) =>{
        segs.innerText = parseInt(segs.innerText) + 1
        if (segs.innerHTML < 10 && segs.innerHTML > 0) {
            segs.innerHTML = '0' + segs.innerHTML
        }
    })

    if(textoSegundos[0].innerHTML == "60"){
        textoSegundos.forEach((segs) => {
            segs.innerText = '00'
        })

        textoMinutos.forEach((mins) => {
            mins.innerText = parseInt(mins.innerText) + 1
            if (mins.innerHTML < 4) {
                mins.innerHTML = '0' + mins.innerHTML
            }
        })
    }
    if (textoMinutos[0].innerHTML == '03' && textoSegundos[0].innerHTML == '27') {
        clearInterval(timer)
        wid = 0
        widt = 0
        barraUm.setAttribute('style', `width: ${wid}px`)
        barraDois.setAttribute('style', `width: ${widt}px`)
        textoMinutos.forEach((mins) => {
            mins.innerHTML = '00'
        })
        textoSegundos.forEach((segs) => {
            segs.innerHTML = '00'
        })
        tocar.forEach((tocarUm) => {
            tocarUm.setAttribute('src', './assets/play.svg')
            tocarUm.classList.remove('tocando')
        })
        music.replay()
    }
}


