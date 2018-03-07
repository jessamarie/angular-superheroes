// Karma configuration
// Generated on Wed Jan 27 2016 14:11:34 GMT-0200 (Horário brasileiro de verão)

module.exports = function (config) {
  var APP_ROOT_PATH = './'
  var NODE_MODULES_ROOT_PATH = 'node_modules/'

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
      /* External dependencies */
      NODE_MODULES_ROOT_PATH + 'babel-polyfill/dist/polyfill.js',
      NODE_MODULES_ROOT_PATH + 'angular/angular.min.js',
      NODE_MODULES_ROOT_PATH + 'angular-bind-html-compile-ci-dev/angular-bind-html-compile.js',
      NODE_MODULES_ROOT_PATH + 'angular-mocks/angular-mocks.js',

      /* Application files */
      APP_ROOT_PATH + 'app.js',
      APP_ROOT_PATH + 'src/**/*.js'
      // OR tests last?
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app.js': 'coverage',
      'src/**/!(*.test).js': 'coverage',
      'tests/*.test.js': 'browserify'
    },

    browserify: {
      debug: true,
      transform: ['babelify']
    },
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-browserify'
    ],
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    // web server port
    port: 9176,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
