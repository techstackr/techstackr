const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session)
const {pool} = require('./db/model.js')
const cookieParser = require('cookie-parser');


const userRouter = require('./routers/userRouter');
const technologyRouter = require('./routers/technologyRouter');
const postRouter = require('./routers/postRouter');
const userController = require('./controllers/userController.js');


const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



//handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));
// app.use(session({
//   store: new pgSession({
//     pool:pool,
//     tableName: 'sessions'
//   }),
//   resave: false,
//   saveUninitialized: false,
//   secret: false
// }))


// userController.isLoggedIn();
//define routes here
app.use('/user', userRouter);
app.use('/tech', technologyRouter);
app.use('/posts', postRouter);

//catch all router
app.use((req, res) => {
  return res.status(404).send('Nothing Found');
});

//express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
