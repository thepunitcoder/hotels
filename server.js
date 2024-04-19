const express = require('express');
const app = express();
const db = require('./db')


const bodyParser = require('body-parser');
app.use(bodyParser.json());

/////////////////////////////////////////////////////

app.get('/',(req,res)=>{
    res.send("get this method")
})


const personroutes = require('./Personrouters');
app.use('/person',personroutes);

/**********************************************************/

const Menuroutes = require('./Menuroutes');
app.use('/menu',Menuroutes);

// CREATE SERVER //////////

app.listen(2000,()=>{
    console.log('LISTENING');
})
// CREATE SERVER //////////