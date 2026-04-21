package com.app.mood_logger_backend.controllers;

import com.app.mood_logger_backend.dto.MoodDto;
import com.app.mood_logger_backend.entity.Mood;
import com.app.mood_logger_backend.services.IMoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping(path = "/api",produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class MoodController {

    private final IMoodService iMoodService;

    @PostMapping("/moods")
    public ResponseEntity<String> saveMood(@RequestBody MoodDto moodDto) {
        Mood mood = new Mood();
        mood.setMood(moodDto.getMood());
        mood.setLoggedAt(LocalDateTime.now());
        iMoodService.saveMood(mood);
        return ResponseEntity.status(HttpStatus.CREATED).body("Successfully saved the mood.");
    }

    @GetMapping("/moods")
    public ResponseEntity<List<Mood>> fetchListOfMoods() {
        return ResponseEntity.status(HttpStatus.OK).body(iMoodService.fetchListOfMoods());
    }
}
