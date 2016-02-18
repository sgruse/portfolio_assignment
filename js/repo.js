// (function(module){
//   var repos = {};
//
//   repos.all = [];
//
//   repos.requestRepos = function(callback){
//     $.ajax({
//       url: 'https://api.github.com/users/sgruse/repos',
//       data: {
//         per_page: 5,
//         sort: 'updated',
//       },
//       headers: {
//         Authorization: 'token ' + githubToken,
//       },
//       type: 'GET',
//       dataType: 'json',
//     }).done(function(data, status, xhr){
//       repos.all = data;
//       console.log(status);
//       console.log('got repos');
//       callback();
//     }).fail(function(xhr, status, error){
//       console.log('github fetch failed');
//     });
//   };
//
//   repos.with = function(attr){
//     return repos.all.filter(function(repo){
//       return repo[attr];
//     });
//   };
//
//   module.repos = repos;
// })(window);
