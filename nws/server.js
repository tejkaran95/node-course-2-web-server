const express = require('express');

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) =>
{
var now = new Date().toString();
console.log(`${now}: ${req.method} ${req.url}`);
next();
});

app.use((req, res, nect)=> {
res.render('maintenance.hbs');
});

app.get('/', (req, res) =>
{
    res.send({
        name: 'Tejkaran',
        likes: [ 
            'sandas',
            'susu'
        ]
    });
});

app.get('/bad', (req,res) => {
    res.send ({
        errorMessage: ' unable to handle request'
    });
});

app.get('/about', (req,res) =>
{
    res.render('about.hbs');
});
app.listen(3000);



console.log("server is now up and running..")