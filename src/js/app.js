document.addEventListener('DOMContentLoaded', function(){
    btn();
});

const btn= () => {
    const boton = document.querySelector(".boton") ;
    boton.addEventListener('click', animateBtn);
}


const animateBtn = () =>{
    const botones = document.querySelector(".boton") ;
    botones.classList.toggle('active');
}

const fondos = [
    "imgHeladosSabores4",
    "imgHeladosSabores",
    "imgHeladosVarios",
    "imgVitrinaHelados"
]


i = 0;


setInterval(function(){
    const fondo = document.getElementById("fondo");
    fondo.style.backgroundImage= `url(./src/img/${fondos[i]}.jpg)`;
    i++;
    if(i==4){
        i=0;
    }
},12000);

