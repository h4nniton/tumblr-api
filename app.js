'use strict'

async function pegarImagens() {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=03'
    const response = await fetch(url)
    const imagens = await response.json()
    
    return imagens.message
}

function criarImg(imagem) {
    const card = document.getElementById('galeria')
    const tagImg = document.createElement('img')
    tagImg.src = imagem
    galeria.appendChild(tagImg)

}

async function carregarGaleria() {
    const imagens = await pegarImagens()
    imagens.forEach(criarImg)
}

carregarGaleria()