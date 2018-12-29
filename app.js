const github = new GitHub();
let timerId;
let timerIdError;
/* jshint ignore:start */
document.getElementById("input").addEventListener("input", async function(e){
	clearTimeout(timerId);
	timerId = setTimeout(async function(){
		const user = e.target.value;
		if(user === ""){
			UI.clearInput();
			UI.clearError();
		} else {
			const result = await github.searchUser(user);
			if(result){
				UI.displayError(result);
			} else {
				UI.clearError();
				github.getRepos(user);
			}
		}	
	}, 500);
});
/* jshint ignore:end */