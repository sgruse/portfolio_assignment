(function(module) {

  var aboutControllers = {};

  aboutControllers.index = function() {


    $('section').hide();
    $('.introduction').fadeIn();
  };

  // workControllers.project = function() {
  //   Project.getData();
  // }



  module.aboutControllers = aboutControllers;
})(window);
