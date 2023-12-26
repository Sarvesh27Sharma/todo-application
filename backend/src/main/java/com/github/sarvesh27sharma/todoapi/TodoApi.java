package com.github.sarvesh27sharma.todoapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
@SpringBootApplication(scanBasePackages = "com.github.sarvesh27sharma.todoapi")
@EnableMongoRepositories(basePackages = "com.github.sarvesh27sharma.todoapi")
public class TodoApi {

	public static void main(String[] args) {
		SpringApplication.run(TodoApi.class, args);
	}

}
