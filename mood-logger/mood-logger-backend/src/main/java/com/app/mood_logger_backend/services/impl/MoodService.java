package com.app.mood_logger_backend.services.impl;

import com.app.mood_logger_backend.entity.Mood;
import com.app.mood_logger_backend.repository.MoodRepository;
import com.app.mood_logger_backend.services.IMoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MoodService implements IMoodService {

    private final MoodRepository moodRepository;

    @Override
    public void saveMood(Mood mood) {
        // no need to check for duplicate because moods can be duplicated
        moodRepository.save(mood);
    }

    @Override
    public List<Mood> fetchListOfMoods() {
        // no security checks for now
        List<Mood> listOfMood = moodRepository.findAll(Sort.by(Sort.Direction.DESC, "loggedAt"));
        return listOfMood;
    }
}
