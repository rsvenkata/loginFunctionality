class BasePage{
  home(){
    browser.url('')
  }

badhnekayi(selector){
   $(selector).click()
}
}

module.exports = BasePage