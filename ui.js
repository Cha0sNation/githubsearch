class UI {
	static clearInput(){
		document.getElementById("profileOutput").innerHTML = "";
	}
	static displayError(errorText){
		if(document.getElementById("error")){
			document.getElementById("error").parentElement.remove();
		}
		const container = document.getElementById("content");
		const h1 = document.querySelector("h1");
		let output = document.createElement("div");
		output.innerHTML =
		`
		<div class="alert alert-danger" id="error">
		${errorText}
		</div>
		`;
		container.before(output, h1);
	}
	static clearError(){
		if(document.getElementById("error")){
			document.getElementById("error").parentElement.remove();
		}
	}
}