const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000
const mongoDB = require("./db");
app.use(cors());
app.use((req , res , next) =>{
    res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With , Content-Type , Accept"
    );
    next();
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require('./Router/CreateUser'));
app.use('/api',require('./Router/Displaydata'));
// app.use('/api',require('./Router/UserDetails'));
mongoDB();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
