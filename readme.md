Before we get started, let's first install a few dependencies and run npm init:

npm init
-(confirm entry point as app.js from within init process)
npm i express morgan body-parser --save
npm i nodemon -g

Files / Structure:

Notice there is a file in your main directory called app.js.  This will be our app's 'starting point' so make sure to make note of this in your package json.  Within the “scripts” object place the following code - "start": "nodemon app.js".

app.js:

app.js is completely blank.  We want you to create this from scratch in order to get comfortable in setting up express, body-parser and your logging middleware.  Your instructor will conduct a mob programming session to help everyone set this up.

There are also two folders within the main directory.  They are as follows.

db:

db contains your dummy database.  Within this folder are two files, Students.js and Tests.js.  These files contain the sets of data that you will be working with.  There is no reason to edit these files as they are already set up for you.  Take note, the data within this 'database' will only persist for as long as you are running the app without stopping it or saving any changes to the code.  Once you save a change to the code, or stop the server, any changes made to the 'database' will be lost.

routes:

Routes contains two files, students.js and tests.js.  Currently these files are empty except for a reference to, requiring of their corresponding 'database' model.  You are to initialize an express router in each and then construct routes to achieve the following goals for each of the db models.

-students.js
 -Get all students
 -Get student by id
 -Add a student
 -Identify a student by id and submit an update / edit to their data
 -Identify a student by id and delete them

-tests.js
 -Get all tests
 -Get test by id
 -Get all passing tests (Grade: 70+)
 -Add a test
 -Identify a test by id and update / edit its data
 -Identify a test by id and delete it.

(Take a look at the files within db to find the methods associated with each of the actions mentioned above)

Postman:

We will not be building a front end at this point so we will need to use a tool such as Postman to mimic requests from the user.  Here is a link to Postman’s website - https://www.getpostman.com/

