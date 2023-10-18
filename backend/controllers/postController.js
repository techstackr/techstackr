const db = require('../db/model');
const postController = {};

postController.createPost = async (req, res, next) => {
  try {
    console.log('createPost');
    const { user_id, post_content, user_rating, technology_id } = req.body;
    // const user_id = req.session.user_id; // will be needed for later
    //omit post_id since it is serial
    // console.log('body: ', req.body);
    // console.log(user_id, post_content, user_rating, technology_id);
    const ourQ = `INSERT INTO posts(user_id, post_content, post_timestamp, user_rating, technology_id ) VALUES(${user_id}, \'${post_content}\', NOW(), ${user_rating}, ${technology_id})`;
    const response = await db.query(ourQ);

    // INSERT INTO posts(user_id, post_content, post_timestamp, user_rating, technology_id ) VALUES(1, 'hello man', NOW(), 2, 3)
    //
    // (user_id, post_content, post_timestamp, user_rating, technology_id )

    // console.log('response: ', response.rows);
    // ('SELECT users.username, posts.post_content, post_timestamp FROM users INNER JOIN posts ON users.user_id = posts.user_id');
    res.locals.postBody = response.rows;
    next();
  } catch (err) {
    next(err);
  }
};

/**
 * @postData
user_id: username
technology_id: technology_name
technology_id: icon
post_content
post_timestamp (converted????)
user_rating
technology_id: tags
 */
postController.getPosts = async (req, res, next) => {
  try {
    const response = await db.query(
      'SELECT users.username, posts.post_content, posts.post_timestamp, posts.user_rating, technologies.technology_name, technologies.description, technologies.icon FROM posts INNER JOIN users ON users.user_id = posts.user_id INNER JOIN technologies ON posts.technology_id = technologies.technology_id',
    );
    // console.log('getPost');

    res.locals.feed = response.rows;
    // console.log('Get request' + response.rows);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = postController;
