var list = document.getElementById('list')
function addToDo(){
    var todoitem = document.getElementById('todoitem');
    var li= document.createElement('li');
    var liText = document.createTextNode(todoitem.value);
    li.appendChild(liText);
   list.appendChild(li)
   
    todoitem.value = ""
}

//  //create delete btn
 var delBtn = document.createElement('button');
 var delText = document.createTextNode('Delete');
 delBtn.appendChild(delText);
 delBtn.setAttribute('class','btn');
 delBtn.setAttribute('onclick','deleteItem(this)');
 
 //create edit btn
 var editBtn = document.createElement('button');
 var editText = document.createTextNode('Edit');
 editBtn.appendChild(editText);
 list.appendChild(delBtn);
 list.appendChild(editBtn);
 editBtn.setAttribute('class','btn');
 editBtn.setAttribute('onclick','editItem(this)')
 olist.appendChild(list);
 addToDo.value = "";


function deleteItem(e){
 e.parentNode.remove()
}

function editItem(e){
 var val = e.parentNode.firstChild.nodeValue;
 var editVal = prompt('Enter edit value',val);
 e.parentNode.firstChild.nodeValue = editVal
}

function delAll(){
 olist.innerHTML = "";
}