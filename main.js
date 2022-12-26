function addtolist(){
    var taskName =document.getElementById("taskName").value;
    var mytodo =document.getElementById("mytodo");

    var newtodoitem = document.createElement('div');
    var todoname = document.createElement('li');
    todoname.innerHTML = taskName;
    var deletebtn = document.createElement('i');
    deletebtn.classList.add('fa');
    deletebtn.classList.add('fa-trash');

    newtodoitem.appendChild(todoname);
    newtodoitem.appendChild(deletebtn);
    mytodo.appendChild(newtodoitem);
}
var tododiv = document.getElementById("mytodo");
tododiv.addEventListener('click',(e)=>{
    const element = e.target;
    if(element.classList[0]=='fa'){
        element.parentElement.remove();
    }
});