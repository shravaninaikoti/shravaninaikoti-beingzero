const express = require('express')
const app = express()
const port = 3000
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendfile(__dirname+'/frontend/html/home.html'))
var student={"name":"shravani","college":"vnr","reg":1238};
app.get('/data',(req,res)=>res.json(student));
//app.get('/login', (req, res) => res.send('login'))
//app.get('/register', (req, res) => res.send('register'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))