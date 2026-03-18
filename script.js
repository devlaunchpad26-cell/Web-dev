// const promiseone = new Promise((resolve,reject)=>{

//     let a =true;

//     if(a){
//         console.log("resolved")
//         resolve("return in resolved");
//     }else{
//         console.log("reject")
//         reject(new Error("promise rejected error occured"));
//     }

// })


// async function promisecalled(){
//     let response =await promiseone
//     console.log(response);

// }



// async function fetchdata(){
//     let res = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await res.json()
//     console.log(data)
// }

// fetchdata();


let data = { 
    title : 'BMW Pencil'
}


let stringifiedjson = JSON.stringify(data);



async function senddata(){
    let response = await fetch("https://example.org/post", 
                 {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        },
                    body:stringifiedjson
        
        })

        let jsonres = await response.json();

        console.log(jsonres);

}

senddata();













