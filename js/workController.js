(function(module) {

  var workControllers = {};

  workControllers.index = function() {

    $('section').hide();
    $('.main-page').fadeIn();
  };
  module.workControllers = workControllers;

  // workControllers.project = function() {
  //   Project.getData();
  // }



})(window);
