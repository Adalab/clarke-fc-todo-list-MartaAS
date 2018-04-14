'use strict';

//eventos a la espera del click
var btnMore = document.querySelector('#btnMore');
btnMore.addEventListener("click", showForm);

var btnAddElement = document.querySelector('#btnAdd');
btnAddElement.addEventListener("click", saveTask);

var returnTask = JSON.parse(localStorage.getItem('arrTask'));
if(returnTask)
getAndShowTasks();
else
var returnTask= [];

function getAndShowTasks(){
  //comprobamos si hay algun valor en localStorage
  var detail_task = '';
  for(var i = 0;i<returnTask.length;i++){
    if(returnTask[i].check == 0){
      detail_task += '<li class="li"><input class="check" type="checkbox">'+returnTask[i].name +'</li>';
    }
    else{
      detail_task += '<li class="li li__line--througth"><input class="check" type="checkbox" checked>'+returnTask[i].name +'</li>';

    }

  }

  var tTask = document.querySelector('#allTask');
  tTask.innerHTML  = detail_task;
  textTask.value = '';
  //CreateEventsToCheckBoxes();
}

function CreateEventsToCheckBoxes(){
  var nombres = document.querySelectorAll('.container__task .li');
  for(var i=0;i<nombres.length;i++)
  {
    var element = nombres[i];

    //element.addEventListener('click', LineCross(nombres[i]));
  }
  console.log('llego1');
  document.getElementById("allTask").addEventListener("click",function(e) {
    console.log('llego');
    // if (e.target && e.target.matches("li.item")) {
    //   e.target.className = "foo"; // new class name here
    //}
  });
}


function LineCross(element){
  console.log("element"+element);
  var checked = element.querySelector("input[type='checkbox']:checked");
  //console.log("checked"+checked);
  if(checked)
  {
    element.classList.add('li__line--througth');
  }
  else
  {
    element.classList.remove('li__line--througth');
  }
  updateTaskCheck();
}

/* Funcion que vacia los datos de localStorage */
function ResetTasks(){
  returnTask = [];
  localStorage.setItem('arrTask',JSON.stringify(returnTask));
}

function saveTask(){
  returnTask = JSON.parse(localStorage.getItem('arrTask'));
  var taskContainerMenu = document.querySelector('#container__form');
  var newTask = document.querySelector('#textTask');
  var textTask = newTask.value;
  //var newAllTask = '<li class="li"><input class="check" type="checkbox">'+textTask+'</li>';
  var newAllTask = {'name': textTask, 'check':0};
  if(textTask == ''){
    alert('Escribe una terea o haz click en el botòn + para mostrar tus teareas');
  }
  else{
    if(textTask == 'empty')
    {
      ResetTasks();
    }
    else
    {
      //unshift para poner en primer lugar del array, shift para poner el ultimo(push)
      //console.log(newAllTask);

      returnTask.unshift(newAllTask);
      localStorage.setItem('arrTask',JSON.stringify(returnTask));
      /* Mostramos el localStorage que tenemos guardado */
    }


    getAndShowTasks();
    taskContainerMenu.style.display = 'none';
    var containerTask = document.querySelector('#allTask');
    containerTask.classList.remove ('opacity');
  }
}

//console.log(saveTask());

function showForm(){
  var taskContainerMenu = document.querySelector('#container__form');
  var containerTask = document.querySelector('#allTask');
  // taskContainerMenu.style.display = 'block';
  //containerTask.className += " container__task--opacity";

  if(taskContainerMenu.style.display == 'flex'){
    //console.log('1');
    taskContainerMenu.style.display = 'none';
    containerTask.classList.remove ('opacity');
  }
  else{
    //console.log('0');
    taskContainerMenu.style.display = 'flex';
    containerTask.classList.add ('opacity');
  }
}


var nombres = document.querySelectorAll('.container__task .li');
//console.log(nombres);
var _toggle_tachar = function(element){
  element.addEventListener('click', function(){

    var checked = element.querySelector("input[type='checkbox']:checked");

    if(checked)
    {
      //console.log(element.outerText);
      element.classList.add('li__line--througth');

      /*
      var elemento_selecccionado = returnTask.filter(t => t.name.includes(element.outerText));
      elemento_selecccionado[0].check = 1;
      console.log(elemento_selecccionado[0].check);*/
    }
    else
    {
      //console.log(element.outerText);
      element.classList.remove('li__line--througth');

      /*var elemento_selecccionado = returnTask.filter(t => t.name.includes(element.outerText));
      elemento_selecccionado[0].check = 0;
      console.log(elemento_selecccionado[0].check);*/
    }

    updateTaskCheck();
  });
}



for( var i=0; i<nombres.length; i++ ){
  _toggle_tachar(nombres[i]);
}


//funcion para guardar valor del check y machacar array anterior
function updateTaskCheck(){
  nombres = document.querySelectorAll('.container__task .li');
  returnTask = [];
  var object = {'name': '', 'check':0};
  var element = '';
  var checked = 0;
  for(var i = 0 ; i < nombres.length; i++ ){

    element = nombres[i];
    checked = element.querySelector("input[type='checkbox']:checked");
    if(checked)
    checked = 1;
    else
    checked = 0;
    object = {'name': element.outerText, 'check': checked}



    returnTask.push(object);
    //console.log(element.outerText + '-'+checked);

  }

  //console.log(returnTask);
  //returnTask.unshift(newAllTask);
  localStorage.setItem('arrTask',JSON.stringify(returnTask));
}
