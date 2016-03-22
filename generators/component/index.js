
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
    this.argument('componentName', { type: String, required: true });
    // And you can then access it later on this way; e.g. CamelCased
  },
  //Writing Logic here
  //string.charAt(0).toUpperCase() + string.slice(1);
  writing:  function () {
    this.fs.copyTpl(
      this.templatePath('_custom.component.js.tmp'),
      this.destinationPath('src/blog/components/'+_.camelCase(this.componentName)+'/'+_.camelCase(this.componentName)+'.component.js'),{
        componentName:this.componentName.charAt(0).toUpperCase() + _.camelCase(this.componentName).slice(1),
        componentNameOrig:_.camelCase(this.componentName)

      }
    );
    this.fs.copy(
      this.templatePath('_custom.component.html'),
      this.destinationPath('src/blog/components/'+_.camelCase(this.componentName)+'/'+_.camelCase(this.componentName)+'.component.html')
    );
    this.fs.copy(
      this.templatePath('_custom.less'),
      this.destinationPath('src/blog/components/'+_.camelCase(this.componentName)+'/'+_.camelCase(this.componentName)+'.less')
    );
  }

}

);
