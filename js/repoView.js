(function(module){
  var repoView = {};

  var ui = function(){
    var $projectSection = $('#projectSection');
    $projectSection.find('ul').empty();
    $projectSection.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').text());

  repoView.index = function(){
    ui();

    $('#projectSection ul').append(
      repos.all.map(render)
    );
  };
  module.repoView = repoView;
})(window);
