# anima-newsletter
A project for keeping our player updated of the last news of our role play game session of Anima Beyond Fantasy


# How to start the project in local : 

## First, the database : 
Go in anima_newsletter_bdd/local
Execute docker-compose start
Execute init.sh

## Then the back office : 
In the backoffice folder : 
Execute: mvn clean install -DskipTest
Start the back office with the profile local

In intellij : just write local in the run configuration active profile field then start it

## Start the front end :  
In the front end folder : 
Execute npm install
Execute : npm start

