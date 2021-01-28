Feature: Add mytimesheet

  I login and create new my timesheet

  Scenario: Add new my timesheet success and delete by desktop
    Given I open the site "/"
    When I click on the element "loginBtn"
    Then I expect that the title is "Signin"
    When I set "nguyen.pham@enouvo.com" to the inputfield "email"
    And I set "password" to the inputfield "password"
    And I click on the element "signInBtn"
    Then I expect that the title is "Acciona - Linked Site"
    And I wait on element "setDiary" for 20000ms to be displayed
    When I click on the element "myTimeSheet"
    Then I expect that the title is "Acciona - Linked Site"
    And I pause for 2000ms
    And I expect that element "deleteBtn" is displayed and delete
    When I check element and click on the element "addAnotherEntryBtn"
    Then I wait on element "jobInput" for 5000ms to be displayed
    When I click on the element "jobInput"
    And I pause for 1000ms
    And I press "ArrowDown"
    And I press "Enter"
    And I pause for 3000ms
    When I click on the element "costCodeInput"
    And I pause for 1000ms
    And I press "ArrowDown"
    And I press "Enter"
    # And I wait on element "locationIDInput" for 10000ms to be enabled
    When I click on the element "locationIDInput"
    And I pause for 1000ms
    And I press "ArrowDown"
    And I press "Enter"
    And I pause for 2000ms
    When I click on the element "leaveTypeInput"
    And I pause for 2000ms
    And I press "ArrowDown"
    And I press "Enter"
    When I click on the element "timeAllowanceInput"
    And I pause for 1000ms
    And I press "ArrowDown"
    And I press "Enter"
    When I click on the element "LAHAInput"
    And I pause for 1000ms
    And I press "ArrowDown"
    And I press "Enter"
    And I click on the element "startTimeInput"
    And I clear the inputfield "startTimeInput"
    When I set "0200PM" to the inputfield "startTimeInput"
    And I click on the element "endTimeInput"
    And I clear the inputfield "endTimeInput"
    When I set "0500PM" to the inputfield "endTimeInput"
    And I click on the element "saveBtn"
    Then I wait on element "addNewTimeSheetSuccessMessage" for 5000ms to be displayed
    And I pause for 2000ms
    And I refresh the page
    Then I wait on element "deleteBtn" for 5000ms to be displayed
    And I pause for 2000ms
    When I click on the element "deleteBtn"
    And I pause for 2000ms
    Then I wait on element "deleteConfirmBtn" for 5000ms to be displayed
    When I click on the element "deleteConfirmBtn"
    Then I wait on element "deleteNewTimeSheetSuccessMessage" for 5000ms to be displayed
    And I pause for 2000ms

#   Scenario: Add new my timesheet unsuccess with empty data by desktop
#     Given I open the site "/"
#     When I click on the element "loginBtn"
#     Then I expect that the title is "Signin"
#     When I set "nguyen.pham@enouvo.com" to the inputfield "email"
#     And I set "password" to the inputfield "password"
#     And I click on the element "signInBtn"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I wait on element "setDiary" for 20000ms to be displayed
#     When I click on the element "myTimeSheet"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I pause for 2000ms
#     And I expect that element "deleteBtn" is displayed and delete
#     When I check element and click on the element "addAnotherEntryBtn"
#     Then I wait on element "jobInput" for 5000ms to be displayed
#     When I click on the element "jobInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "costCodeInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "locationIDInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "leaveTypeInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "timeAllowanceInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "LAHAInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     And I click on the element "startTimeInput"
#     And I clear the inputfield "startTimeInput"
#     And I click on the element "endTimeInput"
#     And I clear the inputfield "endTimeInput"
#     And I click on the element "saveBtn"
#     Then I wait on element "costCodeError" for 5000ms to be displayed
#     And I pause for 2000ms
  
#   Scenario: Add new my timesheet unsuccess with empty Job Input by desktop
#     Given I open the site "/"
#     When I click on the element "loginBtn"
#     Then I expect that the title is "Signin"
#     When I set "nguyen.pham@enouvo.com" to the inputfield "email"
#     And I set "password" to the inputfield "password"
#     And I click on the element "signInBtn"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I wait on element "setDiary" for 20000ms to be displayed
#     When I click on the element "myTimeSheet"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I pause for 2000ms
#     And I expect that element "deleteBtn" is displayed and delete
#     When I check element and click on the element "addAnotherEntryBtn"
#     Then I wait on element "jobInput" for 5000ms to be displayed
#     When I click on the element "jobInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "costCodeInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "locationIDInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 2000ms
#     When I click on the element "leaveTypeInput"
#     And I pause for 2000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "timeAllowanceInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "LAHAInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I click on the element "startTimeInput"
#     And I clear the inputfield "startTimeInput"
#     When I set "0200PM" to the inputfield "startTimeInput"
#     And I click on the element "endTimeInput"
#     And I clear the inputfield "endTimeInput"
#     When I set "0500PM" to the inputfield "endTimeInput"
#     And I click on the element "saveBtn"
#     Then I wait on element "costCodeError" for 5000ms to be displayed
#     And I pause for 2000ms

