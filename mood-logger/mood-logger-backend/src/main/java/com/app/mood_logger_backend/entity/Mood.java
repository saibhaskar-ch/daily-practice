package com.app.mood_logger_backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Entity
@Component
@Getter
@Setter
@Scope("prototype")
public class Mood {

    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mood;

    @Column(updatable = false)
    private LocalDateTime loggedAt;
}
