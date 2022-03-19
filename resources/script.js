
//toggle menu

let menu_toggler = document.getElementById('menu-btn');
let menu = document.getElementById('menu_card');

menu_toggler.addEventListener('click',()=>{
    menu.classList.toggle('menu-active');
});
menu.addEventListener('click',()=>{
    menu.classList.remove('menu-active')
})

let task_input = document.getElementById('add_task_input');
let add_txt = document.getElementById('add-text')
let cir = document.getElementById('cir');
let emp = document.getElementById('empty');
let task_body = document.getElementById('task_body');


task_input.addEventListener('click',()=>{

    add_txt.classList.add('d-none');
    cir.classList.remove('d-none');

})

task_input.addEventListener('keyup',(e)=>{
    let val = task_input.value;
    if(e.keyCode === 13 && val!=''){

        emp.classList.add('d-none');
        task_body.classList.remove('d-none');
        add_task(val);
        task_input.value = '';

    }else if(val === ''){
        alert('nothing to add')
    }
});

function add_task(task){
    let ul = document.getElementById('task-ul');
    let bt = document.getElementById('beautify')

    let li = document.createElement('li');
    li.className = 'filled-li';

    li.innerHTML = `<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style="background: transparent;border: #fff9 solid;" onclick="complete(this.parentElement)">
    <label class="form-check-label theme-item-txt" for="flexRadioDefault1">
        ${task}
    </label>
    <button class="btn btn-sm btn-danger text-white mx-2 float-end theme-item-bg border-0" onclick="this.parentElement.remove()">
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </button>`;

    bt.insertAdjacentElement('beforebegin',li);

}

function changeTheme(color){
    const txt = document.querySelectorAll('.theme-item-txt');
    const bg = document.querySelectorAll('.theme-item-bg');

    for(var i = 0; i< txt.length; i++){
        txt[i].style.color = color;
    }
    for(var j = 0; j< bg.length; j++){
        bg[j].style.background = color;
    }
}

let completedListUl = document.getElementById('completed-ul');

function complete(li){

 let ul = li.parentElement;
 let task = li.innerText;
 ul.removeChild(li);

 const music = new Audio('/resources/done.mp3');
    music.play();
    music.loop =false;
    music.playbackRate = 2;

 let newLi = document.createElement('Li');

    newLi.innerHTML = `
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style="background: transparent;border: 8px #788CDE solid;" onclick="complete(this.parentElement)">
    <label class="form-check-label theme-item-txt text-decoration-line-through" for="flexRadioDefault1">
        ${task}
    </label>
    <button class="btn btn-sm btn-danger text-white mx-2 float-end theme-item-bg border-0" onclick="this.parentElement.remove()">
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </button>
    `;
    newLi.classList.add('my-3')
    completedListUl.insertAdjacentElement('beforeend',newLi)
  
}