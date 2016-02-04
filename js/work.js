'use strict';

var objectControllers = {};

objectControllers.handleMainNav = function() {
  $('.hidden li').on('click', 'a', function(){
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

// $('#nav-menu li').on('click', 'a', function(){
//   $('#introduction').show();
// })
