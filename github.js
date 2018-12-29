/* jshint ignore:start */
class GitHub {
	constructor(){
		this.client_id = "Iv1.781210483bd72798";
		this.client_secret = "68ff2ba6514ab7777bb7125bf53bb72ce171f6c5";
	}
	async searchUser(user){
		const response = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const userData = await response.json();
		if(userData.message){
			return userData.message;
		}
		const output = 
			`
			<div class="container card card-body">
				<div class="row">
					<div class="col-sm-3">
						<img class="img-fluid mb-2 rounded" src="${userData.avatar_url}">
						</br>
						<a href="${userData.html_url}" class="btn btn-outline-primary btn-block">GitHub Profile</a>
					</div>
					<div class="col-sm-9">
						<h5>
							<span class="badge badge-pill badge-primary">Followers: ${userData.followers}</span>
							<span class="badge badge-pill badge-secondary">Following: ${userData.following}</span>
							<span class="badge badge-pill badge-success">Public Repos: ${userData.public_repos}</span>
							<span class="badge badge-pill badge-warning">Public Gists: ${userData.public_gists}</span>
						</h5>
						<br>
						<ul class="list-group">
							<li class="list-group-item">
								Company: ${userData.company}
							</li>
							<li class="list-group-item">
								Location: ${userData.location}
							</li>
							<li class="list-group-item">
								Website: ${userData.blog}
							</li>
							<li class="list-group-item">
								Member since: ${userData.created_at}
							</li>
						</ul>
					</div>
				</div>
				<div id="repoOutput" class="mt-2"></div>
			</div>
			`;
		document.getElementById("profileOutput").innerHTML = output;
	}
	async getRepos(user){
		const response = await fetch(`http://api.github.com/users/${user}/repos?&sort=stars&order=desc&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const repoData = await response.json();
		console.log(repoData);
		if(repoData.length > 0) {
			let output = "";
			if (repoData.length <= 15) {
				for(let i = 0; i < repoData.length; i++){
					output += 
					`
					<li class="list-group-item">
						Name: ${repoData[i].name}</br>
						Description: ${repoData[i].description}</br>
						Link: <a href="${repoData[i].html_url}" target="_blank">${repoData[i].html_url}</a>
					</li>
					`;
				}
			} else {
				for(let i = 0; i < 15; i++){
					output += 
					`
					<li class="list-group-item">
						Name: ${repoData[i].name}</br>
						Description: ${repoData[i].description}</br>
						Link: <a href="${repoData[i].html_url}" target="_blank">${repoData[i].html_url}</a>
					</li>
					`;
				}
			}
			document.getElementById("repoOutput").innerHTML = output;
		}
	}
}
/* jshint ignore:end */
