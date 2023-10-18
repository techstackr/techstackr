const db = require('../db/model');
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);

const userController = {};

userController.signup = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const password_hash = bcrypt.hashSync(password, salt);

    const queryText =
      'INSERT INTO users(username, password_hash) VALUES($1, $2)';
    const values = [username, password_hash];

    await db.query(queryText, values);
    next();
  } catch (err) {
    next(err);
  }
};

userController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const queryText = 'SELECT * FROM users WHERE username = $1';
    const values = [username];

    const result = await db.query(queryText, values);

    // user does not exist
    if (!result.rows.length) {
      throw new Error('Invalid username or password');
    }
    if (!bcrypt.compareSync(password, result.rows[0].password_hash)) {
      throw new Error('Invalid username or password');
    }
    next();
  } catch (err) {
    next(err);
  }
};

userController.setCookie = async (req, res, next) => {
  try {
    next();
  } catch (err) {
    next(err);
  }
};

userController.setSSIDCookie = async (req, res, next) => {
  try {
    next();
  } catch (err) {
    next(err);
  }
};

userController.isLoggedIn = async (req, res, next) => {
  try {
    next();
  } catch (err) {
    next(err);
  }
};

userController.startSession = async (req, res, next) => {
  try {
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
