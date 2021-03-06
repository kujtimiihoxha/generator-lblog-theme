
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
    this.argument('configName', { type: String, required: true });
    // And you can then access it later on this way; e.g. CamelCased
  },
  //Writing Logic here
  //string.charAt(0).toUpperCase() + string.slice(1);
  writing:  function () {
    this.fs.copyTpl(
      this.templatePath('_custom.config.js.tmp'),
      this.destinationPath('src/config/'+_.camelCase(this.configName)+'.config.js'),{
        configName:this.configName.charAt(0).toUpperCase() + _.camelCase(this.configName).slice(1)
      }
    );
  }

}

);
