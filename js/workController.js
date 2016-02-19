(function(module) {

  var workControllers = {};

  workControllers.index = function(ctx) {
    console.log('work cont', ctx);
    $('section').hide();
    $('.main-page').fadeIn();
  };
  module.workControllers = workControllers;

})(window);
