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




// Project.prototype.toHtml = function() {
//   var $newProject = $('article.template').clone();
//
//   $newProject.find('header h3').text(this.projectName);
//   $newProject.find('img').attr('src', this.projectImg);
//   $newProject.find('address a').attr('href', this.projectUrl);
//   $newProject.find('.summary').html(this.details);
//   $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
//
//   $newProject.append('<hr>');
//   $newProject.removeClass('template');
//   return $newProject;
// };

gitProjects.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

gitProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projectSection').append(a.toHtml());
});
