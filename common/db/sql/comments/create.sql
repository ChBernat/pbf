CREATE TABLE ${schema~}.Comments
(
  id SERIAL PRIMARY KEY,
  content text NOT NULL,
  user_id int NOT NULL,
  post_id int NOT NULL,
  creation_date timestamp NOT NULL,
  last_modification_date timestamp NOT NULL
);
