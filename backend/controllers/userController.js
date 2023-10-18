const db = require('../db/model');
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);

const userController = {};

userController.signUp = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const password_hash = bcrypt.hashSync(password, salt);
    const response = await db.query(
      `INSERT INTO users(username, password_hash) VALUES('${username}', '${password_hash}');`,
    );
    next();
  } catch (err) {
    next(err);
  }
};

userController.login = async (req, res, next) => {
  try {
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
