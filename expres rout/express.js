import express from "express";
const app = express();
const port = 3000;

app.get("/numbers/:name", (req,res)=>{
   // main(req,res)
   res.send("success using get");
});

app.post("/numbers", (req, res) => {
   res.send("success using post");
});

app.put("/numbers", (req, res) => {
   res.send("success using put");
});

app.delete("/numbers", (req, res) => {
   res.send("success using delete");
});

app.listen(port, () => {
   console.log(` app listening on port ${port}`);
});