'use strict';

(function(module){

  function Project(opts){
    Object.keys(opts).forEach(function(e, index, keys){
      this[e] = opts[e];
    },this);
  };

  Project.all = [];

  Project.prototype.toHtml = function(){
    var source = $('#entry-template').text();
    var template = Handlebars.compile(source);
    console.log('cat');

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

    return template(this);
  };

  Project.loadAll = function(gitProjects){

    gitProjects.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    gitProjects.forEach(function(ele) {
      Project.all.push(new Project(ele));
    });
  };

  Project.fetchAll = function(){
    console.log('fetchAll');
    if(localStorage.gitProjects){
      $.ajax({
        type: 'HEAD',
        url: 'data/projects.json',
        success: function(data, message, xhr){
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            Project.getData();
          } else {
            Project.loadAll(JSON.parse(localStorage.gitProjects));
          }
        }
      });

    } else {
      Project.getData();
      next();
    }
  };

  Project.getData = function(){
    $.getJSON('data/projects.json', function(gitProjects){
      Project.loadAll(gitProjects);
      localStorage.gitProjects = JSON.stringify(gitProjects);
    });
  };

  module.Project = Project;
  Project.fetchAll();
})(window);
