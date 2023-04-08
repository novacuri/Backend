const express = require('express')
const cookieParser = require('cookie-parser')
const { userRouter } = require('./routes/users.router')
const productsRouter = require('./routes/productos.router')
const viewsRouter = require('./routes/views.router')

const app = express()
const PORT = 4000

const mid2 = (req, res, next)=>{
    req.dato2 = 'dato 2'
    next()
}

const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine','handlebars' )

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/static', express.static(__dirname + '/public'))
app.use(cookieParser())

app.use( (req, res, next)=>{
    console.log('Time', Date.now())
    next()
} )

app.use('/views/users', viewsRouter)

app.use('/api/usuarios', userRouter)

app.use('/api/productos', mid2, productsRouter)

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).send('Todo mal')
})

app.listen(PORT, (err) => {
    if (err) return console.log('Error al iniciar el servidor')

    console.log(`Servidor iniciado en el puerto ${PORT}`)
})