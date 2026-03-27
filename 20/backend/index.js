import express from "express"
import cors from "cors"
import todorouter from "./routes/todo.routes.js";
import env from "dotenv";
import mongoose from "mongoose";

env.config();
const app = express();
const PORT = process.env.PORT 
const MONGODB_URI = process.env.MONGO_URI

async function connectdb(){
    try {
        const connobj = await mongoose.connect(MONGODB_URI);
        console.log("connection success");
    
    } catch (error) {
        console.log("mongodb error", error);
    }
}

connectdb();


app.use(cors());
app.use(express.json());
app.use("/api",todorouter)
app.get("/",(req,res)=>{
    res.json({"status":"server okay"})
})
app.listen(PORT,()=>{
    console.log(`listning on http://localhost:${PORT}`);
})



