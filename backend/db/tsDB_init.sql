CREATE TABLE users (
  user_id serial PRIMARY KEY NOT NULL,
  username varchar(50) NOT NULL,
  password_hash varchar(255) NOT NULL,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP
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

CREATE TABLE sessions (
  user_id integer NOT NULL REFERENCES users(user_id),
  session_id VARCHAR(255) NOT NULL PRIMARY KEY, 
  -- session_ json NOT NULL, -- might need, idk yet
  expire timestamp(5) NOT NULL
)

-- probably not needed
-- ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

-- ALTER TABLE "posts" ADD FOREIGN KEY ("technology_id") REFERENCES "technologies" ("technology_id");


-- -- javascript: Serial, techname/varchar, desc/text, icon/varchar, tag/varchar, 
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('Javascript', 'Dynamically Typed, Scripting Language of the Webpage',  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'Language'); 
-- -- typescript
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('Typescript', 'Strict syntactical superset of JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 'Language');  
-- -- react
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('React', 'JavaScript library for building user interfaces', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg', 'Framework'); 
-- -- redux
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('Redux', 'Predictable state container for JavaScript apps', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', 'Library'); 
-- -- nodeJS
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('nodeJS', 'Server-side JavaScript runtime environment', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg', 'Runtime');  
-- -- Express
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('Express', 'Web application framework for Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 'Framework');  
-- -- webpack
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('Webpack', 'Module bundler for JavaScript applications', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', 'Bundler');  
-- -- GoLang
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('GoLang', 'Programming language developed by Google', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', 'Language');  
-- -- Rust
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('Rust', 'Systems programming language focused on safety and speed', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg', 'Language'); 
-- -- Docker
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('Docker', 'Containerization platform for developing, shipping, and running applications', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg', 'DevOps');
-- -- mySQL
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('mySQL', 'Open-source relational database management system', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg', 'Database');
-- -- MongoDB
INSERT INTO technologies(technology_name, description, icon, tags) VALUES ('MongoDB', 'Document-oriented NoSQL database', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg', 'Database');