// Karma configuration
// Generated on Fri Jul 26 2019 21:52:06 GMT+1000 (GMT+10:00)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'https://code.angularjs.org/1.6.10/angular.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.10/angular-route.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js',
      'https://www.gstatic.com/firebasejs/4.12.1/firebase.js',
      'https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.10/angular-mocks.js',
      'app.js',
      'service/service.js',
      'controllers/*.js',
      'tests/*.js',

      {pattern: 'assets/*.json', watched: true, served: true, included: false}
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
