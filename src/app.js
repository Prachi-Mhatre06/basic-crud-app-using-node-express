const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('dotenv').config();
const customeRoutes =  require('./customer/routes');

const app = express();
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', customeRoutes)

app.listen(process.env.PORT);