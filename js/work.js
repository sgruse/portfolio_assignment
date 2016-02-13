'use strict';

(function(module){

  var objectControllers = {};

  objectControllers.handleMainNav = function(event) {
    $('#nav-menu li').on('click', 'a', function(){
      console.log($(this));
      $('section').hide();
      $('.' + $(this).data('category')).parent().show();
      $('.' + $(this).data('category')).fadeIn('slow');
    });
  };

  objectControllers.initIndexPage = function(){
    Project.all.forEach(function(a){
      $('#projectSection').append(a.toHtml());
    });
    $('#projectSection').hide();
    $('.introduction').hide();
    objectControllers.handleMainNav();
  };

  module.objectControllers = objectControllers;
})(window);
