# Simple Gulp setup with automated JS testing

This is a simple Gulp setup for generating static sites. It inculdes:

* ES6
* Sass
* Bootstrap 4
* Browsersync
* Karma as testing environment
* Jasmine testing framework for JavaScript
* Jasmine jquery plugin

## Installation

## Getting started

Note: the installation is based on OS X, for other systems please see the respective documentations.

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node`
    * [Yarn](https://yarnpkg.com/lang/en/): `brew install yarn`
    * [Karma](https://karma-runner.github.io/1.0/index.html): `karma --save-dev`
    * Run `yarn install` to install all packages
* Taks:
    * `yarn dev` — watches the project with continuous rebuild, launchs a  server via [browsersync](https://www.browsersync.io/docs/gulp) and launces a Chrome browser for continuous testing. Please note that the browser needs to be open.
    * `yarn test` - starts continuous testing.
    * `yarn build` — builds minified project for production.

## Testing setup

My testing is launched in a Chrome Browser. Karma is able to launch in multiple browsers, PhantomJS etc. See a list of launches and more info at the [dokumentation](https://karma-runner.github.io/1.0/config/browsers.html). You can can adjust the configurations to fit your needs easily!

### Where and how to write tests

The test are located at the `spec` folder in `assets`. Their name need to end wit "test.js" in order for karma to identifiy them as test files. 

The tests are written in [Jasmine](https://jasmine.github.io/), see the [documetation](https://jasmine.github.io/api/2.6/global) for more infos. I included the [Jasmine jquery plugin](https://github.com/velesin/jasmine-jquery) which adds some jquery specific matchers as well as a API for HTML, CSS, and JSON fixtures.

## Directory structure

```
├── assets/
│   ├── js/
│   ├── scss/
│   ├── js/
│   ├── spec/
│   ├── static/
```



