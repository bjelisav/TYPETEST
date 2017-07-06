var btnGo = document.getElementById('btnGo');
var ispis = document.getElementById('tabla');
var prepis = document.getElementById('writeMe');
var player2 = document.getElementById('bot2');
var player3 = document.getElementById('bot3');
var player4 = document.getElementById('bot4');
var player2btn = document.getElementById('done2');
var player3btn = document.getElementById('done3');
var player4btn = document.getElementById('done4');
var btnDone = document.getElementById('done');
var tekstovi = ["Napisi prvo ovaj tekst", "Sta god zelis ti pisi", "Pisi brisi napisi ispisi"];
var nivo = 1;
btnGo.addEventListener('click',kreni);

function kreni(){
  var odb = 4
  btnGo.innerHTML = odb;
  btnDone.className ='btn btn-warning btn-block';
  btnDone.innerHTML = "Ready";
  var loop = setInterval(function(){
    odb--;
    btnGo.innerHTML = odb;
    if (odb===0) {
      btnGo.style.display = "none";
      ispis.focus();

      clearInterval(loop);
      newGame();
    }
  },1000);
}



function newGame(){
  var zadatak = tekstovi[Math.floor(Math.random()*tekstovi.length)];
  prepis.innerHTML = zadatak;
  var redosled = 0;

  var loop2 = 0;
  var loop3 = 0;
  var loop3 = 0;
  bot2Kuca(zadatak.split(""));
  bot3Kuca(zadatak.split(""));
  bot4Kuca(zadatak.split(""));

function bot2Kuca(x){
  var rand = (Math.random()*(600-400)+400)*(1-(0.1*nivo));
  function typing(){
    if (x.length>0) {
      player2.value += x.shift();
      loop2 = setTimeout(typing,rand);
    }else {
      redosled++;
      player2btn.innerHTML = redosled;
      player2btn.className ='btn btn-success btn-block';
    }
  }
  typing();
}
function bot3Kuca(x){
  var rand = (Math.random()*(600-500)+500)*(1-(0.1*nivo));
  function typing(){
    if (x.length>0) {
      player3.value += x.shift();
      loop3 = setTimeout(typing,rand);
    }else {
      redosled++
      player3btn.innerHTML = redosled;
      player3btn.className ='btn btn-success btn-block';
    }
  }
  typing();
}
function bot4Kuca(x){
  var rand = (Math.random()*(700-300)+300)*(1-(0.1*nivo));
  function typing(){
    if (x.length>0) {
      player4.value += x.shift();
      loop4 = setTimeout(typing,rand);
    }else {
      redosled++;
      player4btn.innerHTML = redosled;
      player4btn.className ='btn btn-success btn-block';
    }
  }
  typing();
}

document.addEventListener('keypress',typeProof)

function typeProof(e){
  if (e.keyCode===13) {
    if (tabla.value===zadatak) {
      redosled++;
      btnDone.innerHTML = redosled;
      btnDone.className ='btn btn-success btn-block';
      if (done.innerHTML == 1) {
        nivo++;
        btnGo.innerHTML = "Pokreni Nivo "+nivo;
        btnGo.style.display = "block";
        clearAll();
      }
    }else{
      done.innerHTML = "WRONG TYPING!";
      done.className ='btn btn-danger btn-block';
    }
  }
}

function clearAll(){
  clearInterval(loop2);
  clearInterval(loop3);
  clearInterval(loop4);
  ispis.blur();
  ispis.value = "";
  player2.value = "";
  player3.value = "";
  player4.value = "";



}

}
