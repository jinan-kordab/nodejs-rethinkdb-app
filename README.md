<h3>NodeJs/RethinkDB app for Cypress testing</h3>




https://user-images.githubusercontent.com/36752411/172285672-eb5d1e08-bb75-4274-9c2d-33e2a2275d5e.mp4


<h5><u>Desription</u></h5>


I wrote this test app to help me write and practice cypress tests.All cypress.io tests are in cypress/integration/organic-app-tests folder.<br>
This NodeJs-Express app uses the
following dependencies:<br>
<ul>
  <li>
bcrypt: to hash passwords and never store clear text passwords in databae
  </li>
  <li>
chance: to generate random integers and strings while testing
  </li>
  <li>
ejs: Ejs template engine to render views to the user
  </li>
  <li>
passport: To handle Authentication and authorization
  </li>
  <li>
rethinkdbdash: Handles connections to and from RethinkDb database
  </li>
  <li>
socket.io: Takes care of asyncroneous communications sent by changefeeds from RethinkDb ( Admin page )
  </li>
  
  <p>
    My choice for back end settled for RethinkDb, because of its feature called "changefeeds" which sends notifications via sockt.io to the client once any change 
    happens within its tables. The cypress test for socket.io and changefeeds is in cypress folder "admin.spec.js"
  </p>
<p align="center">
  <img src="/organicapp/public/images/changefeed.png" alt="changefeed"/>
</p>
  
  <h5>How to use this app ?</h5>
  <p>
   <ol>
     <li>Download and Install RethinkDb <a href="https://rethinkdb.com/docs/install/windows/">from here</a></li>
     <li>Create a shortcut wherever you like to point to RethinkDB executable with the following path value and arguments:  C:\RethinkDB\rethinkdb.exe -d c:\RethinkDB\data\  --bind all</li>
     <li>Click on the shortcut to start RethinkDB Server</li> 
     <li>Clone this app to a folder of your choice:  git clone  https://github.com/jinan-kordab/nodejs-rethinkdb-app.git </li>
     <li>cd organicapp</li>
     <li>npm install</>
         <p align="center">
  <img src="/organicapp/public/images/cd_npm.png" alt="cdnpm"/>
</p>
     <li>cd organicapp/bin (Inside bin folder you will find two files:  1- create-data.js   2- delete-data.js)</li>
     <li>node create-data.js (this will populate your RethinkDB instance with test data. The other file, deletes all test data that was added via file accordingly)</li>
     <li>cd ..</li>
  <li>npm start  (this will start the appp)</li>
  <li>navigate to http://localhost:3000 , you should see the landing page: </li>
  <p align="center">
  <img src="/organicapp/public/images/l.png" alt="landing"/>
</p>
  <li>now open another terminal (bash or powershell</li>
  <li>cd organicapp</li>
  <li>npx cypress open  (this will start cypress, and you can write and run cypress tests)</li>
  <p align="center">
  <img src="/organicapp/public/images/cypress_open.png" alt="cypress"/>
</p>
  </ol>
  </p>
<p> I wrote more about this app on my 
blog here: <a href = "https://thoughtsonprogramming.wordpress.com/">my blog post</a> including 
discussion on unit and integration QA testing in Cypress</p>
  </p>
  
  <p>
  You can also install this app from NPM by issuing the following command:
  <ul>
  <li>
  npm i nodejs-rethinkdb-cypress
  </li>
  </ul>
  </p>
  
