# automatic-form-filler
A simple javascript app to read HTML document and automatically generate a form

## How to run the code & unit test

Assume node js already installed and ready to run npm command. 
The installer can be downloaded at https://nodejs.org/en/download/ .

1. Install all modules dependencies
Start the command line, go to project's root folder and type 'npm-install'.

2. Deploy to server (the server in this example is IIS 7) & run the application
- Go to run command and type 'inetmgr'.
- Navigate to PC --> Sites --> Default Web Site.
- Right-click and select 'Add Application'.
- Put any alias and select the project's folder then click 'Ok'.
- Right-click the newly created web app (refresh if it's not appearing under 'Default Web Site'), choose Manage Applications --> Browse.
- Once the browser comes up change the url to : 'http://localhost/[your alias from previous step here]/test-form.html'.

3. Run the unit test
Please have the Chrome browser installed. Go to command line console, go to project's folder and type 'npm test'.

## Approach

- Read sample documents
- Get data from sample document
- Fill the data to the form
- Create mapping function
- Create unit test

## Assumptions

- The field and the value elements are differentiate using element's ID.
- The import form available as local file (otherwise we will have cross-origin-request issue).