Feature: Application login

  @Smoke
  Scenario: Homepage displayed on default login
    Given user is on netbanking landing page
    When user login into the application with "Jin" and "1234"
    Then home page is displyed
    And diaplayed all the card like rewards card travel cared oil cards "true"
    
    
     Scenario: Homepage displayed on default login
    Given user is on netbanking landing page
    When user login into the application with "Jhon" and "122"
    Then home page is displyed
    And diaplayed all the card like rewards card travel cared oil cards "false"
    

   