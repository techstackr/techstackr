CREATE TABLE users (
  user_id serial PRIMARY KEY NOT NULL,
  username varchar(50) NOT NULL,
  password_hash varchar(50) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE technologies (
  technology_id serial PRIMARY KEY NOT NULL,
  technology_name varchar,
  description text,
  icon varchar,
  tags varchar
);

CREATE TABLE posts (
  post_id serial PRIMARY KEY NOT NULL,
  user_id integer NOT NULL REFERENCES users(user_id),
  post_content text,
  post_timestamp timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_rating integer NOT NULL CHECK (user_rating >= 1 AND user_rating <= 5),
  technology_id integer NOT NULL REFERENCES technologies(technology_id)
);

-- probably not needed
-- ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

-- ALTER TABLE "posts" ADD FOREIGN KEY ("technology_id") REFERENCES "technologies" ("technology_id");


-- -- javascript: Serial, techname/varchar, desc/text, icon/varchar, tag/varchar, 
INSERT INTO technologies VALUES ('Javascript', 'Dynamically Typed, Scripting Language of the Webpage',  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'Language'); 
-- -- typescript
INSERT INTO technologies VALUES ('Typescript', 'Strict syntactical superset of JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 'Language');  
-- -- react
INSERT INTO technologies VALUES ('React', 'JavaScript library for building user interfaces', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg', 'Framework'); 
-- -- redux
INSERT INTO technologies VALUES ('Redux', 'Predictable state container for JavaScript apps', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', 'Library'); 
-- -- nodeJS
INSERT INTO technologies VALUES ('nodeJS', 'Server-side JavaScript runtime environment', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg', 'Runtime');  
-- -- Express
INSERT INTO technologies VALUES ('Express', 'Web application framework for Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 'Framework');  
-- -- webpack
INSERT INTO technologies VALUES ('Webpack', 'Module bundler for JavaScript applications', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', 'Bundler');  
-- -- GoLang
INSERT INTO technologies VALUES ('GoLang', 'Programming language developed by Google', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', 'Language');  
-- -- Rust
INSERT INTO technologies VALUES ('Rust', 'Systems programming language focused on safety and speed', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg', 'Language'); 
-- -- Docker
INSERT INTO technologies VALUES ('Docker', 'Containerization platform for developing, shipping, and running applications', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg', 'DevOps');
-- -- mySQL
INSERT INTO technologies VALUES ('mySQL', 'Open-source relational database management system', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg', 'Database');
-- -- MongoDB
INSERT INTO technologies VALUES ('MongoDB', 'Document-oriented NoSQL database', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg', 'Database');


INSERT INTO users VALUES ('Cris-Morales', 'imadmin')


INSERT INTO posts VALUES (userName, techName/id, )