FROM bellsoft/liberica-runtime-container:jdk-21-slim-musl
MAINTAINER sarvesh27sharma
COPY target/todo-api-0.0.1-SNAPSHOT.jar todo-api.jar
ENTRYPOINT ["java","-jar","/todo-api.jar"]