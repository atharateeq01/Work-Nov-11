let addtodolistbutton = document.getElementById("addtodolist");
let title = document.getElementById("title");
let dis = document.getElementById("dis");
let todolist = document.getElementById("todolist");
let htmlcode = '';

addtodolistbutton.addEventListener('click', function(){

    // var div = document.createElement('div');
    // var divtitle = document.createElement('div');
    // var divbody = document.createElement('div');

    // div.classList.add('card-content');
    // divbody.classList.add('txt-muted');
    // divtitle.classList.add('card-title');

    // todolist.appendChild(div);
    // todolist.appendChild(divtitle);
    // todolist.appendChild(divbody);

    // divtitle.innerText = title.value;
    // divbody.innerText = dis.value;



    var hr = document.createElement('hr');
    var t = document.createElement('p');
    var d = document.createElement('p');

    t.classList.add('title');
    d.classList.add('text');
    hr.classList.add('hr');

    t.innerText = title.value;
    d.innerText = dis.value;

    todolist.appendChild(t);
    todolist.appendChild(d);
    todolist.appendChild(hr);


 

    t.addEventListener('click', function(){

        t.style.textDecoration = "line-through";
        d.style.textDecoration = "line-through";
    })
    d.addEventListener('click', function(){

        t.style.textDecoration = "none";
        d.style.textDecoration = "none";
    })

    
    
})