(function(module) {

  var aboutControllers = {};

  aboutControllers.index = function() {


    $('section').hide();
    $('.introduction').fadeIn();
  };
  module.aboutControllers = aboutControllers;

  // workControllers.project = function() {
  //   Project.getData();
  // }



})(window);
