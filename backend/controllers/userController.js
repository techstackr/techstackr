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

userController.signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(username, password)
    console.log('test');
    const queryText = 'SELECT * FROM users WHERE username = $1';
    const values = [username];

    const result = await db.query(queryText, values);
    res.locals.userID = result.rows[0].user_id;

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

userController.setIDCookie = async (req, res, next) => {
  try {
   const { userID } = res.locals;
    res.cookie('user_id', userID, {
      maxAge: 24 * 60 * 60 * 1000,            
    });
    next();
  } catch (err) {
    next(err);
  }
};

userController.createSession = async (req, res, next) => {
  try {
    next();
  } catch (err) {
    next(err);
  }
};

userController.isLoggedIn = async (req, res, next) => {
  console.log('loginyay')
    if(req.cookies.user_id){
      next();
    } else {
      res.redirect('/signin');
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
