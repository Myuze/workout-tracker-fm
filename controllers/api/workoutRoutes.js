// Workout Routes
const router = require('express').Router();
const { Workout } = require('../../models');

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

router.get('/range', async (req, res) => {

});

module.exports = router;
