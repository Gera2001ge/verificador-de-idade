function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.lenght == 0 || fano.value>ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id',  'foto')
        if (fsex[0].checked) {
            genero = 'homem' 
            if (idade >=0 && idade <16) {
                img.setAttribute('src', 'homem-criança.webp')
            } else if (idade >= 16 && idade <49) {
                img.setAttribute('src', 'homem-jovem.jpeg')
            } else {
                img.setAttribute('src', 'homem-meia-idade.webp')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade>=0 && idade <16) {
                img.setAttribute('src', 'mulher-criança.webp') 
            } else if (idade >=16 && idade <49) {
                img.setAttribute('src', 'mulher-adulta.webp')
            } else {
                img.setAttribute('src', 'mulher-meia-idade.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}

