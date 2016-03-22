'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the badass ' + chalk.red('generator-lblog-theme') + ' generator!'
    ));
    this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname.split(' ').join('-')
    },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author'
      },
      {
        type: 'input',
        name: 'licence',
        message: 'Licence',
        default: 'MIT'
      }], function(answers) {
      this.props = answers
      this.log(answers.name);
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('_.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('_.eslintrc'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath('_.gitattributes'),
      this.destinationPath('.gitattributes')
    );
    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'),{
        name: this.props.name,
        description: this.props.description,
        author: this.props.author,
        licence: this.props.licence
      }
    );
    this.fs.copy(
      this.templatePath('_gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),{
        name: this.props.name,
        description: this.props.description,
        author: this.props.author,
        licence: this.props.licence
      }
    );
    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('src/_index.components.js'),
      this.destinationPath('src/index.components.js')
    );
    this.fs.copy(
      this.templatePath('src/_index.config.js'),
      this.destinationPath('src/index.config.js')
    );
    this.fs.copy(
      this.templatePath('src/_index.filters.js'),
      this.destinationPath('src/index.filters.js')
    );
    this.fs.copy(
      this.templatePath('src/_index.main.js'),
      this.destinationPath('src/index.main.js')
    );
    this.fs.copy(
      this.templatePath('src/_index.modules.js'),
      this.destinationPath('src/index.modules.js')
    );
    this.fs.copy(
      this.templatePath('src/_index.services.js'),
      this.destinationPath('src/index.services.js')
    );
    this.fs.copy(
      this.templatePath('src/config/_.gitkeep'),
      this.destinationPath('src/config/.gitkeep')
    );
    this.fs.copy(
      this.templatePath('src/filters/_.gitkeep'),
      this.destinationPath('src/filters/.gitkeep')
    );
    this.fs.copy(
      this.templatePath('src/services/_.gitkeep'),
      this.destinationPath('src/services/.gitkeep')
    );
    this.fs.copy(
      this.templatePath('src/blog/components/_.gitkeep'),
      this.destinationPath('src/blog/components/.gitkeep')
    );
    this.fs.copy(
      this.templatePath('src/blog/templates/footer/_footer.less'),
      this.destinationPath('src/blog/templates/footer/footer.less')
    );
    this.fs.copy(
      this.templatePath('src/blog/templates/footer/_footer.template.html'),
      this.destinationPath('src/blog/templates/footer/footer.template.html')
    );
    this.fs.copy(
      this.templatePath('src/blog/templates/header/_header.less'),
      this.destinationPath('src/blog/templates/header/header.less')
    );
    this.fs.copy(
      this.templatePath('src/blog/templates/header/_header.template.html'),
      this.destinationPath('src/blog/templates/header/header.template.html')
    );
    this.fs.copy(
      this.templatePath('src/blog/templates/page/sample/_sample.less'),
      this.destinationPath('src/blog/templates/page/sample/sample.less')
    );
    this.fs.copy(
      this.templatePath('src/blog/templates/page/sample/_sample.template.html'),
      this.destinationPath('src/blog/templates/page/sample/sample.template.html')
    );
    this.fs.copy(
      this.templatePath('src/default/templates/page/default/_default.template.html'),
      this.destinationPath('src/default/templates/page/default/default.template.html')
    );
    this.fs.copy(
      this.templatePath('src/default/templates/page/default/_default.template.html'),
      this.destinationPath('src/default/templates/page/default/default.template.html')
    );
    this.fs.copy(
      this.templatePath('tasks/_angular.task.js'),
      this.destinationPath('tasks/angular.task.js')
    );
    this.fs.copy(
      this.templatePath('tasks/_bower.task.js'),
      this.destinationPath('tasks/bower.task.js')
    );
    this.fs.copy(
      this.templatePath('tasks/_ngHtml2Js.task.js'),
      this.destinationPath('tasks/ngHtml2Js.task.js')
    );

  },

  install: function () {
    this.installDependencies();
  }
});
