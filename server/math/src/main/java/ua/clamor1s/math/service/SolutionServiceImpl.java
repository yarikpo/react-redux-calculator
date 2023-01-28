package ua.clamor1s.math.service;

import org.springframework.stereotype.Service;
import ua.clamor1s.math.dto.SolutionsDto;
import ua.clamor1s.math.model.Solution;

import java.util.Arrays;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class SolutionServiceImpl implements SolutionService {

    @Override
    public Solution generateRandomSolution() {
        Solution solution = Solution.builder()
                .leftValue(getRandomNumber(0, 30))
                .rightValue(getRandomNumber(0, 30))
                .symbol(getRandomMathSymbol())
                .build();
        return solution;
    }

    @Override
    public SolutionsDto generateRandomSolutions(Integer count) {
        SolutionsDto solutions = new SolutionsDto();

        solutions.getSolutions().addAll(
                Arrays.stream(new int[count])
                .mapToObj(solution -> generateRandomSolution().toString())
                .toList()
        );

        return solutions;
    }

    private Character getRandomMathSymbol() {
        switch (getRandomNumber(1, 4)) {
            case 1: return '+';
            case 2: return '-';
            case 3: return 'X';
            case 4: return '/';
            default: return null;
        }
    }

    private int getRandomNumber(int min, int max) {
        return ThreadLocalRandom.current().nextInt(min, max + 1);
    }
}
