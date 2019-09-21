const BasePage = require("./basePage");
const countryList = [
  "Home",
  "What we do",
  "Who we are",
  "Governance and regulation",
  "Reports and policies",
  "Blog",
  "Media Centre"
];

class LoginPage extends BasePage {
  get countries() {
    return $$(
      "#__next > div > div > header > div > nav > div > div > div > ul"
    );
  }

  goHome() {
    super.home();
  }

  get getTitle() {
    return $("head > title");
  }

  title() {
    return this.getTitle.waitForDisplayed().getText(); //browser.getTitle()
  }

  getCountries() {
    return this.countries;
  }

}

module.exports = new LoginPage();