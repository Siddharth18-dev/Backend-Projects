# Intial Walk through. Setting things up
# To use command Terminal instead of a PowerShell, ctrl + P --> open search Box, type Terminal:Default Profile
#      then, Select it, if arising error, manually open settings.json and type
#          terminal.
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

