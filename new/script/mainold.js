var mapa = [[]];

var alfabeto=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","u","w","x","y","z"] //l=26

var posicionI //letras
var posicionJ //números
var posicionAct

var arriba,
    abajo,
    izquierda,
    derecha;

var movimiento
var opciones=[]
var destino

var cuadradoDestino
var cuadradoActual

var cuantos

var fin

var movimientos=[]

var direccion=0

var derecha
var izquierda
var arriba
var abajo

var registro=[]


function empezar(){

  posicionInical()
  
  leerPosición()

  moverse()

  if(fin=="si"){return("x")}

  setTimeout(empezar, 50);

}

function nuevaPosicion() {
  
  for(h=0;h!=mapa.length;h++){
    for(k=0;k!=mapa.length;k++){
      if(mapa[h][k]==destino){
        posicionI=h
        posicionJ=k
        posicionAct=(mapa[posicionI][posicionJ])
      }
    }
  }
}

function comprobarVictoria(x) { 

  if(cuadradoDestino.className == "meta"){
    alert("Has ganado!")
    fin="si"
  }

}

function moverse() { 
  
  var cuadradoActual=document.getElementById("cuadrado-"+posicionAct)
  cuadradoDestino=document.getElementById("cuadrado-"+destino)

  //si el cuadrado del que salimos solo tiene una opción lo marcamos como anterior2
  if(opciones.length > 1){
    cuadradoActual.className="anterior"
  }else if(opciones.length == 1){
    cuadradoActual.className="anterior2"
  }else if(cuadradoActual.className=="actual"){
    cuadradoActual.className="anterior"
  }else if(cuadradoActual.className=="actual2"){
    cuadradoActual.className="anterior2"}


  //añadir movimiento al registro
  movimientos.push(cuadradoActual)
  registro.push(posicionAct)
  // console.log(movimientos)

  //comprobamos
  comprobarVictoria("x")

  //asignamos al nuevo la clase "actual"
  if(cuadradoDestino.className=="anterior"){
    cuadradoDestino.className="actual2"
  }else{
    cuadradoDestino.className="actual"
  }

  //asignar nueva posición
  nuevaPosicion()

  //limpiarOpciones
  opciones.splice(0,opciones.length)

}

function calcularDestino(){

  var valor

  if (registro.length>2) {

    if (opciones.length==3){

      var opcion1=opciones[0]
      var opcion2=opciones[1]
      var opcion3=opciones[2]
      var vecesOpcion1=0
      var vecesOpcion2=0
      var vecesOpcion3=0

      //comprovamos cuantas veces aparece la opción en el registro
      for(r=0;r<registro.length;r++){

        if(registro[r]==opcion1){
          vecesOpcion1++
        }else if(registro[r]==opcion2){
          vecesOpcion2++
        }else if(registro[r]==opcion3){
          vecesOpcion3++
        }
      }

      //conseguimos la menor de las variables
      var menor=Math.min(vecesOpcion1, vecesOpcion2, vecesOpcion3)

      if(vecesOpcion1==vecesOpcion2==vecesOpcion3){}

      else{
        if(vecesOpcion1==menor){
          destino=opcion1
          return(destino)
        }
        if(vecesOpcion2==menor){
          destino=opcion2
          return(destino)
        }
        if(vecesOpcion3==menor){
          destino=opcion3
          return(destino)
        }
      }
      
    }

    if (opciones.length==4){

      var opcion1=opciones[0]
      var opcion2=opciones[1]
      var opcion3=opciones[2]
      var opcion4=opciones[3]
      var vecesOpcion1=0
      var vecesOpcion2=0
      var vecesOpcion3=0
      var vecesOpcion4=0

      //comprovamos cuantas veces aparece la opción en el registro
      for(r=0;r<registro.length;r++){

        if(registro[r]==opcion1){
          vecesOpcion1++
        }else if(registro[r]==opcion2){
          vecesOpcion2++
        }else if(registro[r]==opcion3){
          vecesOpcion3++
        }else if(registro[r]==opcion4){
          vecesOpcion4++
        }
      }

      //conseguimos la menor de las variables
      var menor=Math.min(vecesOpcion1, vecesOpcion2, vecesOpcion3, vecesOpcion4)

      if(vecesOpcion1==vecesOpcion2==vecesOpcion3==vecesOpcion4){}

      else{

        if(vecesOpcion1==menor){
          destino=opcion1
          return(destino)
        }
        if(vecesOpcion2==menor){
          destino=opcion2
          return(destino)
        }
        if(vecesOpcion3==menor){
          destino=opcion3
          return(destino)
        }

        if(vecesOpcion4==menor){
          destino=opcion4
          return(destino)
        }

      }

    }
  }
  
  for(z=0;z<opciones.length;z++){
    valor=opciones[z]
      if(document.getElementById("cuadrado-"+valor).className=="meta"){
        destino=opciones[z]
        return(destino)
      }
  }

  for(z=0;z<opciones.length;z++){
    valor=opciones[z]
      if(document.getElementById("cuadrado-"+valor).className=="cuadradoBlanco"){
        destino=opciones[z]
        return(destino)
      }
  }


  for(z=0;z<opciones.length;z++){
    valor=opciones[z]
      if(document.getElementById("cuadrado-"+valor).className=="anterior"){
        destino=opciones[z]
        return(destino)
      }
  }

  for(z=0;z<opciones.length;z++){
    valor=opciones[z]
      if(document.getElementById("cuadrado-"+valor).className=="anterior2"){
        destino=opciones[z]
        return(destino)
      }
  }

}

