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

## Best practices

- Use HTTPS for secure communication.
- Validate and sanitize user input to prevent injection attacks.
- Implement rate limiting to prevent DDoS attacks.
- Use strong authentication mechanisms, such as JWT or OAuth.
- Keep your dependencies up to date to mitigate known vulnerabilities.
- Use proper error handling and logging to identify and fix issues promptly.
- Implement proper access controls and follow the principle of least privilege.
- Enable security headers, such as Content Security Policy, to protect against cross-site scripting (XSS) and other attacks.
- Regularly audit and review your code for security issues.
- Test your application using automated testing tools and perform regular security assessments.
