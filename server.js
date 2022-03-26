const express = require('express');
const app = express();
const port = 4000;

const authMiddleware = (req, res, )=>{
    const hours= new Date().getHours();
    const day = new Date().getDay();
    
    if (hours < 9 || hours >= 17 || days == 0 ||  days == 6) {
        res.send('you are not authorized ');
    } else {
        res.sendFile(__dirname + '/static'); 
  }
}

app.use(authMiddleware);

app.use(express.static(__dirname + '/static/home.html'));
app.use(express.static(__dirname + '/static/contact.html'));
app.use(express.static(__dirname + '/static/services.html'));
app.use(express.static(__dirname + '/static/style.css'));

app.get("/", (req, res) => {
    res.sendFile(__dirname +'/static/home.html');
});


app.get("/contact", (req, res) => {
    res.sendFile(__dirname +'/static/contact.html');
});


app.get("/services", (req, res) => {
    res.sendFile(__dirname +'/static/services.html');
});


app.get("/static/style.css", (req, res) => {
    res.sendFile(__dirname +'/static/style.css');
});

app.listen(port, (err)=> err ? console.error (err):console.log('The server is running ',port));