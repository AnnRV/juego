//Funcion para pasar de pantalla 1 a pantalla 2.

function pasopant2(){
    document.getElementById('pantalla2').style.display='inline-block';
    document.getElementById('pantalla1').style.display='none';
}

//funcion para pasar de la pantalla 2 a la 4.
function pasopant4(){
    document.getElementById('pantalla4').style.display='inline-block';
    document.getElementById('pantalla2').style.display='none';
}

//funcion de la 4 a la 1.
function pasopant4a1(){
    document.getElementById('pantalla1').style.display='inline-block';
    document.getElementById('pantalla4').style.display='none';
}

//funcion para pasar de la 4 a la 5.
function pasopant5(){
      document.getElementById('pantalla5').style.display='inline-block';
    document.getElementById('pantalla4').style.display='none';
}

//Activamos un evento en el botón con id entrar para disparar las funciones.
document.getElementById('entrar').addEventListener('click',pasopant2);
document.getElementById('comjuego').addEventListener('click',pasopant4);
document.getElementById('again').addEventListener('click',pasopant4a1);
document.getElementById('adios').addEventListener('click',pasopant5);

/*function pasopant2a4(){
    setTimeout(function(){alert('HELLO');}, 3000);
}*/
