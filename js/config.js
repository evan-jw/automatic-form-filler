/*
 *  The config variable consists of file and formId attributes.
 *	The file attribute is the path to sample file to be imported.
 *	The formId attribute is used for choosing which mapping type is going to be used for the selected file.
 */
var config = {
	file: './forms/test-form-import.html',
	formId: 'mapping1'
};

// This mapping variable hold the formId (mapping1, mapping2, etc...) as well as the fieldId and fieldValId to be read from the imported file.  
var mapping = {
	mapping1 : [
		{
			fieldId:'fName',
			fieldValId: 'fNameVal'
		},
		{
			fieldId:'lName',
			fieldValId: 'lNameVal'
		},
		{
			fieldId:'email',
			fieldValId: 'emailVal'
		},
		{
			fieldId:'address',
			fieldValId: 'addressVal'
		},
		{
			fieldId:'suburb',
			fieldValId: 'suburbVal'
		},
		{
			fieldId:'state',
			fieldValId: 'stateVal'
		},
		{
			fieldId:'postCode',
			fieldValId: 'postCodeVal'
		},
		{
			fieldId:'phoneNo',
			fieldValId: 'phoneNoVal'
		}
	],
	mapping2 :[
		{
			fieldId:'userId',
			fieldValId: 'userIdVal'
		},
		{
			fieldId:'userName',
			fieldValId: 'userNameVal'
		},
	]
};