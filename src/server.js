const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const file = `${path.join(__dirname)}/pages/index.html`
    if (!file) {
        console.log('File not found')
        res.sendStatus(404)
    }
    res.sendFile(file)
})

app.get('/script/:path', (req, res) => {
    const file = `${path.join(__dirname)}/pages/${req.params.path}`
    if (!file) {
        console.log('File not found')
        res.sendStatus(404)
    }
    res.sendFile(file)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})