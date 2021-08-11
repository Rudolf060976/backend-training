const getAll = (req, res, next) => {
  try {
    res.status(200).json({
      error: null,
      ok: true,
      status: 200,
      message: 'Success',
      data: req.angie
    });
  } catch (error) {
    next(error);
  }
};

const getUser = (req, res, next) => {
  const { userId } = req.params;

  try {
    res.status(200).json({
      error: null,
      ok: true,
      status: 200,
      message: 'Success',
      data: userId
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getUser
};
