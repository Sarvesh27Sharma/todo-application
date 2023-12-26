package com.github.sarvesh27sharma.todoapi;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Todo {

    @MongoId(FieldType.STRING)
    private String title;
    private String description;
    private boolean isCompleted;
    private LocalDate todoDate;
}
