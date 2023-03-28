# express-api

NodeJS
Express
Sequelize
TypeScript (TODO)
ESlint
Prettier
Jest

## TODO

- setup docker database for testing (Redis and MySQL)
- automatically seed the database so i can start testing right away
- `docker run --name mysql-test -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_DATABASE=testdb -p 3306:3306 -d mysql:latest`
- come up with best way to name files (best practices)
- setup mysql database so i can start using user authentication and have no more secrets in sourcecode
- use redis cache for ratelimiter and for jwt tokens?
- update cors middleware to use regular expression array for domains so any subdomain could be accepted
- decide on best rate limiting settings to use in production
