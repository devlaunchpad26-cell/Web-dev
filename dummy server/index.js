import express from 'express'


const PORT = 3000;


let app = express();

app.get("/",(req,res)=>{
  console.log("HOME ROUTE")
})

app.listen(PORT,()=>{
  console.log(`listning on http://localhost:${PORT}`);
})