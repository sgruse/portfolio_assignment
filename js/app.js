'use strict';

var projects = [];

function Project(opts){
  this.projectName = opts.projectName;
  this.projectUrl = opts.projectUrl;
  this.publishedOn = opts.publishedOn;
  this.projectImg = opts.projectImg;
  this.details = opts.details;
};

Project.prototype.toHtml = function(){
  var source = $('#entry-template').text();
  var template = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  return template(this);
};

gitProjects.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

gitProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projectSection').append(a.toHtml());
});
