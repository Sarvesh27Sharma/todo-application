package com.github.sarvesh27sharma.todoapi;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/todos")
@RequiredArgsConstructor
@Slf4j
public class TodoController {

    private final TodoService todoService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Flux<Todo> getAllTodos() {
        log.info("Getting all todos");
            return todoService.findAll();
    }

    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public Flux<Todo> getAllTodosByTitle(@RequestParam("title") String title) {
        log.info("Getting all todos by a title :{}", title);
        return todoService.findAllTodosByTitle(title);
    }

    @GetMapping("/{title}")
    @ResponseStatus(HttpStatus.OK)
    public Mono<Todo> getTodoById(@PathVariable("title") String title) {
        log.info("Getting a todo by title :{}", title);
        return todoService.findById(title);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Todo> createTodo(@RequestBody Todo todo) {
        log.info("creating a todo :{}", todo);
        return todoService.save(todo);
    }

    @PutMapping("/{title}")
    @ResponseStatus(HttpStatus.OK)
    public Mono<Todo> updateTodo(@PathVariable("title") String title, @RequestBody Todo todo) {
        log.info("Updating a todo: {}, by title :{}", todo, title);
        return todoService.update(title, todo);
    }

    @DeleteMapping("/{title}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Mono<Void> deleteTodo(@PathVariable("title") String title) {
        log.info("deleting a todo of title :{}", title);
        return todoService.delete(title);
    }
}
