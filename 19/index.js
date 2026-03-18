import e from "express";
const PORT = 3000
const app = e();

// /projects
// /education
// /skills
// /experience
// /languages
// /about


app.get("/projects",(req,res)=>{
    res.send("my projects")
})
app.get("/about",(req,res)=>{
    res.send("my about")
})
app.get("/edu",(req,res)=>{
    res.send("my education")
})
app.get("/skills",(req,res)=>{
    res.send("my skills")
})

app.listen(PORT,()=>{
    console.log(`app is listning on http://localhost:${PORT}`)
})

