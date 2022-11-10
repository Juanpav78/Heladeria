document.addEventListener('DOMContentLoaded', function(){
    btn();
});

const btn= () => {
    const boton = document.querySelector(".boton") ;
    boton.addEventListener('click', animateBtn);
}


const animateBtn = () =>{
    const botones = document.querySelector(".boton") ;
    botones.classList.remove('no-animation')
    botones.classList.toggle('active');

    const botonNav = document.getElementById("botonNav");
    const navbar = document.getElementById("navbar");
    if(botonNav.classList.contains("active")){
        navbar.classList.add('active');
    }else{
        navbar.classList.remove('active');
    }
    
}

const fondos = [
    "imgHeladosSabores4",
    "imgHeladosSabores3",
    "imgHeladosSabores"
    
]
i = 0;
setInterval(function(){
    const fondo = document.getElementById("fondo");
    fondo.style.backgroundImage= `url(./src/img/${fondos[i]}.jpg)`;
    i++;
    if(i==fondos.length){
        i=0;
    }
},12000);

