(function(module) {

  var aboutControllers = {};

  aboutControllers.index = function() {
    

    $('section').hide();
    $('.introduction').show();
  };
  module.aboutControllers = aboutControllers;

  // workControllers.project = function() {
  //   Project.getData();
  // }



})(window);