function reset(){
  location.reload()
}

//-------------------Generar el mapa-----------------------//

function generarMapa(){

  mapa.splice(0,mapa.length);

  document.getElementById("lienzo").innerHTML=""

  var valueToPush = [];

  cuantos=document.getElementById("cuantos").value

  document.getElementById("lienzo").style.width=(cuantos)+"00px"
  document.getElementById("lienzo").style.height=(cuantos)+"00px"

  //creo los vectores donde almacenar la información
  for (i=0;i<cuantos;i++){
    mapa[i]=[]
  }

  //creo los divs y almaceno los vectores
  for (i=0;i<cuantos;i++){
    letr=alfabeto[i]

    valueToPush.slice(0,valueToPush.length)

    for (j=1;j<=cuantos;j++){
      document.getElementById('lienzo').innerHTML+='<div class="cuadradoBlanco" id="cuadrado-'+letr+j+'"width:100px;height:100px"></div>';

      mapa[i].push(letr+j)
    }

  }

}

function meta(){

  var objetivo=document.getElementsByClassName("cuadradoBlanco")

  for (i=0; i<objetivo.length; i++) {
    objetivo[i].addEventListener('click', function handleClick(event) {
      
      event.target.classList.add('meta');
      event.target.classList.remove('cuadradoBlanco');
      event.target.classList.remove('cuadradoNegro');
      event.target.classList.remove('actual');
    });

  }

  document.getElementById("botonMeta").disabled=true
  document.getElementById("botonInicio").disabled=false
  document.getElementById("botonPared").disabled=false
  document.getElementById("botonPared2").disabled=false


}

function pared(){

  var objetivo=document.getElementsByClassName("cuadradoBlanco")

  for (i=0; i<objetivo.length; i++) {
    objetivo[i].addEventListener('click', function handleClick(event) {
      event.target.classList.add('cuadradoNegro');
      event.target.classList.remove('cuadradoBlanco');
      event.target.classList.remove('actual');
      event.target.classList.remove('meta');

    });

  }

  document.getElementById("botonMeta").disabled=false
  document.getElementById("botonInicio").disabled=false
  document.getElementById("botonPared").disabled=true
  document.getElementById("botonPared2").disabled=false


}

