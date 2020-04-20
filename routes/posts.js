const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('')
})

router.get('/:id', (req, res) => {
    res.send('')
})

router.post('/new', (req, res) => {
    res.send('')
})

router.put('/edit/:id', (req, res) => {
    res.send('')
})

router.delete('/delete/:id', (req, res) => {
    res.send('')
})

module.exports = router