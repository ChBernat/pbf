INSERT INTO ${schema~}.Posts
(
  title,
  content,
  creation_date,
  last_modification_date,
  user_id,
  uploaded_files
)

VALUES
(
  ${title},
  ${content},
  ${creation_date},
  ${last_modification_date},
  ${user_id},
  ${uploaded_files}
)
RETURNING id
