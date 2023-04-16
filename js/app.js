let temporizador;
let tiempoRestante = 0;
let pause = false;

document.getElementById("iniciar").addEventListener("click", iniciarTemporizador);
document.getElementById("pausar").addEventListener("click", pausarTemporizador);
document.getElementById("resetear").addEventListener("click", resetearTemporizador);


function actualizarTemporizador() {
  if (tiempoRestante <= 0) {
    clearInterval(temporizador);
    document.getElementById("temporizador").innerHTML = "00:00";
    return;
  }
  
  tiempoRestante--;
  
  
  let minutos = Math.floor(tiempoRestante / 60);
  let segundos = tiempoRestante % 60;
  let tiempo = (minutos < 10 ? "0" + minutos : minutos) + ":" + 
    (segundos < 10 ? "0" + segundos : segundos);
  
  document.getElementById("temporizador").innerHTML = tiempo;
}


function iniciarTemporizador() {
  if (!pause) {
    tiempoRestante = document.getElementById("tiempo").value;
    temporizador = setInterval(actualizarTemporizador, 1000);
  }
  pause = false;
}


function pausarTemporizador() {
  clearInterval(temporizador);
  pause = true;
}


function resetearTemporizador() {
  clearInterval(temporizador);
  tiempoRestante = 0;
  document.getElementById("temporizador").innerHTML = "00:00";
  document.getElementById("tiempo").value = "";
  pause = false;
}