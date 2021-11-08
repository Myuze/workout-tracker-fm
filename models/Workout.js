// Workout Model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      default: "Enter Type Name",
      allownull: false
    },
    name: {
      type: String,
      default: "Enter Exercise Name",
      allownull: false
    },
    duration: {
      type: Number,
      allownull: false
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
