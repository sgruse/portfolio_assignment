(function(module) {

  var projectControllers = {};
  projectControllers.index = function() {
    Project.fetchAll(objectControllers.showProjects);
    console.log('projectController');

    $('section').hide();
    $('#projectSection').show();
  };
  module.projectControllers = projectControllers;

  // workControllers.project = function() {
  //   Project.getData();
  // }



})(window);
