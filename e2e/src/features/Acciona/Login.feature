Feature: Login valadition

  Scenario: Login with success data by desktop
    Given I open the site "/"
    When  I click on the element "loginBtn"
    Then I expect that the title is "Signin"
    When  I set "nguyen.pham@enouvo.com" to the inputfield "email"
    And  I set "password" to the inputfield "password"
    And  I click on the element "signInBtn"
    Then I expect that the title is "Acciona - Linked Site"
    # And I expect that element "backToDashboard" becomes displayed
    # When I click on the element "backToDashboard"
    Then I expect that element "setDiary" becomes displayed
    
  Scenario: Login with empty data by desktop
    Given I open the site "/"
    When  I click on the element "loginBtn"
    Then I expect that the title is "Signin"
    When  I set "" to the inputfield "email"
    And  I set "" to the inputfield "password"
    And  I click on the element "signInBtn"
    Then I expect that element "setDiary" becomes not displayed

  Scenario: Login with empty userName by desktop
    Given I open the site "/"
    When  I click on the element "loginBtn"
    Then I expect that the title is "Signin"
    When  I set "" to the inputfield "email"
    And  I set "password" to the inputfield "password"
    And  I click on the element "signInBtn"
    Then I expect that element "setDiary" becomes not displayed

  Scenario: Login with empty password by desktop
    Given I open the site "/"
    When  I click on the element "loginBtn"
    Then I expect that the title is "Signin"
    When  I set "nguyen.pham@enouvo.com" to the inputfield "email"
    And  I set "" to the inputfield "password"
    And  I click on the element "signInBtn"
    Then I expect that element "setDiary" becomes not displayed

  Scenario: Login with incorrect userName by desktop
    Given I open the site "/"
    When  I click on the element "loginBtn"
    Then I expect that the title is "Signin"
    When  I set "nguyen.pham123@enouvo.com" to the inputfield "email"
    And  I set "password" to the inputfield "password"
    And  I click on the element "signInBtn"
    Then I expect that element "userNameError" becomes displayed

  Scenario: Login with incorrect password by desktop
    Given I open the site "/"
    When  I click on the element "loginBtn"
    Then I expect that the title is "Signin"
    When  I set "nguyen.pham@enouvo.com" to the inputfield "email"
    And  I set "password123" to the inputfield "password"
    And  I click on the element "signInBtn"
    Then I expect that element "userNameError" becomes displayed

    # Scenario: Login with space data by desktop
    # Given I open Acciona linkedsite by desktop screen
    # Then I see the Acciona logo 
    # When I click on Login to linksite button
    # Then I see Sign in Page
    # When I enter " " data to Email input
    # And I enter " " data to Password input
    # And I click on Sign in button
    # Then I see the error

    # Scenario: Login with empty data by desktop
    # Given I open Acciona linkedsite by desktop screen
    # Then I see the Acciona logo 
    # When I click on Login to linksite button
    # Then I see Sign in Page
    # When I enter "" data to Email input
    # And I enter "" data to Password input
    # And I click on Sign in button
    # Then I cant login