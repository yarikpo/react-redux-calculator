package ua.clamor1s.math.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.extern.jackson.Jacksonized;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Jacksonized
@ToString
public class SolutionsDto {

    private List<String> solutions = new ArrayList<>();

}
