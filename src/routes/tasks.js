const router = require('express').Router();

const taskController = require('../controllers/taskController')



//router.use(homeController);
router.get('/', function (req, res) {
    res.sendFile(path.resolve('src/public/index.html'));

    console.log(req.body)
})
router.use('/submit', taskController);
router.get('*', (req, res) =>{
    res.redirect('/404')
})



module.exports = router;