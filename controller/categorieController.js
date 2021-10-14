const STATUS = require('../util/status');
const categorieService = require('../services/categorieService');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const toReturn = await categorieService.create(name);
    return res.status(STATUS.STATUS_201_CREATED).json(toReturn);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};