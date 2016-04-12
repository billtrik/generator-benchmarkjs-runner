'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function () {
    this.template('_babelrc', '.babelrc');
    this.template('package.json', 'package.json');
    this.template('index.js', 'index.js');
    this.template('implementations', 'implementations');
  },

  install: function () {
    this.npmInstall();
  }
});
