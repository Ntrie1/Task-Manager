const router = require('express').Router();

const taskController = require('../controllers/taskController')
const homeController = require('../controllers/homeController')
const taskDetails = require('../controllers/detailsTask')



//router.use(homeController);
router.use(homeController);
router.use('/submit', taskController);
router.use('/details', taskDetails)
// router.get('*', (req, res) =>{
//     res.redirect('/404')
// })



module.exports = router;