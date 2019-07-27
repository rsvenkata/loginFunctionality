const { Given, Then, When } = require("cucumber");
const loginPage = require("../pages/loginPage");
const countryList = [
  "Home",
  "What we do",
  "Who we are",
  "Governance and regulation",
  "Reports and policies",
  "Blog",
  "Media Centre"
];
const expect = require("chai").expect;

let r = [];

Given(/^I go to the website$/, () => {
  loginPage.home();
});

When(/^I land on the home page$/, () => {
  // loginPage.getCountries().forEach((val, ind, arr) => {
  // });
});

Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
  expect(browser.getTitle()).to.be.eql(title)
});

When(/^I click on the login button$/, () => {
  // expect(browser.getTitle()).to.be.eql(title)
  // loginPage.
  expect(1).eql(1);
}) 

Then(/^login page should be displayed$/, () => {
  // expect(browser.getTitle()).to.be.eql(title)
  // loginPage.
  expect(1).eql(1);
}) 
