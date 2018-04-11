'use strict';

/* Day section code */
    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miércoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";

    var dayName = weekday[today.getDay()];
    document.getElementById("weekday").innerHTML = dayName;

/* Day number code */
  document.getElementById("daynumber").innerHTML = today.getDate();

/* Month names code */
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

   var monthName = month[today.getMonth()];
   document.getElementById("month").innerHTML = monthName;

/* Year section code*/
document.getElementById("year").innerHTML =  ', '+ today.getFullYear();
