'use strict';


var btnMore = document.querySelector('#btnMore');
btnMore.addEventListener("click", showForm);

var btnAddElement = document.querySelector('#btnAdd');
btnAddElement.addEventListener("click", saveTask);

var returnTask = JSON.parse(localStorage.getItem('arrTask_task'));

getAndShowTasks();

function getAndShowTasks(){
  //comprobamos si hay algun valor en localStorage
    var detail_task = '';
    for(var i = 0;i<returnTask.length;i++)
    {
      detail_task += '<li id="li"><input class="check" id="check" type="checkbox">'+returnTask[i]+'</li>';
    }


    var tTask = document.querySelector('#allTask');
    tTask.innerHTML  = detail_task;
    textTask.value = '';

}

/* Funcion que vacia los datos de localStorage */
function ResetTasks(){
  returnTask = [];
  localStorage.setItem('arrTask_task',JSON.stringify(returnTask));
}

function saveTask(){
  var taskContainerMenu = document.querySelector('#container__form');
  var newTask = document.querySelector('#textTask');
  var textTask = newTask.value;

  if(textTask == 'empty')
  {
    ResetTasks();
  }
  else
  {
    returnTask.push(textTask);
    localStorage.setItem('arrTask_task',JSON.stringify(returnTask));
    /* Mostramos el localStorage que tenemos guardado */
  }

  getAndShowTasks();
  taskContainerMenu.style.display = 'none';
  var containerTask = document.querySelector('#allTask');
  containerTask.classList.remove ('container__task--opacity');

}
//console.log(saveTask());

 function showForm(){
   var taskContainerMenu = document.querySelector('#container__form');
   var containerTask = document.querySelector('#allTask');
   taskContainerMenu.style.display = 'block';
   containerTask.className += " container__task--opacity";
 }

//   var check = document.querySelector('#check');
// //   if (check.checked==true){
// //
// // }
// var li= document.querySelector('#li')
// if (document.querySelector('#check').checked)
//  {
//    li.className += " li_2";
//  }
