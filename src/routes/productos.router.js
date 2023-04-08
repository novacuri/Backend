const express = require('express')
const { uploader } = require('../utils/multer')


const router = express.Router()

const mid1 = (req, res, next)=>{
    req.dato1 = 'dato 1'
    next()
}


router.get('/', mid1,(req, res)=>{
    return res.send({
        dato: req.dato1
    })
})
router.post('/', uploader.single('file') ,(req, res)=>{
    const { title, thumbnail } = req.body

    return res.json({
        title,
        dato1: req.dato1,
        dato2: req.dato2,
        thumbnail
    })
})

module.exports = router