package ua.clamor1s.math.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ua.clamor1s.math.dto.SolutionsDto;
import ua.clamor1s.math.model.Solution;
import ua.clamor1s.math.service.SolutionService;

import java.util.List;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE,
            value = "/math")
@Slf4j
public class MathController {

    @Autowired
    private SolutionService service;

    @GetMapping(value = "/examples")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin(origins = "*")
    public SolutionsDto getSolutions(@RequestParam(required = false) Integer count) {
        if (count == null) count = 4;
        log.info("Connected with count = " + count + '.');
        return service.generateRandomSolutions(count);
    }

}
