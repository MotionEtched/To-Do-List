const todoinput = document.getElementById("todoinput");
const addbtn = document.getElementById("addbtn");
const todolist = document.getElementById("todolist");

function addtodo(){
    const todotext = todoinput.ariaValueMax.trim();
    if(todoinput === ""){
        alert ("Please enter a task");
        return;
    }
    const li = document.createElement('li');
    const textspan = document.createElement('span');
    textspan.textcontent = todotext;
    textspan.style.cursor = 'pointer';

    const deletebtn = document.createElement('button');
    deletebtn.textcontent = 'Delete';
    deletebtn.classname = 'delete-btn';

    deletebtn.addEventListener('click', function() {
       this.parentElement.remove(); 
    });

    li.appendChild(textspan);
    li.appendChild(deletebtn);
    todolist.appendChild(li);

    todoinput.value = "";
    todoinput.focus();
}

addbtn.addEventListener("click", addtodo);
todoinput.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        addtodo();
    }
});