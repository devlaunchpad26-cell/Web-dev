import express from "express"
import cors from "cors"
import todorouter from "./routes/todo.routes.js";
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use("/api",todorouter)
app.get("/",(req,res)=>{
    res.json({"status":"server okay"})
})
app.listen(PORT,()=>{
    console.log(`listning on http://localhost:${PORT}`);
})



