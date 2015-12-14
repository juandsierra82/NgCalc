NgCalc
================

A simple angular calculator with unit testing for factories and controllers.

##Configuration

$ npm install:
-karma/jasmine
-express

$ bower install:
-jquery (for angular dependency)
-angular
-angular route (and libraries)
-angular material (and libraries)

After bower and npm install---

App may be served dynamically via localhost:8000 by running:

$nodemon index.js from the command line.



There is also a small sticky footer and holy-grail css flex box set up accessible under:

http://localhost:8000/cssBoxing.html

##Controls

Calculator instructions:

clicking '<=': allows editing of the calculator input like backspace button deleting the last input

'CE' clears the memory;

'=' repeats the prior operation before the last input.

##Testing

For testing run: 

$ karma start

once karma is installed globally.

Spies are used for factories in controller unit testing.

karma start will deploy the chrome browser; clicking "DEBUG" should show the particular tests run.