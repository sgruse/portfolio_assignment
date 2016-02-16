(function(module) {

  var projectControllers = {};

  projectControllers.index = function() {
    $('#projectSection').empty();
    // Project.fetchAll();
    $('section').hide();
    objectControllers.showProjects();
    console.log('projectController');
  };
  module.projectControllers = projectControllers;

})(window);
