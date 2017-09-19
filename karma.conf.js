// Karma configuration
// Generated on Wed Sep 13 2017 21:23:39 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['browserify', 'jasmine-jquery','jasmine'],

    files: [
      'assets/spec/**/*test.js'
      ],

    preprocessors: {
      'assets/spec/**/*test.js' : ['browserify']
    },

    browserify: {
      debug: true,
      transform: [
        ['babelify',{
          presets: ['es2015']
        }]
      ]
    },

    reporters: ['spec'],


    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity,

    browserDisconnectTolerance: 2

  })
}
