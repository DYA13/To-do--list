const inputRow=document.querySelector('.inputField');
const buttonRow =document.querySelector('.btn');
const ulRow = document.querySelector('.toDoContainer');

buttonRow.addEventListener('click',()=>{
const item=document.createElement('li');
item.innerText=inputRow.value;
item.classList.add('toDoAdded');
ulRow.appendChild(item);
inputRow.value='';


item.addEventListener('click',()=>{
    item.classList.add('toDoCompleted');
})
item.addEventListener('dblclick',()=>{
    ulRow.removeChild(item);


})
})
