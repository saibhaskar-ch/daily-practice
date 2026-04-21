package com.app.mood_logger_backend.services;

import com.app.mood_logger_backend.entity.Mood;

import java.util.List;

public interface IMoodService {

    void saveMood(Mood mood);

    List<Mood> fetchListOfMoods();
}
