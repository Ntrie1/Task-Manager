const express = require('express');
const app = express();




const expressConfig = require('./config/expressConfig');
const dbConnect = require('./config/dbConfig');
const routes = require('./routes/tasks');
const pugConfiguration = require('./config/pugConfig');

const PORT = 3000;

pugConfiguration(app);
expressConfig(app);


// app.use(express.json());
app.use(routes);
app.get('/edit', (req, res) => {
    // Perform any necessary logic or processing here
  
    // Redirect to the desired page
    res.redirect('/edit-page');
  });

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