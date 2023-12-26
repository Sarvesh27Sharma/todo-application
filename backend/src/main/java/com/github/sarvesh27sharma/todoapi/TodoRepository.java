package com.github.sarvesh27sharma.todoapi;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends ReactiveMongoRepository<Todo, String> {
}
