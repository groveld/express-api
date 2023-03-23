// src/models/User.js
class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

const users = [
  new User(
    '64325ff9-334e-4a5f-84a5-341cfe072894',
    'martin',
    '$2a$12$tBDAY9m4doLIkGuRhyUmnu5Ka85v1.V/M5xXj3gg9t5TBQMtalPhW',
  ),
  new User(
    'd60c6899-5399-4356-8ea6-1197d4bf4b81',
    'bart',
    '$2a$12$H97/Xa84Wa.VPXMpvNK5HeF1AQ0nkDPc2a4UXg4jqjynfYpPns3yq',
  ),
  new User(
    'd60c6899-5399-4356-8ea6-1197d4bf4b81',
    'username',
    '$2a$12$nZ34J7K0/KyAurWtot64RemFjL2Lfw3bUoELWVD72P2gHFSw5QV0K',
  ),
];

module.exports = {
  User,
  users,
};
