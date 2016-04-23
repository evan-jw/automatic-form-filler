function getPersonalData(importDoc){
	var data = [];
	
	var field = importDoc.getElementById('fName').innerHTML.trim();
	var value = importDoc.getElementById('fNameVal').innerHTML.trim();
	
	data.push({
		field: field,
		value: value
	});
	console.log(JSON.stringify(data));
	return data;
}

function load(){
	var request = new XMLHttpRequest();

	request.onload = function() {
		var importDoc = this.response;
		var data = getPersonalData(importDoc);
	}

	request.open('GET', config.file, true);
	request.responseType = "document";
	request.send();
}

window.onload = load();