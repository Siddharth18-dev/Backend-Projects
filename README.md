<!-- Intial Walk through. Setting things up --> 
<!--  To use command Terminal instead of a PowerShell, ctrl + P => open search Box, type Terminal:Default Profile -->
<!--  then, Select it, if arising error, manually open settings.json and type -->
<!--  terminal. -->

Step1: Make Two Folders, Backend and Frontend
Step 2: cd into Backend
       cd .\backend\
Step 3: Initialise npm (node package manager)
       npm init -y                    #Here '-y' or '--yes' is a flag, for assigning Default Values in package.json
Step 4: Install Express
       npm install express   OR    npm install express@4.18.2
Step 5: Make a File inside \backend\
        touch server.js
step 6: change "type" in package.json to "module"; for using ES6 syntax.

Step 7: After Setting-up with express, nodemon. It's time for mongoDB.
	MongoDB is for beginners, with no schema. Since, we will be learning Real - life Projects, we will jump to use mongoose. 
       Mongoose is similiar to mongodb Driver but more advance with maintaining schema.
              npm install mongoose@7.0.3

Step 8: Create a .env file, that will work as an environment variable, you may access keys and Values as:
       process.env.<KEY_NAME>

Step 9: Define a Schema and use it to perform a CRUD Operation via Controllers.

