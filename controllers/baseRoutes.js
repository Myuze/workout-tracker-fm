// Base Routes
const router = require('express').Router();
const path = require('path');

router.use('/exercise', async (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname, '../public/exercise.html'));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error', error: error });
  }
});

router.use('/stats', async (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname, '../public/stats.html'));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error', error: error });
  }
});

module.exports = router;
