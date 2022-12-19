import express, { json } from "express";
import router from "./routes/routes.js";

const app = express()


app.use(json());

app.use("/api/movies", router);

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})
