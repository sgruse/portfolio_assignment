'use strict';

var objectControllers = {};

objectControllers.handleMainNav = function(event) {
  $('#nav-menu li').on('click', 'a', function(){
    console.log($(this).data('category'));
    $('section').hide();
    $('.' + $(this).data('category')).parent().show();
    $('.' + $(this).data('category')).show();
  });
//     var $main = $('main > section');
//     var $navClick = $(this).data('category');
//     // console.log($navClick);
//     $main.hide();
//     $main.find('section').hide();
//     $main.each(function(){
//       if($(this).attr('class') === $navClick){
//         $(this).show();
//       }
//
//     });
//     $main.find('section').each(function(){
//       if($(this).attr('class') === $navClick){
//         $(this).show();
//       }
//     });
//     console.log($main.find('section'));
//   });
};

$(document).ready(function(){
  $('#projectSection').hide();
  $('.introduction').hide();
  objectControllers.handleMainNav();
});

// $('#nav-menu li').on('click', 'a', function(){
//   $('#introduction').show();
// })
