# todo-api
This application is built using Spring Boot. It provides RESTful API to manage a list of tasks.

This api exposes the following endpoints:
* GET /api/tasks
* GET /api/tasks/{id}
* POST /api/tasks
* PUT /api/tasks/{id}
* DELETE /api/tasks/{id}
* GET /api/tasks/search?keyword={keyword}

## How to run
```
mvn clean
mvn compile                     // compile only
mvn test                        // run tests only
mvn install
```

## mangodb
```
docker run --name mongodb -d -p 64000:27017 mongo 
```

## Postman

Postman collection can be found in [postman](postman). This collection can be used to call the API endpoints.

## References
* [Springboot TODO app](https://github.com/wazooinc/spring-boot-todo-application)
* [Springboot with h2 database](https://www.baeldung.com/spring-boot-h2-database)
* Mango installation https://chanakambkarunarathna.medium.com/deploy-spring-boot-application-and-mongodb-as-containers-using-docker-5e38c687525b