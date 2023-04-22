const { Router } = require('express')

const userRouter = Router()


let users = []


userRouter.get('/', (req, res)=>{
    
    res.send('get de usuarios')
})


userRouter.post('/', (req, res)=>{
    const {name, last_name, email, phone} = req.body
    users.push({ id:Date.now(), name, last_name,email, phone })
    return res.json({
        status: 'success',
        message: 'usuario agregado correctamente',
        users
    })
})

module.exports = { 
    userRouter
}