#   Scenario: Add new my timesheet unsuccess with empty CostCode Input by desktop
#     Given I open the site "/"
#     When I click on the element "loginBtn"
#     Then I expect that the title is "Signin"
#     When I set "nguyen.pham@enouvo.com" to the inputfield "email"
#     And I set "password" to the inputfield "password"
#     And I click on the element "signInBtn"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I wait on element "setDiary" for 20000ms to be displayed
#     When I click on the element "myTimeSheet"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I pause for 2000ms
#     And I expect that element "deleteBtn" is displayed and delete
#     When I check element and click on the element "addAnotherEntryBtn"
#     Then I wait on element "jobInput" for 5000ms to be displayed
#     When I click on the element "jobInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 3000ms
#     When I click on the element "costCodeInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "locationIDInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 2000ms
#     When I click on the element "leaveTypeInput"
#     And I pause for 2000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "timeAllowanceInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "LAHAInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I click on the element "startTimeInput"
#     And I clear the inputfield "startTimeInput"
#     When I set "0200PM" to the inputfield "startTimeInput"
#     And I click on the element "endTimeInput"
#     And I clear the inputfield "endTimeInput"
#     When I set "0500PM" to the inputfield "endTimeInput"
#     And I click on the element "saveBtn"
#     Then I wait on element "costCodeError" for 5000ms to be displayed
#     And I pause for 2000ms
    
#  Scenario: Add new my timesheet success with empty TimeAllowance Input by desktop
#     Given I open the site "/"
#     When I click on the element "loginBtn"
#     Then I expect that the title is "Signin"
#     When I set "nguyen.pham@enouvo.com" to the inputfield "email"
#     And I set "password" to the inputfield "password"
#     And I click on the element "signInBtn"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I wait on element "setDiary" for 20000ms to be displayed
#     When I click on the element "myTimeSheet"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I pause for 2000ms
#     And I expect that element "deleteBtn" is displayed and delete
#     When I check element and click on the element "addAnotherEntryBtn"
#     Then I wait on element "jobInput" for 5000ms to be displayed
#     When I click on the element "jobInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 3000ms
#     When I click on the element "costCodeInput"
#     And I pause for 2000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "locationIDInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 2000ms
#     When I click on the element "leaveTypeInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "timeAllowanceInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "LAHAInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I click on the element "startTimeInput"
#     And I clear the inputfield "startTimeInput"
#     When I set "0200PM" to the inputfield "startTimeInput"
#     And I click on the element "endTimeInput"
#     And I clear the inputfield "endTimeInput"
#     When I set "0500PM" to the inputfield "endTimeInput"
#     And I click on the element "saveBtn"
#     Then I wait on element "addNewTimeSheetSuccessMessage" for 5000ms to be displayed
#     And I pause for 2000ms
#     And I refresh the page
#     Then I wait on element "deleteBtn" for 5000ms to be displayed
#     And I pause for 2000ms
#     When I click on the element "deleteBtn"
#     And I pause for 2000ms
#     Then I wait on element "deleteConfirmBtn" for 5000ms to be displayed
#     When I click on the element "deleteConfirmBtn"
#     Then I wait on element "deleteNewTimeSheetSuccessMessage" for 5000ms to be displayed
#     And I pause for 2000ms

# Scenario: Add new my timesheet success with empty LeaveType Input by desktop
#     Given I open the site "/"
#     When I click on the element "loginBtn"
#     Then I expect that the title is "Signin"
#     When I set "nguyen.pham@enouvo.com" to the inputfield "email"
#     And I set "password" to the inputfield "password"
#     And I click on the element "signInBtn"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I wait on element "setDiary" for 20000ms to be displayed
#     When I click on the element "myTimeSheet"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I pause for 2000ms
#     And I expect that element "deleteBtn" is displayed and delete
#     When I check element and click on the element "addAnotherEntryBtn"
#     Then I wait on element "jobInput" for 5000ms to be displayed
#     When I click on the element "jobInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 3000ms
#     When I click on the element "costCodeInput"
#     And I pause for 2000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "locationIDInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 2000ms
#     When I click on the element "leaveTypeInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     When I click on the element "timeAllowanceInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "LAHAInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I click on the element "startTimeInput"
#     And I clear the inputfield "startTimeInput"
#     When I set "0200PM" to the inputfield "startTimeInput"
#     And I click on the element "endTimeInput"
#     And I clear the inputfield "endTimeInput"
#     When I set "0500PM" to the inputfield "endTimeInput"
#     And I click on the element "saveBtn"
#     Then I wait on element "addNewTimeSheetSuccessMessage" for 5000ms to be displayed
#     And I pause for 2000ms
#     And I refresh the page
#     Then I wait on element "deleteBtn" for 5000ms to be displayed
#     And I pause for 2000ms
#     When I click on the element "deleteBtn"
#     And I pause for 2000ms
#     Then I wait on element "deleteConfirmBtn" for 5000ms to be displayed
#     When I click on the element "deleteConfirmBtn"
#     Then I wait on element "deleteNewTimeSheetSuccessMessage" for 5000ms to be displayed
#     And I pause for 2000ms
    
