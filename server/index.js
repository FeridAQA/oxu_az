const express= require('express')
const cors= require('cors')
const app = express()
const dotenv = require('dotenv/config')

app.use(express.json())
app.use(cors());


const port=process.env.PORT || 4000

// db  connet
const {db_connet} = require('./src/config/mongo_dg')
db_connet()


// routes
const proRoute = require('./src/router/product')
app.use('/api/v1/',proRoute)


app.listen(port,function(err){
    if (err) console.log(err);
    console.log(`Server is running ${port}`)
})