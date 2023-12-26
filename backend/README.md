# todo-api
Spring boot api for implementing a to-do list

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

## References
* [Springboot TODO app](https://github.com/wazooinc/spring-boot-todo-application)
* [Springboot with h2 database](https://www.baeldung.com/spring-boot-h2-database)
* Mango installation https://chanakambkarunarathna.medium.com/deploy-spring-boot-application-and-mongodb-as-containers-using-docker-5e38c687525b