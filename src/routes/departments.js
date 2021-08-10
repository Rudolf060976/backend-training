const express = require('express');

const router = express.Router();

router.get('/getAll', (req, res, next) => {
  try {
    res.status(200).json({
      error: null,
      ok: true,
      status: 200,
      message: 'Success',
      data: null
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;