# Scenario: Add new my timesheet success with empty LAHA Input by desktop
#     Given I open the site "/"
#     When I click on the element "loginBtn"
#     Then I expect that the title is "Signin"
#     When I set "nguyen.pham@enouvo.com" to the inputfield "email"
#     And I set "password" to the inputfield "password"
#     And I click on the element "signInBtn"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I wait on element "setDiary" for 20000ms to be displayed
#     When I click on the element "myTimeSheet"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I pause for 2000ms
#     And I expect that element "deleteBtn" is displayed and delete
#     When I check element and click on the element "addAnotherEntryBtn"
#     Then I wait on element "jobInput" for 5000ms to be displayed
#     When I click on the element "jobInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 3000ms
#     When I click on the element "costCodeInput"
#     And I pause for 2000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "locationIDInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 2000ms
#     When I click on the element "leaveTypeInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "timeAllowanceInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "LAHAInput"
#     And I pause for 1000ms
#     And I press "Delete"
#     And I click on the element "startTimeInput"
#     And I clear the inputfield "startTimeInput"
#     When I set "0200PM" to the inputfield "startTimeInput"
#     And I click on the element "endTimeInput"
#     And I clear the inputfield "endTimeInput"
#     When I set "0500PM" to the inputfield "endTimeInput"
#     And I click on the element "saveBtn"
#     Then I wait on element "addNewTimeSheetSuccessMessage" for 5000ms to be displayed
#     And I pause for 2000ms
#     And I refresh the page
#     Then I wait on element "deleteBtn" for 5000ms to be displayed
#     And I pause for 2000ms
#     When I click on the element "deleteBtn"
#     And I pause for 2000ms
#     Then I wait on element "deleteConfirmBtn" for 5000ms to be displayed
#     When I click on the element "deleteConfirmBtn"
#     Then I wait on element "deleteNewTimeSheetSuccessMessage" for 5000ms to be displayed
#     And I pause for 2000ms
    
# Scenario: Add new my timesheet unsuccess with empty StartTime Input by desktop
#     Given I open the site "/"
#     When I click on the element "loginBtn"
#     Then I expect that the title is "Signin"
#     When I set "nguyen.pham@enouvo.com" to the inputfield "email"
#     And I set "password" to the inputfield "password"
#     And I click on the element "signInBtn"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I wait on element "setDiary" for 20000ms to be displayed
#     When I click on the element "myTimeSheet"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I pause for 2000ms
#     And I expect that element "deleteBtn" is displayed and delete
#     When I check element and click on the element "addAnotherEntryBtn"
#     Then I wait on element "jobInput" for 5000ms to be displayed
#     When I click on the element "jobInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 3000ms
#     When I click on the element "costCodeInput"
#     And I pause for 2000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "locationIDInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 2000ms
#     When I click on the element "leaveTypeInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "timeAllowanceInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "LAHAInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I click on the element "startTimeInput"
#     And I pause for 1000ms
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I click on the element "endTimeInput"
#     And I clear the inputfield "endTimeInput"
#     When I set "0500PM" to the inputfield "endTimeInput"
#     And I click on the element "saveBtn"
#     And I click on the element "saveBtn"
#     Then I wait on element "startTimeErrorMessage" for 5000ms to be displayed
#     And I pause for 2000ms

# Scenario: Add new my timesheet unsuccess with empty EndTime Input by desktop
#     Given I open the site "/"
#     When I click on the element "loginBtn"
#     Then I expect that the title is "Signin"
#     When I set "nguyen.pham@enouvo.com" to the inputfield "email"
#     And I set "password" to the inputfield "password"
#     And I click on the element "signInBtn"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I wait on element "setDiary" for 20000ms to be displayed
#     When I click on the element "myTimeSheet"
#     Then I expect that the title is "Acciona - Linked Site"
#     And I pause for 2000ms
#     And I expect that element "deleteBtn" is displayed and delete
#     When I check element and click on the element "addAnotherEntryBtn"
#     Then I wait on element "jobInput" for 5000ms to be displayed
#     When I click on the element "jobInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 3000ms
#     When I click on the element "costCodeInput"
#     And I pause for 2000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "locationIDInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I pause for 2000ms
#     When I click on the element "leaveTypeInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "timeAllowanceInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     When I click on the element "LAHAInput"
#     And I pause for 1000ms
#     And I press "ArrowDown"
#     And I press "Enter"
#     And I click on the element "startTimeInput"
#     And I clear the inputfield "startTimeInput"
#     When I set "0200PM" to the inputfield "startTimeInput"
#     And I click on the element "endTimeInput"
#     And I pause for 1000ms
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I press "Backspace"
#     And I click on the element "saveBtn"
#     Then I wait on element "endTimeErrorMessage" for 5000ms to be displayed
#     And I pause for 2000ms