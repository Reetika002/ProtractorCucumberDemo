Feature: Demo Feature
    Scenario: Add two numbers
        Given I open calculator application
        When I add two numbers 2 and 3
        Then result should be correct

    Scenario Outline:
        Given I open calculator application
        When I add two numbers <num1> and <num2>
        Then result should be correct <result>

        Examples:
            | num1 | num2 | result |
            | 4    | 2    | 6      |
            | 6    | 3    | 9      |