const db = require('../db/model');
const techController = {};

techController.getTechnologies = async (req, res, next) => {
  try {
    const query1 =
      'SELECT technology_id, technology_name, description, icon FROM technologies;';
    const response = await db.query(query1);
    res.locals.allTech = response.rows;
    console.log(res.locals.allTech);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = techController;
