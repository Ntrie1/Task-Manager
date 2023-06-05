const router = require('express').Router();

const taskController = require('../controllers/taskController')
const homeController = require('../controllers/homeController')



//router.use(homeController);
router.use(homeController);
router.use('/submit', taskController);
router.get('*', (req, res) =>{
    res.redirect('/404')
})



module.exports = router;