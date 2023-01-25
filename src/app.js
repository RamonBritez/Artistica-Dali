const express = require('express');
const app = express();
const path = require('path');
const PORT = 3002;

app.use(express.static('public'));

/* Template engine */
app.set('view engine', 'ejs');
app.set('views', './src/views');

/* Routers */
const indexRouter = require('./routes')

/* Middlewares Routes */
app.use('/', indexRouter)







app.listen(PORT, () => {
    console.log(`Servidor listen in port ${PORT}\n  http://localhost:${PORT}`)
})