// Workout Routes
const router = require('express').Router();
const { Workout } = require('../../models');

// Get aggregated workout exercises data
router.get('/', async (req, res) => {
  try {
    const workoutData = await Workout.aggregate([{
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }]);

    res.status(200).json(workoutData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error', error: error });
  }
});

// Add new workout
router.post('/', async ({ body }, res) => {
  try {
    const workout = new Workout(body);

    const workoutData = await Workout.create(workout);

    res.status(200).json(workoutData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error', error: error });
  }
});

// Update workout exercise
router.put('/:id', async ({ body, params }, res) => {
  try {
    const exercise = await Workout.findOneAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } },
      { new: true }
    );

    res.status(200).json(exercise);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error', error: error });
  }
});

// Get Last 7 Workouts sorted by day decending 
router.get('/range', async (req, res) => {
  try {
    const workoutData = await Workout.aggregate([{
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }]).sort({ day: -1 }).limit(7);

    res.status(200).json(workoutData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error', error: error });
  }
});

module.exports = router;
