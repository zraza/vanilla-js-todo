# Simple list 

A simple Todo list application build with Vanilla JS using JavaScript Module Pattern and Observer pattern 

## Installing

Should have installed gulp globally

```
git clone https://github.com/zraza/vanilla-js-todo
npm install
```
### Run App
```
gulp serve
```

### Run Tests
```
npm test
```

##Architectural decisions

 - Used Observer pattern to provide the code decoupling
 - Used JavaScript Module Pattern to namespace classes and define private/public methods 
 - Mimicked MVC architecture to separate business logic from the presentational layer, this will help to reuse the code, where different view renderer is required, or there is no view at all.
 - Used SASS to control styles variables from single file and avoiding the rewrite of the same code in many places

#Improvements (TODO)

 - Store todo list in localstorage or DaaS (Firebase etc..)
 - Have cleared button
 - Confirmed before deleting
 - Option to filter list 
 - Unit test to test individual classes


