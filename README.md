# TODO Application
A full stack application that can be used to manage a list of tasks. 

![todolist.png](doc%2Ftodolist.png)


## Features
- [x] Add a task
- [x] Delete a task
- [x] Mark a task as done
- [x] List all tasks
- [x] Find tasks by keyword

## Design

This application is designed in three parts:
1. Single Page Application (SPA) using ReactJS
2. RESTful API using Spring Boot
3. MongoDB as the database

![design.png](doc%2Fdesign.png)

## How to run

The whole app can be run as containers using Docker Compose so you only need docker installed.
```
docker-compose up --build
```
This will build all the 3 containers such as SPA, API & MongoDB, and run them.

You can also run each part separately.

### SPA
Details can be found 
[Front-end TODO SPA](frontend%2FREADME.md)

### API
Details can be found
[Back-end TODO API](backend%2FREADME.md)


