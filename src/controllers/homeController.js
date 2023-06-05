const router = require('express').Router();
const taskManager = require('../managers/tasks');


router.get('/', async (req, res) =>{
    const allTasks  = await taskManager.getAll().lean();
   
       
        res.render('index', { allTasks })
      
 
})








module.exports = router;