/* Fetch.js */

window.onload = function() { formHandler(); };

function formHandler(){
	var username = document.getElementById('username').value;
	githubUser(username, githubHandler);
}

function githubUser(username, callback){
	console.log(username);
	var url = 'https://api.github.com/users/'  + username  + '/repos?type=all&sort=created&direction=desc';

	var the_object = {}; 
	var http_request = new XMLHttpRequest();
	http_request.open( "GET", url, true );
	http_request.onreadystatechange = function () {
		console.log(http_request.responseText);
	    if ( http_request.readyState == 4 && http_request.status == 200 ) {
	        the_object = JSON.parse( http_request.responseText );
	        callback(the_object);
	    }
	};
	http_request.send(null);
}

function githubHandler(data){

	var ul = document.getElementById('repos');
	ul.innerHTML = "";

	_.map(data, function(repo){
		var li = document.createElement("li");
		li.innerHTML+= "<h2><a target='_blank' href='"
						+repo.html_url+"'>" + repo.name + "</a></h2>";

		if (repo.fork == true){
			li.setAttribute('class', 'fork');
		}else{
			var date = (new Date(repo.created_at)).toDateString();
			li.innerHTML+= "<div class='date'>"+date+"</div>";
			li.setAttribute('class', 'original');
			li.innerHTML+= "<p>" + repo.description + "</p>";
		}
		ul.appendChild(li);
		return true;
	});
}