package ua.clamor1s.math.service;

import ua.clamor1s.math.dto.SolutionsDto;
import ua.clamor1s.math.model.Solution;

import java.util.List;

public interface SolutionService {

    Solution generateRandomSolution();

    SolutionsDto generateRandomSolutions(Integer count);

}
