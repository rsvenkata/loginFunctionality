Feature: Basic website
  Inorder to spread awesomeness of webdriverio As a adavocate I want to have a website

  Scenario: Get the title of webpage
    Given I go to the website
    When I land on the home page
    Then I expect the title of the page "BBC - Home"

    Scenario: Testing the login functionality
     Given I go to the website
     When I click on the login button
     Then login page should be displayed