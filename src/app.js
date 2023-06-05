
const express = require('express');
const app = express();
const path = require('path');



app.use(express.json())

const expressConfig = require('./config/expressConfig');
const dbConnect = require('./config/dbConfig');
const routes = require('./routes/tasks')

const PORT = 3000;

expressConfig(app);


app.use(routes);

// app.post('/submit', (req, res) => {
//     const inputData = req.body.name;
//     // Process the data as needed
//     // Example: console.log(inputData);
//     console.log(inputData)
//   });


//app.use('/api/v1/tasks', tasks)

dbConnect()
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.log('DB error: ', err))



app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));