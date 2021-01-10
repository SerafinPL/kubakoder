

setInterval(czasownik, 1000);

function czasownik(){

  var dd = new Date();


  var godzin = dd.getHours();
  if (godzin < 10) {
    e += '0';
  }
  var e = godzin + ':';

  var minut = dd.getMinutes();
  if (minut < 10) {
    e += '0';
  }
  e += minut + ':';
  var secondo = dd.getSeconds();
  if (secondo < 10) {
    e += '0';
  }
  e += secondo + '     ';

  e += dd.getDate() + '/';
  var miesiac = dd.getMonth() + 1;
  if (miesiac < 10) {
    e += '0';
  }
  e += miesiac + '/';
  e += dd.getFullYear() + 'r';



  document.getElementById('czas').innerHTML = e ;
}


czasownik();
