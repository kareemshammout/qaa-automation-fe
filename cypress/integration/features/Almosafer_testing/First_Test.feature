Feature: First Test


  Scenario Outline: random_selection_scenario
    Given user select english language
    Then user validate home page
    When user navigate to flights-home page
    Then user validate flights-home page
    When user select random flight search with origin "<origin>" and "<destination>"
    And user select dates
    When user search for flights
    Then no results has been returned

    Examples:
      | origin |destination|
      | DXB, AUH, SHJ, JED, RUH |    AMM, CAI, DEL, KHI, PAR          |




  Scenario Outline: specific_selection_scenario
    Given user select english language
    Then user validate home page
    When user navigate to flights-home page
    Then user validate flights-home page
    When user select his flight search with origin "<origin>" and "<destination>"
    And user select dates
    When user search for flights
    And select first lowest point of stops
    When user select flight
    And user fill contact data info
    Then warning message should display

    Examples:
      | origin |destination|
      | DsXB |   JED      |
      | AUH |   CAI      |
      | SHJ |   DEL      |
      | JED |   KHI      |
      | RUH |   PAR      |
