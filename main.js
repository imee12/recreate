var githubPage = {

  init: function() {
    githubPage.initStyling();
    //githubPage.initEvents();
  },

  initStyling: function() {
    githubPage.asideLeft();
   //githubPage.middleSection();
    //console.log("called init styling");
  githubPage.renderRepos();


  },

  asideLeft: function(){
   var profile = [
     '<img src='+user.avatar_url+'/>',
     '<p>' +user.name+ '</p>',
     '<p>' +user.login+ '</p>',
     '<p>' +user.email+ '</p>',
     '<p>' +user.followers+ '</p>',
     '<p>' +user.following+ '</p>',
     '<p>' +user.created_at+ '</p>'
    ].join('')

   $('aside').append(profile);
 },


  ///middleSection: function(){

  //  var popRepo = [
  // '<p>' +repos[0].name+ '</p>',
//  '<p>' +repos[0].description+ '</p>',
//    '<p>' +repos[1].name+ '</p>',
//    '<p>' +repos[1].description+ '</p>',
//    '<p>' +repos[2].name+ '</p>',
//    '<p>' +repos[2].description+ '</p>',
//    '<p>' +repos[3].name+ '</p>',
//    '<p>' +repos[3].description+ '</p>',
//    '<p>' +repos[4].name+ '</p>',
//    '<p>' +repos[4].description+ '</p>',

//    ].join('')
//    $("section").prepend(popRepo);

   //var popRepo = [

  //  repos.forEach(function(repos, index, arr){
    //  repos.idx=index;

    //  var reposData = repos.indexOf(item);

    //    ("name").append(popRepo);
    //    ("description").append(popRepo);

  //}),
//]


//},

renderRepos: function(repos, index, array) {
  repos.idx=index;
  var compiledRepos= _.template(template.repos);

  //$(repos).each(function(i) {
    //post.idx= index;
    //tmplStr =+ compiledTmpl(repos);

//});

  //var tmplStr =""

 //_.each(repos, function (repos, index, arr){
   //item.idx=index;
   //tmplStr += compiledTmpl(repos);

 //});

$('section').append(compiledRepos(repos));
},


renderAll: function (repos) {
  _.each(repos, githubPage.renderRepo);
}

};









$(document).ready(function(){
  githubPage.init();

});
