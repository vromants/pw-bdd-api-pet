Feature: Add new pet

  Scenario: Verify new pet can be added
    Given I logged in as admin
    When I make a call to add new pet with valid params
    Then I see response code is 200 and schema is valid
    And I assert new pet was added


#    Scenario: Verify pet not added with invalid param
#      Given I logged in as admin
#      When I make a call to add new pet with invalid params
#      Then I see reposne code is 405 and schema is valid
#      And I assert new pet was not added
