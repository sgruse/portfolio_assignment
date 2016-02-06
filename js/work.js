'use strict';

var objectControllers = {};

objectControllers.handleMainNav = function(event) {
  $('#nav-menu li').on('click', 'a', function(){
    console.log($(this));
    $('section').hide();
    $('.' + $(this).data('category')).parent().show();
    // console.log($('.' + $(this).data('category')).parent());
    $('.' + $(this).data('category')).show();
  });
};

$(document).ready(function(){
  $('#projectSection').hide();
  $('.introduction').hide();
  objectControllers.handleMainNav();
});
