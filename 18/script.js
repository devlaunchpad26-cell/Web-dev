// new Promise((resolve,reject)=>{
//         let state = false;

//         if(state){
//             console.log("if executed")
//             resolve();
//         }
//         else{
//             new Error("there is Error")
//             reject();
//         }
// }).then(
//     ()=>{console.log("resolve")}
// ).catch(
//     ()=>{console.log("rejected")}
// )






// setTimeout(()=>{
//             console.log("executed");
//         },2000)

// let data;

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(jsonres => {
//         console.log(jsonres)
//         data = jsonres;    
//         }
//         )


async function apicall(){

   let data = await fetch('https://jsonplaceholder.typicode.com/posts')
   let jsondata = await data.json();
    return jsondata;

}

let btn = document.querySelector("#fetchdata");


btn.addEventListener("click",()=>{
    let mydata = apicall();
    console.log(mydata);
})










