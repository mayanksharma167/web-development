h1 = document.querySelector('h1');


// function changeColor(color,delay,nextColorChange) {
//     setTimeout(()=>{
        
//     h1.style.color= color;  //change the text color of 'h1' to the parameter passed in
//     if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red",2000,()=>{
//     changeColor("green",2000,()=>{
//         changeColor("yellow",2000,()=>{
//             changeColor("Orange",2000,()=>{
//                 changeColor("blue",2000);
//             });
//         });
//     });
// });  


function changeColor(color,delay) {
    return new Promise((resolve, reject)=> {
    setTimeout(()=>{    
    h1.style.color= color;  //change the text color of 'h1' to the parameter passed in
    resolve("color changed");
    },delay)
});
}
// changeColor("red", 1000)
// .then(() => {
//     changeColor("green", 1000);
//     return changeColor( "yellow", 1000 );
// })
// .then(
//     () => {
//         changeColor("pink", 1000)
// })


async function demo(){
    await changeColor( "red", 3000 )
    await changeColor("green", 1000)    
}
