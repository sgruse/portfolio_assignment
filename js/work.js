'use strict';

var objectControllers = {};

objectControllers.handleMainNav = function() {
  $('.nav').on('click', 'button', function(){
    var $main = $('main > section');
    var $navClick = $(this).data('category');
    $main.hide();
    $main.each(function(){
      if($(this).attr('id') === $navClick){
        $(this).show();
      }
    });
  });
};

$(document).ready(function(){
  $('#projectSection').hide();
  $('#introduction').hide();
  objectControllers.handleMainNav();
});
