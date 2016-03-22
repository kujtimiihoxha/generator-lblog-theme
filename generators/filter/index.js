
'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');


module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('filterName', { type: String, required: true });
    // And you can then access it later on this way; e.g. CamelCased
  },
  //Writing Logic here
  //string.charAt(0).toUpperCase() + string.slice(1);
  writing:  function () {
    this.fs.copyTpl(
      this.templatePath('_custom.filter.js.tmp'),
      this.destinationPath('src/filters/'+_.camelCase(this.filterName)+'.filter.js'),{
        filterName:this.filterName.charAt(0).toUpperCase() + _.camelCase(this.filterName).slice(1)
      }
    );
  }

}

);
