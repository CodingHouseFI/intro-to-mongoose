'use strict';

const mongoose = require('mongoose');

let superheroSchema = new mongoose.Schema({
  name: String,
  powers: [String],
  nemesis: String
});

let Superhero = mongoose.model('Superhero', superheroSchema);

module.exports = Superhero;
