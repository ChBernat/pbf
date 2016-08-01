CREATE TABLE ${schema~}.Posts
(
  id SERIAL PRIMARY KEY,
  title text NOT NULL,
  content text NOT NULL,
  creation_date timestamp NOT NULL,
  last_modification_date timestamp NOT NULL,
  user_id int NOT NULL,
  uploaded_files text[],
)
