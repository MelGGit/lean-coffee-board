const express = require('express')
const router = express.Router()
const User = require('../models/User')

// get all users
router.get('/', async (req, res, next) => {
  res.json(await User.find())
})

// get user with id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findById(id))
})

router.post('/', async (req, res, next) => {
  res.status(201).json(await User.create(req.body))
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findByIdAndUpdate(id, req.body))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.sendStatus(204).json(await User.findByIdAndDelete(id))
})

module.exports = router
