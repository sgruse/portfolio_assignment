'use strict';

(function(module){

  var objectControllers = {};

  objectControllers.initIndexPage = function(){
    Project.all.forEach(function(a){
      $('#projectSection').append(a.toHtml());
    });
    $('#projectSection').hide();
    $('.introduction').hide();
  };

  objectControllers.createProjects = function() {
    Project.all.forEach(function(a){
      $('#projectSection').append(a.toHtml());
    });
  };

  objectControllers.showProjects = function(ctx, next) {
    // Project.fetchAll();
    // objectControllers.createProjects();
    $('#projectSection').fadeIn('slow');
    next();
  };

  module.objectControllers = objectControllers;
})(window);
