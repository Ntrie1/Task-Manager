
const express = require('express');
const app = express();
const path = require('path');


const expressConfig = require('./config/expressConfig');

const PORT = 3000;

expressConfig(app);

app.use(express.json())

app.get('/', function(req, res) {
    res.sendFile(path.resolve('src/public/index.html') );
  
    console.log(req.body)
});




app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));