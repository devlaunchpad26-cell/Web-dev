import {Router} from "express";
const todorouter = Router();
import { getalltodo,
        addtodo,
        deletealltodo, 
        deletesingletodo } 
        from "../controllers/todo.controller.js";

todorouter.get("/alltodo",getalltodo)
todorouter.post("/addtodo",addtodo)
todorouter.delete("/removeall",deletealltodo)
todorouter.delete("/removetodo/:id",deletesingletodo)

export default todorouter;