package com.github.sarvesh27sharma.todoapi;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Slf4j
@Service
@RequiredArgsConstructor
public class TodoService {

    @Autowired
    private final TodoRepository todoRepository;

    private static final String WRONG_TODO_TITLE = "0";

    public Flux<Todo> findAll() {
        return todoRepository.findAll()
                .filter(wrongTodo -> !wrongTodo.getTitle().equalsIgnoreCase(WRONG_TODO_TITLE));
    }

    public Mono<Todo> findById(String title) {
        return todoRepository.findById(title)
                .filter(wrongTodo -> !wrongTodo.getTitle().equalsIgnoreCase(WRONG_TODO_TITLE));
    }

    public Mono<Todo> save(Todo todo) {
        return todoRepository.save(todo);
    }

    public Mono<Todo> update(String title, Todo todo) {
        return todoRepository.findById(title)
                .filter(wrongTodo -> !wrongTodo.getTitle().equalsIgnoreCase(WRONG_TODO_TITLE))
                .flatMap(existingTodo -> {
                    existingTodo.setDescription(todo.getDescription());
                    existingTodo.setCompleted(todo.isCompleted());
                    existingTodo.setTodoDate(todo.getTodoDate());
                    return todoRepository.save(existingTodo);
                });
    }

    public Mono<Void> delete(String title) {
        return todoRepository.deleteById(title);
    }

    public Flux<Todo> findAllTodosByTitle(String title) {
        return Flux.from(todoRepository.findById(title))
                .filter(wrongTodo -> !wrongTodo.getTitle().equalsIgnoreCase(WRONG_TODO_TITLE));
    }
}
