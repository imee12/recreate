var githubPage = {

init: function() {
    githubPage.initStyling();

  },

initStyling: function() {
    githubPage.profile();
    githubPage.renderRepos();
    githubPage.renderActivity();

    console.log("called init styling");
  },

profile: function () {
  var profile= _.template(templates.profile);
  $("aside").append(profile(user));


},

renderRepos: function () {
  var repoTmpl = _.template(templates.repos);
  var html = "";
  _.each(reposData, function (currentItem, index, array){
  html += repoTmpl(currentItem);
});
  $("section").append(html);
console.log(html);
},

renderActivity: function () {
  var activityTmpl = _.template(templates.activity)
}




};





$(document).ready(function(){
  githubPage.init();

});
