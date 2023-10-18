const db = require('../db/model');
const techController = {};

techController.getTechnologies = async (req, res, next) => {
  try {
    const query1 =
      'SELECT technology_id, technology_name, description, icon FROM technologies;';
    const response = await db.query(query1);
    res.locals.allTech = response.rows;
    // console.log(res.locals.allTech);
    next();
  } catch (err) {
    next(err);
  }
};

techController.getTechIcon = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id)
    const query1 = `SELECT icon FROM technologies WHERE technology_name = \'${id}\'`;
    const response = await db.query(query1);
    // console.log(response.rows[0])
    res.locals.techIcon = response.rows[0];
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = techController;
