function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if( hora >= 0 && hora <= 12){
        img.src = `./img/pexels-asad-photo-maldives-1024960.jpg`
        document.body.style.background  = '#8eadff'
    }else if(hora >= 12 && hora <= 18){
        img.src = `./img/pexels-anderson-martins-2386144.jpg `
        document.body.style.background  = '#ff8b00'
    }else{
        img.src =  `./img/pexels-james-wheeler-414612.jpg`
        document.body.style.background  = '#009cfc'
    } 
}
