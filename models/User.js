const mongoose = require('mongoose')
require('mongoose-type-email')

const userSchema = {
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 16 },
  email: { type: mongoose.SchemaTypes.Email, allowBlank: true },
}

module.exports = mongoose.model('User', userSchema)
