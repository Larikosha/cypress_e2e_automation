Feature: Login page

        General Login test

Scenario: Login as main user
        Given a user opens login page
        When a user enters the 'username'
        And a user enters the 'password'
        And a user click the button 'Submit'
        Then a user logged in susscessfully