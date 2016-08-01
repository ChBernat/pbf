CREATE TABLE ${schema~}.Groups
(
  id SERIAL PRIMARY KEY,
  name varchar(100),
  permissions varchar(50)[]
);
