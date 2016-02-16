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
    console.log('projectscreated');
    Project.all.forEach(function(a){
      $('#projectSection').append(a.toHtml());
    });
  };

  objectControllers.showProjects = function() {
    console.log('showProjects');
    // Project.fetchAll();
    objectControllers.createProjects();
    $('#projectSection').fadeIn('slow');
    console.log('isnt working');
  };

  module.objectControllers = objectControllers;
})(window);
