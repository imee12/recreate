var templates = {};

templates.profile = [
  "<img src = <%= avatar_url %> width='200' height='200'>",
  "<h2> <%= name %> </h2>",
  "<h3> <%= login %> </h3>",
  "<h4> <%= created_at %> </h4>",
  "<p><span class='octicon octicon-location'></span><%= location %></p>",
  "<p><span class='octicon octicon-clock'></span><span>Joined on </span><%= created_at %></p>",
  "<div class='userStats'>",
  "<a href ='<%= followers %>'><span>Followers</span></a>",
  "<a href ='<%= starred_url %>'><span>Starred</span></a>",
  "<a href = '<%= following %>'><span>Following</span></a>",
  "</div>",

].join("");

templates.repos = [
"<div class = 'contribs'>",

"<h3><%= name %></h3>",
"<p><%= description  %></p>",
"<p><%= updated_at %></p>",

"<div class='repoStatsLine'>",
"<span><%= language %></span>",
"<span class='octicon octicon-star'></span>",
"<span><%= stargazers_count %></span>",
"<span class='octicon octicon-git-branch'></span>",
"<span><%= forks_count %></span>",
"</div>"


].join("");