function paredBorrar(){

  var objetivo=document.getElementsByClassName("cuadradoNegro")

  for (i=0; i<objetivo.length; i++) {
    objetivo[i].addEventListener('click', function handleClick(event) {
      event.target.classList.add('cuadradoBlanco');
      event.target.classList.remove('cuadradoNegro');
      event.target.classList.remove('actual');
      event.target.classList.remove('meta');

    });

  }

  document.getElementById("botonMeta").disabled=false
  document.getElementById("botonInicio").disabled=false
  document.getElementById("botonPared").disabled=false
  document.getElementById("botonPared2").disabled=true


}

function inicio(){

  var objetivo=document.getElementsByClassName("cuadradoBlanco")

  for (i=0; i<objetivo.length; i++) {
    objetivo[i].addEventListener('click', function handleClick(event) {
      event.target.classList.add('actual');
      event.target.classList.remove('cuadradoBlanco');
      event.target.classList.remove('cuadradoNegro');

      event.target.classList.remove('meta');

    });

  }
  document.getElementById("botonMeta").disabled=true;

  posicionInical()

  document.getElementById("botonMeta").disabled=false
  document.getElementById("botonInicio").disabled=true
  document.getElementById("botonPared").disabled=false
  document.getElementById("botonPared2").disabled=false

  
}

function posicionInical() { 

    //leer todos los divs
    for (i=0;i<cuantos;i++){
      letr=alfabeto[i]

      for (j=1;j<=cuantos;j++){
        if (document.getElementById("cuadrado-"+letr+j).className=="actual"){
          // console.log(letr+(j))
          posicionI=i //letras
          posicionJ=j-1 //números
        }
      }
      
    }

}


//----------------------Laberinto predeterminado-------------------//

function laberintoDefaul() { 


    mapa.splice(0,mapa.length);
  
    document.getElementById("lienzo").innerHTML=""
  
    var valueToPush = [];
  
    cuantos=document.getElementById("cuantos").value
  
    document.getElementById("lienzo").style.width=(cuantos)+"00px"
    document.getElementById("lienzo").style.height=(cuantos)+"00px"
  
    //creo los vectores donde almacenar la información
    for (i=0;i<cuantos;i++){
      mapa[i]=[]
    }
  
    //creo los divs y almaceno los vectores
    for (i=0;i<cuantos;i++){
      letr=alfabeto[i]
  
      valueToPush.slice(0,valueToPush.length)
  
      for (j=1;j<=cuantos;j++){  
        mapa[i].push(letr+j)
      }
  
    }
  

  document.getElementById("lienzo").innerHTML+='<div class="cuadradoBlanco" id="cuadrado-a1" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-a2" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-a3" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-a4" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-a5" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-a6" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-a7" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-a8" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-a9" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-a10" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-b1" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-b2" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-b3" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-b4" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-b5" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-b6" width:100px;height:100px"="">'
  document.getElementById("lienzo").innerHTML+='</div><div class="cuadradoNegro" id="cuadrado-b7" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-b8" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-b9" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-b10" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-c1" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-c2" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-c3" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-c4" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-c5" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-c6" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-c7" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-c8" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-c9" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-c10" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-d1" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-d2" width:100px;height:100px"=""></div>'
  document.getElementById("lienzo").innerHTML+='<div class="cuadradoBlanco" id="cuadrado-d3" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-d4" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-d5" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-d6" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-d7" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-d8" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-d9" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-d10" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-e1" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-e2" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-e3" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-e4" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-e5" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-e6" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-e7" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-e8" width:100px;height:100px"=""></div>'
  document.getElementById("lienzo").innerHTML+='<div class="cuadradoBlanco" id="cuadrado-e9" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-e10" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-f1" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-f2" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-f3" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-f4" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-f5" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-f6" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-f7" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-f8" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-f9" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-f10" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-g1" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-g2" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-g3" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-g4" width:100px;height:100px"=""></div>'
  document.getElementById("lienzo").innerHTML+='<div class="cuadradoNegro" id="cuadrado-g5" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-g6" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-g7" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-g8" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-g9" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-g10" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-h1" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-h2" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-h3" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-h4" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-h5" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-h6" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-h7" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-h8" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-h9" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-h10" width:100px;height:100px"=""></div>'
  document.getElementById("lienzo").innerHTML+='<div class="cuadradoNegro" id="cuadrado-i1" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-i2" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-i3" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-i4" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-i5" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-i6" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-i7" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-i8" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-i9" width:100px;height:100px"=""></div><div class="cuadradoNegro" id="cuadrado-i10" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-j1" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-j2" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-j3" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-j4" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-j5" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-j6" width:100px;height:100px"=""></div>'
  document.getElementById("lienzo").innerHTML+='<div class="cuadradoBlanco" id="cuadrado-j7" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-j8" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-j9" width:100px;height:100px"=""></div><div class="cuadradoBlanco" id="cuadrado-j10" width:100px;height:100px"=""></div></div>'

}


