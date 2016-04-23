describe('Get mapping function', function () {
	it('should return correct mapping', function () {
		var mapMock = getMapping('mapping1');
		var expectedResult = mapping['mapping1'];
		expect(mapMock).toEqual(expectedResult);
	});
});

describe('Get personal data', function () {
	it('should return correct value', function () {
		config.formId = 'mapping2';
		var expectedResult = [
			{
				field: 'User ID:', 
				value: '25123'
			},
			{ 
				field: 'Username:', 
				value: 'Robert.James' 
			}
		]; 
		
		var mockHTML = document.implementation.createHTMLDocument('title');
		var div1 = mockHTML.createElement('div');
		div1.innerHTML = '<div id="userId" style="width:10%; float:left;">User ID:</div>';
		div1.innerHTML += '<div id="userIdVal" style="width:90%; float:left;">25123</div>';
		div1.innerHTML += '<div id="userName" style="width:10%; float:left;">Username:</div>';
		div1.innerHTML += '<div id="userNameVal" style="width:90%; float:left;">Robert.James</div>';
		
		mockHTML.body.appendChild(div1);
		
		var data = getPersonalData(mockHTML);
		expect(data).toEqual(expectedResult);
	});
});

describe('Fill function', function () {
	it('should return correct content', function () {
		var data = [
			{
				field: 'User ID:', 
				value: '25123'
			},
			{ 
				field: 'Username:', 
				value: 'Robert.James' 
			}
		]; 
		
		var mockHTML = document.implementation.createHTMLDocument('title');
		var div1 = mockHTML.createElement('div');
		div1.innerHTML = '<div id="content"></div>';
		
		mockHTML.body.appendChild(div1);
		
		var expectedResult = '<div style="float:left;width:10%;">User ID:</div>';
		expectedResult += '<div style="float:left;width:90%;"><input type="text" value="25123"></div>';
		expectedResult += '<div style="float:left;width:10%;">Username:</div>';
		expectedResult += '<div style="float:left;width:90%;"><input type="text" value="Robert.James"></div>';
		
		fill(mockHTML, data);
		
		expect(mockHTML.getElementById('content').innerHTML).toEqual(expectedResult);
	});
});