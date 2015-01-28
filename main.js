var githubPage = {

  init: function() {
    githubPage.initStyling();
    //githubPage.initEvents();
  },

  initStyling: function() {
    githubPage.asideLeft();

    //console.log("called init styling");
   ///githubPage.renderAllProducts(products);
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

middleSection: function(){


},



};

$(document).ready(function(){
  githubPage.init();

});
