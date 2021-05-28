const express = require('express')
const uuidv4 = require('uuid').v4
const router = express.Router()

let cards = [
  {
    title: 'The way to coffeve',
    author: 'Mel',
    votes: 1,
    id: '0',
  },
  {
    title: 'Coffeve v2',
    author: 'Donutu Trumpet',
    votes: 100,
    id: '1',
  },
]

// get all cards
router.get('/', (req, res, next) => {
  res.json(cards)
})

// get specific card
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const foundCard = cards.find(card => card.id === id)
  foundCard ? res.json(foundCard) : next()
})

router.post('/', (req, res, next) => {
  const newCard = { ...req.body, id: uuidv4() }
  cards.push(newCard)
  res.status(201).json(newCard)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params
  const cardIndex = cards.findIndex(card => card.id === id)
  cards[cardIndex] = { ...cards[cardIndex], ...req.body }
  res.json(cards[cardIndex])
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  cards = cards.filter(card => card.id !== id)
  res.sendStatus(204)
})

module.exports = router
