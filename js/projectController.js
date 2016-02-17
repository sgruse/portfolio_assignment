(function(module) {

  var projectControllers = {};

  projectControllers.index = function() {
    $('#projectSection').empty();
    // Project.fetchAll();
    $('section').hide();
    objectControllers.showProjects();
    console.log('projectController');
  };


  projectControllers.repo = function(ctx, next) {
    repos.requestRepos(repoView.index);
    $('#projectSection').show();

    ctx.handled = true;
    next();
  };



  module.projectControllers = projectControllers;

})(window);
