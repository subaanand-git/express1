const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());


app.get('/' , (req,res) => {
    res.sendFile(__dirname + "index.html");
});


app.post('/submit' , (req,res) => {
    const data = req.body;
    console.log(data);
    res.send('<h1 style="text-align:center;color:green;font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;font-size:50px">Registered Successfully <br>your data saved in console of the browser</h1>');
});


app.listen(port , (req) => {
    console.log(`The server is started at http://localhost ${port}`);
});

