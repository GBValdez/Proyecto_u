var Jugador = document.getElementById("Jugador");
var destino=[0,0];
var velocidad=3;
var V=[0,0];
var LimiteV=6;
var LM=10
var X=50;
var Y=10;
var Tecla=[false,false];
var FI=1;
var Scalax=1;
var movi=false;
var Btn_Yo= document.getElementById("SMi");
Btn_Yo.addEventListener("click", ()=>{
   ocultar();
   document.getElementById("Yo").className="Foco";  
});

Btn_Yo= document.getElementById("SAnime");
Btn_Yo.addEventListener("click", ()=>{
   ocultar();
   document.getElementById("Anime").className="Foco";  
});

Btn_Yo= document.getElementById("SControl");
Btn_Yo.addEventListener("click", ()=>{
   ocultar();
   document.getElementById("Videojuegos").className="Foco";  
});


document.getElementById("SProgramacion").addEventListener("click",()=>{
    ocultar();
    document.getElementById("Programacion").className="Foco";
})
 

function ocultar(){
    document.getElementById("Yo").className="Desfocado";
    document.getElementById("Videojuegos").className="Desfocado";
    document.getElementById("Anime").className="Desfocado";
    document.getElementById("Programacion").className="Desfocado";
    document.getElementById("Bienvenida").className="Desfocado"
}
Jugador.style.top=Y+"px";
Jugador.style.left=X+"px";
let Mouse_mover= document.addEventListener("mousemove",(event)=>{
    destino[0]=event.clientX;
    destino[1]=event.clientY;
})

setInterval(Loop,30)

function Loop(){
    
    V[0]= (destino[0]-X)/50;
    V[1]= (destino[1]-Y)/50;
    for(i=0;i<2;i++){
        if(Math.abs(V[i])<1){
            V[i]=0;
        }
    }

    Y+= V[1];
    X+=V[0];
    Jugador.style.top=Y+"px";
    Jugador.style.left=X+"px";
    if (V[0]!=0){
        Scalax= Math.sign(V[0]);
    }
    Jugador.style.transform="scale("+Scalax+",1)";
    Tecla=[false,false];
    var pic="";
    if (V[0]==0 && V[1]==0){ 
        if (movi){
        Jugador.src="Imagenes/Iddle.png"
        movi=false;
        }
    }else{
        if (!movi){
            Jugador.src="Imagenes/Walk.gif";
            movi=true;
        }
        
    }
    
    
}

particlesJS(
    {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#dedede"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.2,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 55.24033491425909,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "bubble"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 194.89853095232286,
            "size": 40.603860615067255,
            "duration": 2,
            "opacity": 0.8120772123013451,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    } 
  )