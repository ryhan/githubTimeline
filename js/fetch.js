/* Fetch.js */

$(function(){
	formHandler();
});

// Called on form submit
function formHandler()
{
	var username = $('#username')[0].value;
	githubUser(username, githubHandler);
}

// Fetch data from the github api for a particular user
function githubUser(username, callback)
{
	$.getJSON('https://api.github.com/users/'
		+ username
		+ '/repos?callback=?',callback);
}

// Update the DOM when passed data from the github API
function githubHandler(data)
{	
	var ul = $('#repos')[0];

	var repos = _.sortBy(data.data, 'created_at').reverse();

	ul.innerHTML = '';

	_.map(repos, function(repo){
		ul.appendChild(createRepoLi(repo));
		return true;
	});
}

// Create a li for a particular repo
function createRepoLi( repoData )
{
	var li = document.createElement("li");

	li.setAttribute('class', (repoData.fork)?'fork':'original');

	// Create a linked header for each repo
	var header = document.createElement('h2');
	var titleLink = document.createElement("a");

	titleLink.innerHTML = repoData.name;
	titleLink.setAttribute('href', repoData.html_url);
	titleLink.setAttribute('target', '_blank');

	header.appendChild(titleLink);
	li.appendChild(header);

	// Add detailed data for repos that aren't forks
	if (!repoData.fork)
	{
		var date = (new Date(repoData.created_at)).toDateString();
		li.innerHTML+= "<div class='date'>"+date+"</div>";
		li.innerHTML+= "<p>" + repoData.description + "</p>";	
	}

	return li;
};