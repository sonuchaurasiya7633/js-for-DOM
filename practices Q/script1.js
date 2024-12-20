// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt)=>{
    
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };
// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked");
//     console.log(evt);
// });
// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked-handler1");
//     console.log(evt);
// });
// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked-handler2");
//     console.log(evt);
// });

//let div  = document.querySelector("div");
// div.onmouseover =(evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     console.log("div are clicked and inside in the div");
// }
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked-handler1");
//     console.log(evt);
// });
// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked-handler2");
//     console.log(evt);
// });
// const handler3 = ()=>{
//     console.log("button was clicked-handler3");
// }
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",(evt)=>{
//     console.log("button was clicked-handler4");
//     console.log(evt);
// });
// btn1.removeEventListener("click",handler3);
// practices question toogle btton through js
// let modeBtn = document.querySelector("#mode");
// let currMode ="light";
// modeBtn.addEventListener("click",() =>{
//     if(currMode==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// })
// Tonggle button create using css
// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode ="light";
// modeBtn.addEventListener("click",() =>{
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// })