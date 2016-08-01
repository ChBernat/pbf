CREATE TABLE ${schema~}.Users
(
  id SERIAL PRIMARY KEY,
  username varchar(100) NOT NULL,
  password text NOT NULL,
  avatar_name varchar(200) NOT NULL,
  creation_date timestamp NOT NULL,
  last_modification_date timestamp NOT NULL,
  group_id int NOT NULL
)
