let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'red', 'purple', 'green'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress',()=>{
    if(!started){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    } ,250);
}

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash')
    } ,250);   
}

function checkAns(idx){
    console.log("currentlevel", level);
    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            console.log("same value");
        setTimeout(levelUp,1000);
        }
        
    } else{
        h2.innerHTML = `Game Over!your score was <b>${level}</b> <br> Press any key to start.`;
        reset();
    }

    }



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level:  ${level}`;
    //random button chose
    let randIdx = Math.floor(Math.random()*3) ;
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    btnFlash(randbtn);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randbtn)
    gameSeq.push(randColor);// add random color to the sequence

}


function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click', btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}