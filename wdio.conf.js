var baseUrl;

if(baseUrl === undefined)
   baseUrl = 'https://www.bbc.com'

exports.config = {
  runner: "local",
  headless: true,

  specs: ["./test/features/*.feature"],

  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      // 'goog:chromeOptions': {
      //   args: ['--headless', '--disable-gpu'],
      // }
    },

      // {
      //   maxInstances: 5,
      //   browserName: 'firefox',
        // "moz:firefoxOptions": {
        //   args: ['-headless']
        // }
      // },
  ],

  logLevel: "info",
  bail: 0,

  baseUrl: baseUrl,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "cucumber",

  cucumberOpts: {
    require: ["./test/steps/*.js"],
    backtrace: false,
    compiler: [],
    dryRun: false,
    failFast: false,
    format: ["pretty"],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tags: [],
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },

  beforeSession: function beforeTest() {
    require("@babel/register");
  },

  services: ["selenium-standalone"],
  reporters: ["spec", "allure"],

  // mochaOpts: {
  //   ui: "bdd",
  //   timeout: 60000
  // }
}