 <h5>Before contributing, please take a look at the code of conduct here <a href="https://github.com/jinan-kordab/nodejs-rethinkdb-app/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</a></h5>
  
  <h4>To contribute:</h4>
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
  After your pull request, please allow at least three days for it to be looked upon, and discussed.
  Thank you ! 
