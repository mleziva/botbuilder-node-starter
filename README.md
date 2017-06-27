#Introduction 
This is a starter project for creating bots using Node.js and the Microsoft Bot Framework

#Getting Started
1. Clone project
2. Navigate to folder and run 'npm install' to install node modules
3. Run 'gulp run-dev' using the commmand line to start the server
4. Connect to the running instance with the bot emulator 

#Build and Test
This project uses restify to create a server on which the bot will run. The bot can then be accessed using the bot emulator. Copy the dialog/response/test structure to make this bot your own. Add your own logic folders to increase functionality. 

#Explanation of folders and files
app.js - contains the restify set up and calls the create function to create the bot
bot.js - contains the main bot code
gulpfile.js - contains the gulp instructions for tasking
dialogs folder - contains each separate dialog as its own file
responses folder - contains arrays of responses for the various dialogs
unit-tests - contains the logic to run unit tests using moch
integration-tests - creates a console instance of the bot and tests using predefined dialog flows

