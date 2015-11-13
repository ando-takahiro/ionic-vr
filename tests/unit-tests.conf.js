// Karma configuration
// Generated on Wed Nov 11 2015 16:13:25 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../www',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'lib/ionic/js/ionic.bundle.js',
      'lib/angular-mocks/angular-mocks.js',
      'js/three.min.js',
      'js/controls/OrbitControls.js',
      'js/controls/DeviceOrientationControls.js',
      'js/Detector.js',
      'js/libs/dat.gui.min.js',
      'js/effects/StereoEffect.js',
      'js/geometries/TeapotBufferGeometry.js',
      'js/libs/stats.min.js',
      'js/app.js',
      'js/services.js',
      'js/controllers.js',
      '../tests/unit-tests/**/*.js',

      'templates/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'templates/*.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      /*stripPrefix: 'templates/',
      prependPrefix: 'www/tampltes/'*/
      moduleName: 'starter'
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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
