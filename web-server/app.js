const express = require('express');

const app = express();
const port = process.env.PORT;
require('dotenv').config();


app.set('view engine', 'hbs')
//Servir contenido estático
app.use(express.static('public'));


app.get('/', (req, res)=>  {
    res.render('home');
})

app.get('/generic', (req, res)=>  {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res)=>  {
    res.sendFile(__dirname + '/public/elements.html')
})


app.get('*', (req, res)=> {
    res.set
    res.send('404 |Page Not found')
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})