//---------------------leer posición y destino------------------//

function leerPosición(){

  switch (direccion) {
    case 1:
      norte()
    break;
    case 2:
      sur()
    break;
    case 3:
      este()
    break;
    case 4:
      oeste()
    break;
  
    default:
        norte()
      
    break;


  }

      //leemos el destino
      destino=calcularDestino()
      //devuelve una coordenada por ej: "a1"
      
      //vamos a leer en qué posición está en el array de opciones (derecha, arriba, izquierda y abajo por predeterminado)
      if(calcularDestino()==arriba){direccion=1} //va a la derecha (este)
      if(calcularDestino()==abajo){direccion=2} //va a la derecha (este)
      if(calcularDestino()==derecha){direccion=3} //va a la derecha (este)
      if(calcularDestino()==izquierda){direccion=4} //va a la derecha (este)

}

function norte(){

  posicionAct=(mapa[posicionI][posicionJ])

  if(posicionJ!=cuantos-1){ //si no está en la primera columna
    derecha=(mapa[posicionI][posicionJ+1])
    if(document.getElementById("cuadrado-"+derecha).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+derecha).className!="anterior2"){
        opciones.push(derecha)
      }
    }
  }else{derecha="noExiste"}

  if(posicionI!=0){ //si no está en la fila de arriba puede leer abajo
    arriba=(mapa[posicionI-1][posicionJ])
    if(document.getElementById("cuadrado-"+arriba).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+arriba).className!="anterior2"){
        opciones.push(arriba)
      }
    }
  }else{arriba="noExiste"}

  if(posicionJ!=0){ //si no está en la primera columna
    izquierda=(mapa[posicionI][posicionJ-1])
    if(document.getElementById("cuadrado-"+izquierda).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+izquierda).className!="anterior2"){
        opciones.push(izquierda)
      }
    }
  }else{izquierda="noExiste"}

  if(posicionI!=cuantos-1){ //si no está en la fila de abajo puede leer abajo
    abajo=(mapa[posicionI+1][posicionJ])
    if(document.getElementById("cuadrado-"+abajo).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+abajo).className!="anterior2"){
        opciones.push(abajo)
      }
    }
  }else{abajo="noExiste"}

  // console.log("Posición Actual:"+posicionAct+"  \n.\nArriba: "+arriba+" \nAbajo: "+abajo+" \nDerecha: "+derecha+" \nIzquierda: "+izquierda+"\n.")

}

function sur(){

  posicionAct=(mapa[posicionI][posicionJ])

  if(posicionJ!=0){ //si no está en la primera columna
    izquierda=(mapa[posicionI][posicionJ-1])
    if(document.getElementById("cuadrado-"+izquierda).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+izquierda).className!="anterior2"){
        opciones.push(izquierda)
      }
    }
  }else{izquierda="noExiste"}

  if(posicionI!=cuantos-1){ //si no está en la fila de abajo puede leer abajo
    abajo=(mapa[posicionI+1][posicionJ])
    if(document.getElementById("cuadrado-"+abajo).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+abajo).className!="anterior2"){
        opciones.push(abajo)
      }
    }
  }else{abajo="noExiste"}

  if(posicionJ!=cuantos-1){ //si no está en la primera columna
    derecha=(mapa[posicionI][posicionJ+1])
    if(document.getElementById("cuadrado-"+derecha).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+derecha).className!="anterior2"){
        opciones.push(derecha)
      }
    }
  }else{derecha="noExiste"}

  if(posicionI!=0){ //si no está en la fila de arriba puede leer abajo
    arriba=(mapa[posicionI-1][posicionJ])
    if(document.getElementById("cuadrado-"+arriba).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+arriba).className!="anterior2"){
        opciones.push(arriba)
      }
    }
  }else{arriba="noExiste"}

  // console.log("Posición Actual:"+posicionAct+"  \n.\nArriba: "+arriba+" \nAbajo: "+abajo+" \nDerecha: "+derecha+" \nIzquierda: "+izquierda+"\n.")

}

