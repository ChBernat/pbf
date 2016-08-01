INSERT INTO ${schema~}.Comments
(
  content,
  user_id,
  post_id,
  creation_date,
  last_modification_date
)
VALUES
(
  ${content},
  ${user_id},
  ${post_id},
  ${creation_date},
  ${last_modification_date}
)
RETURNING id
