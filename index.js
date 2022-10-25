

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

const categories = require('./Data/category.json')
const course = require('./Data/Course.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/category', (req, res) => {
    res.send(categories)
});
app.get('/course', (req, res) => {
    res.send(course)
    console.log(course)
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})