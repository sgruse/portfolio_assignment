(function(module) {

  var workControllers = {};

  workControllers.index = function() {

    $('section').hide();
    $('.main-page').fadeIn();
  };
  module.workControllers = workControllers;

})(window);
