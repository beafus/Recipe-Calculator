# Recipe-Calculator
This web application demonstrates a basic use of JavaScript and html/css elements.
This application manages the daily baking schedule and the cost of each days baking. Cake Baby bakes several kinds of products, each product has a name and different list of ingredients. Each ingredient has a name, measurement (per product recipe), cost and supplier.
The application calculates how much ingredients to buy for a given recipe.

## How to run the app 
**(this applies to a MAC computer, it should be similar in Windows and Linux)**
The project has two main folders, www and server. In order to tun the application, after downloadind the folder open you terminal.
* Access to the server folder
  * For example if you have downloaded the project into your Desktop you should do:
    1. cd Desktop
    2. cd Project
    3. cd server
  * Once you are there you should run the following:
    1. #!/bin/bash
    2. ./bin/node server.js
  * After that you should see something like this
    * Static file server running at => http://localhost:8888/
  * Now go to your browser and copy that http address followed by home.html
    * http://localhost:8888/home.html

## Recipes
 * The recipe list is rendered using the objects from the supplied data via ajax from the supplied json file
 * There is an input field for each recipe so the user can type in a number of that recipe that want to create for the week
 * There is a calculate button on the page - so that when clicked, it combines all the ingredients for all the recipes and      calculates the total cost
 * In addition to displaying the total cost,  the cost is split per supplier, and the total the amount of
each ingredient to be purchased from each supplier is also displayed.
 
 
    

