(function(module) {

  var projectControllers = {};

  projectControllers.index = function() {
    $('#projectSection').empty();
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
