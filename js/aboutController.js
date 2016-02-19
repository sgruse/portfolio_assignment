(function(module) {

  var aboutControllers = {};

  aboutControllers.index = function(ctx) {

    console.log('about cont ', ctx);
    $('section').hide();
    $('.introduction').fadeIn();
  };

  // workControllers.project = function() {
  //   Project.getData();
  // }



  module.aboutControllers = aboutControllers;
})(window);
