const myMiddleware = (description) => {
  return (req, res, next) => {
    req.angie = description;
    next();
  };
};

module.exports = myMiddleware;
