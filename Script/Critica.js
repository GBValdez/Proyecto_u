//Celdas= document.getElementsByTagName("td");
Crear_cuadros();
console.log("Hola");



function Crear_cuadros(){
  var Tabla = document.querySelector("table");
  var f=10;
  var c=10;
  for(i=0;i<f;i++){

  var fila= document.createElement("tr");
  Tabla.appendChild(fila);
  for(j=0;j<c;j++){
    var columna= document.createElement("td")
    fila.appendChild(columna);
    columna.addEventListener("mouseover",(event)=>{
      var a =event.target;
      a.className="Limpio";
      setTimeout(Ensuciar,30000,a);
  })
  }
}
}


function reconocer(){
    for(i=0;i<Celdas.length;i++){
        Celdas[i].addEventListener("mouseover",(event)=>{
            var a =event.target;
            a.className="Limpio";
            setTimeout(Ensuciar,15000,a);
        })
    }
}

function Ensuciar(a){
    a.className="";
}

particlesJS(
    {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 2,
              "color": "#ffffff"
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
            "value": 0.07215354273894853,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1.2993235396821523,
              "opacity_min": 0.1,
              "sync": true
            }
          },
          "size": {
            "value": 30,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 17.053621458328248,
              "size_min": 0.1,
              "sync": true
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 176.3753266952075,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 5.291259800856225
          },
          "move": {
            "enable": true,
            "speed": 6.413648243462092,
            "direction": "none",
            "random": true,
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
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
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
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
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