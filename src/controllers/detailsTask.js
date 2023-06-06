const router = require('express').Router();
const taskManager = require('../managers/tasks')



router.get('/:taskId', async (req, res) =>{
   const taskId = req.params.taskId;
   const task = await taskManager.getOne(taskId);
  console.log(task)
   
   res.render('task', { task })
});

router.post('/:taskId/update', async (req, res) => {
   const taskId = req.params.taskId;
   const {name} = req.body
 
 
  console.log(name);



 
 
 });

module.exports = router;



