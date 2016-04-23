function fill(targetDoc, data){
	// Write the content HTML element
	var content = '';
	
	// Loop through all the field and value in the data array
	for(var i=0;i < data.length;i++){
		var objData = data[i];
		
		// Build the content string for the document
		content = content.concat('<div style="float:left;width:10%;">', objData.field, '</div><div style="float:left;width:90%;"><input type="text" value="', objData.value, '"/></div>');
	}
	
	// Assign the element to inner HTML of the current document
	targetDoc.getElementById('content').innerHTML = content;
}

function getPersonalData(importDoc){
	// the result array
	var data = [];
	
	// Get the field and value from the import document
	var field = importDoc.getElementById('fName').innerHTML.trim();
	var value = importDoc.getElementById('fNameVal').innerHTML.trim();
	
	// Push into data array
	data.push({
		field: field,
		value: value
	});
	
	return data;
}

function load(){
	var request = new XMLHttpRequest();

	// Open file based on the file defined in config file
	request.open('GET', config.file, true);
	request.responseType = "document";
	request.send();
	
	// Function to be called after successfully loading the document
	request.onload = function() {
		var importDoc = this.response;
		
		// Get all data from the document
		var data = getPersonalData(importDoc);
		
		// fill the current document with data
		fill(document, data);
	}
}

// Load the function to start reading from a document
window.onload = load();