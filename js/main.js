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
      detail_task += '<li id="li" class="li"><input class="check" id="check" type="checkbox">'+returnTask[i]+'</li>';
    }

    var tTask = document.querySelector('#allTask');
    tTask.innerHTML  = detail_task;
    textTask.value = '';
    prueba();
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
    //unshift para poner en primer lugar del array, shift para poner el ultimo(push)
    returnTask.unshift(textTask);
    localStorage.setItem('arrTask_task',JSON.stringify(returnTask));
    /* Mostramos el localStorage que tenemos guardado */
  }
  if(textTask == ''){
    alert('Escribe una terea o haz click en el botòn + para mostrar tus teareas');
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
   // taskContainerMenu.style.display = 'block';
   //containerTask.className += " container__task--opacity";

if(taskContainerMenu.style.display == 'block'){
  taskContainerMenu.style.display = 'none';
  containerTask.classList.remove ('container__task--opacity');
}
else{
  taskContainerMenu.style.display = 'block';
  containerTask.classList.add ('container__task--opacity');
}
 }






function prueba(){
var nombres = document.querySelectorAll('.container__task .li');

var _toggle_tachar = function(el){
	el.addEventListener('click', function(){
		if (el.dataset.estado == 0){
			el.dataset.estado = 1;
			el.style.textDecoration= 'line-through';
		}else{
			el.dataset.estado = 0;
			el.style.textDecoration = 'none';
		}
	});
}

for( var i=0; i<nombres.length; i++ ){
	_toggle_tachar(nombres[i]);
  console.log(nombres[i]);
	// Loop inicial estado
	if ( nombres[i].dataset.estado == 1 ){
	//	nombres[i].style.textDecoration= 'line-through';
	}
  else
  {
    //nombres[i].style.textDecoration= 'none';
  }
}
}