function este(){

  posicionAct=(mapa[posicionI][posicionJ])

  if(posicionI!=cuantos-1){ //si no está en la fila de abajo puede leer abajo
    abajo=(mapa[posicionI+1][posicionJ])
    if(document.getElementById("cuadrado-"+abajo).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+abajo).className!="anterior2"){
        opciones.push(abajo)
      }
    }
  }else{abajo="noExiste"}

  if(posicionJ!=cuantos-1){ //si no está en la primera columna
    derecha=(mapa[posicionI][posicionJ+1])
    if(document.getElementById("cuadrado-"+derecha).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+derecha).className!="anterior2"){
        opciones.push(derecha)
      }
    }
  }else{derecha="noExiste"}

  if(posicionI!=0){ //si no está en la fila de arriba puede leer abajo
    arriba=(mapa[posicionI-1][posicionJ])
    if(document.getElementById("cuadrado-"+arriba).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+arriba).className!="anterior2"){
        opciones.push(arriba)
      }
    }
  }else{arriba="noExiste"}

  if(posicionJ!=0){ //si no está en la primera columna
    izquierda=(mapa[posicionI][posicionJ-1])
    if(document.getElementById("cuadrado-"+izquierda).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+izquierda).className!="anterior2"){
        opciones.push(izquierda)
      }
    }
  }else{izquierda="noExiste"}


  // console.log("Posición Actual:"+posicionAct+"  \n.\nArriba: "+arriba+" \nAbajo: "+abajo+" \nDerecha: "+derecha+" \nIzquierda: "+izquierda+"\n.")

}

function oeste(){

  posicionAct=(mapa[posicionI][posicionJ])

  if(posicionI!=0){ //si no está en la fila de arriba puede leer abajo
    arriba=(mapa[posicionI-1][posicionJ])
    if(document.getElementById("cuadrado-"+arriba).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+arriba).className!="anterior2"){
        opciones.push(arriba)
      }
    }
  }else{arriba="noExiste"}

  if(posicionJ!=0){ //si no está en la primera columna
    izquierda=(mapa[posicionI][posicionJ-1])
    if(document.getElementById("cuadrado-"+izquierda).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+izquierda).className!="anterior2"){
        opciones.push(izquierda)
      }
    }
  }else{izquierda="noExiste"}

  if(posicionI!=cuantos-1){ //si no está en la fila de abajo puede leer abajo
    abajo=(mapa[posicionI+1][posicionJ])
    if(document.getElementById("cuadrado-"+abajo).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+abajo).className!="anterior2"){
        opciones.push(abajo)
      }
    }
  }else{abajo="noExiste"}

  if(posicionJ!=cuantos-1){ //si no está en la primera columna
    derecha=(mapa[posicionI][posicionJ+1])
    if(document.getElementById("cuadrado-"+derecha).className!="cuadradoNegro"){
      if(document.getElementById("cuadrado-"+derecha).className!="anterior2"){
        opciones.push(derecha)
      }
    }
  }else{derecha="noExiste"}

  // console.log("Posición Actual:"+posicionAct+"  \n.\nArriba: "+arriba+" \nAbajo: "+abajo+" \nDerecha: "+derecha+" \nIzquierda: "+izquierda+"\n.")

}