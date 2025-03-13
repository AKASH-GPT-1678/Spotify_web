
const express = require("express");
const app = express();
const port = 3500;


app.get('/' , (req, res) => {
    res.send("Chanda hai tu Mera Suraj hai tu ")

})

app.listen(port , ()=> {
    console.log(`My Server is lisstening on the port opf ${port}`)
    
})