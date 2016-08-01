INSERT INTO ${schema~}.Groups
(
  id,
  name,
  permissions
)
VALUES
(
  ${name},
  ${permissions}
)

RETURNING id
