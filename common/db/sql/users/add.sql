INSERT INTO ${schema~}.Users
(
  username,
  password,
  avatar_name,
  creation_date,
  last_modification_date,
  group_id
)

VALUES
(
  ${username},
  ${password},
  ${avatar_name},
  ${creation_date},
  ${last_modification_date},
  ${group_id}
)
RETURNING id
