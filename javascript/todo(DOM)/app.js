inp = document.querySelector("input");
btn = document.querySelector("button");
ul = document.querySelector("ul");


btn.addEventListener("click",() =>{
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText = "delete";
    
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";

    delbtn.addEventListener( "click" , ()=> {  
        item.remove();   
    });
});

// let delbtns = document.querySelectorAll(".delete");
// for (let delbtn of delbtns) {
//     delbtn.addEventListener("click", () => {
//         let par = delbtn.parentElement;
//         console.log(par);
//     });
// }
