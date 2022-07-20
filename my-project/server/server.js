const express = require('express');
const signUp = express();
var cors = require('cors')
const mysql=require('mysql')

signUp.use(cors())
signUp.use(express.json());
const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "loginsystem",
})

signUp.post("/login", (req, res) => {
    const fname=req.body.fname;
    const email=req.body.email;
    const password1=req.body.password1;
    db.query("INSERT INTO `login`(`full name`, `email`, `password`) VALUES (?,?,?)",[fname,email,password1],(err,result)=>{
        console.log(err);
    })
});

signUp.listen(3000, () => {
  console.log(`Server is running`);
});