# express-api

## FIX LINT ERRORS

- /github/workspace/assets/openapi.yaml

  `319:9 error path-params Operation must define parameter "{id}" as expected by path "/users/{id}". paths./users/{id}.get`

- In /github/workspace/.husky/pre-commit line 2:

  ```bash
  . "$(dirname -- "$0")/_/husky.sh"
  ^-----------------------------^ SC1091 (info): Not following: ./_/husky.sh: openBinaryFile: does not exist (No such file or directory)
  For more information:
  https://www.shellcheck.net/wiki/SC1091 -- Not following: ./\_/husky.sh: open...

  ```

## TODO

- come up with best way to name files (best practices)
- setup mysql database so i can start using user authentication and have no more secrets in sourcecode
- use redis cache for ratelimiter and for jwt tokens?
- update cors middleware to use regular expression array for domains so any subdomain could be accepted
- decide on best rate limiting settings to use in production
