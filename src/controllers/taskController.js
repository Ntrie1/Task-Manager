const router = require('express').Router();
const taskManager = require('../managers/tasks')



router.post('/', async (req, res) =>{
     const name = req.body.name;
    
        await taskManager.create({name});
   
   res.redirect('/')
});

module.exports = router;