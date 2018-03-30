var express =require('express')
var router = express.Router()
var multer = require('multer')
var upload = multer({dest:'uploads/'})

router.get('/',function(req,res){
	res.render('index')
})
router.post('/upload',upload.single('file'),function(req,res){
	// console.log(req.file)
	res.send(req.file)
})

module.exports = router