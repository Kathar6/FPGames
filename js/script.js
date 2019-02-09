let cuerpo = document.querySelector(".fadeOut");
let fadeOut = setInterval(function(){
    if (!cuerpo.style.opacity){
        cuerpo.style.opacity = 1;
    }
    if (cuerpo.style.opacity > 0){
        cuerpo.style.opacity -= 0.1;
    }else{
        clearInterval(fadeOut);
        cuerpo.style.visibility = 'hidden';
    }
},50)