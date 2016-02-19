(function(module) {

  var projectControllers = {};

  projectControllers.index = function(ctx, next) {
    console.log('project route', ctx);
    ctx.project = Project.all;
    console.log(Project.all);
    $('#projectSection').empty();
    $('section').hide();
    // objectControllers.showProjects();
    next();
  };


  projectControllers.repo = function(ctx, next) {
    repos.requestRepos(repoView.index);
    $('#projectSection').show();

    ctx.handled = true;
    next();
  };



  module.projectControllers = projectControllers;

})(window);
