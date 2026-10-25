let express = require("express");
let app = express();
let port = 4000;

app.get("/products",(req,res) =>{
    let message = "Here is the list of all products.";
    console.log(`GET ${req.url} - ${message}`);
    res.send(message);
});


app.post("/products",(req,res) =>{
    let message = "A new product has been added.";
    console.log(`POST ${req.url} - ${message}`);
    res.send(message);
});


app.get("/categories",(req,res) =>{
    let message = "Here is the list of all categories.";
    console.log(`GET ${req.url} - ${message}`);
    res.send(message);
});


app.post("/categories",(req,res) =>{
    let message = "A new category has been created.";
    console.log(`POST ${req.url} - ${message}`);
    res.send(message);
});

app.use((req,res)=>{
    console.log(`404 - Page Not Found: ${req.method} ${req.url}`);
    res.status(404).send("<h1>404 - Page Not Found</h1>");
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})