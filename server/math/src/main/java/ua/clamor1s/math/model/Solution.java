package ua.clamor1s.math.model;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Solution {

    private Integer leftValue;
    private Integer rightValue;
    private Character symbol;

    @Override
    public String toString() {
        return leftValue.toString() + symbol.toString() + rightValue.toString();
    }

}
