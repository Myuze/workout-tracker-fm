// Base Routes
const router = require('express').Router();
const path = require('path');

router.use('/exercise', async (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname, '../public/exercise.html'));
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error'});
  }
});

router.use('/stats', async (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname, '../public/stats.html'));
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error'});
  }
});

module.exports = router;
