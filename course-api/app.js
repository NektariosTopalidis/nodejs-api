const express = require('express');
const bodyParser = require('body-parser');

const db = require('./util/db');

const feedRouter =require('./routes/feed');

const path = require('path');


const app = express();


app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname)))

// db.execute('SELECT * FROM test WHERE id=?',[1])
//     .then(([result]) => {
//         console.log(result)
//     })
//     .catch(err => {console.log(err)})
// MPORW NA TO KANW RETURN MESA SE KAPOIO FUNCTION KAI NA TO XRHSIMOPOIHSW SAN OBSERVABLE THS ANGULAR

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed',feedRouter);



app.listen(8080);
