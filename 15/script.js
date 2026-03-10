// const om = document.getElementById("btn")


// function singleclick(){
//     console.log(" single clicked on button")
// }


// function doubleclicked(){
//     console.log("double clicked on button")
// }

// function mouseoverhappened(){
//     console.log("mouse over happned")
// }


// om.addEventListener("click",singleclick);
// om.addEventListener("mouseover",mouseoverhappened);






// const incrementButton = document.querySelector("#increment");
// const decrementButton = document.querySelector("#decrement");
// let count = 0 ;

// document.getElementById("count").innerText= count;

// incrementButton.addEventListener("click",()=>{
//     count++;
//     document.getElementById("count").innerText= count;
//     console.log(count)
// })

// decrementButton.addEventListener("click",()=>{
//     count--;
//     document.getElementById("count").innerText= count;
//     console.log(count)
// })





const circle = document.getElementById("circle");


circle.classList.add("duration-300")
// circle.style.transform = 'translateX(200px)';

// circle.style.backgroundColor = 'black';


const body = document.getElementsByTagName("body")[0]



body.addEventListener("mousemove",(event)=>{
    console.log(`${event.x} , ${event.y}`)
    circle.style.transform = `translate(${event.clientX}px,${event.clientY}px)`;
    
})


