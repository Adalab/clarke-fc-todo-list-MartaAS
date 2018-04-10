'use strict';
/* Day section code */

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miércoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";

    var n = weekday[d.getDay()];
    document.getElementById("weekday").innerHTML = n;

/* Day number code */

var d = new Date();
document.getElementById("daynumber").innerHTML = d.getDay();


/* Month names code */

var w1 = new Date();
var month = new Array(11);
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";

   var w2 = month[w1.getMonth()];
   document.getElementById("month").innerHTML = w2;


/* Year section code*/

var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();
