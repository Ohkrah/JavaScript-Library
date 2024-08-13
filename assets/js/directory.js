//Console.log(): array/variables
const CLDescription = "A built-in function that allows you to output messages or values to the console";
const CLExample = `Console.log("Put string here");\nconsole output: Put string here`;
const CLLocationBox = ["Hello World", `"Hello World"`, null];
const CLDraggableBox = `Console.log("Hello World")`;
const consoleLog = [CLDescription, CLExample, CLLocationBox[0], CLLocationBox[1], CLLocationBox[2], CLDraggableBox];
//Data Types: array/variables
const DTDescription = "Data types A string is surrounded by quotes , A number can also be a decimal, A boolean are values that can be either true/false";
const DTExample = `const num = 4; \nconsole.log(num);\nconsole output: 4`;
const DTLocationBox = ["2", `"2"`, "num"];
const DTDraggableBox = `let num = 2; \nconsole.log(num);`;
const dataTypes = [DTDescription, DTExample, DTLocationBox[0], DTLocationBox[1], DTLocationBox[2], DTDraggableBox];
//Variables: array/variables
const VDescription = "A variable is a container that is created to store , numbers, booleans";
const VExample = `const string = "4"; \nconsole.log(string.type);\nconsole output: String`;
const VLocationBox = ["2", `"2"`, "num"];
const VDraggableBox = `let num = 2; \nconsole.log(num.value);`;
const variables = [VDescription, VExample, VLocationBox[0], VLocationBox[1], VLocationBox[2], VDraggableBox];
//Arrays: array/variables
const ADescription = "An array will carry , strings , number, booleans for a variable";
const AExample = `const array = ["letters", "numbers", "symbols"]; \nconsole.log(array);\nconsole output: (3) ['letters', 'numbers', 'symbols']`;
const ALocationBox = ["2, 6, 7", `[2, 6, 7]`, "array"];
const ADraggableBox = `let array = [2, 6, 7]; \nconsole.log(array);`;
const arrays = [ADescription, AExample, ALocationBox[0], ALocationBox[1], ALocationBox[2], ADraggableBox];
//Card array links
let cards = [consoleLog, dataTypes, variables, arrays];

//4 modals we are interacting with
//const modalConsole = document.getElementById ("modal-popUp-console");
//const modalString = document.getElementById ("modal-popUp-strings");
//const modalVariables = document.getElementById ("modal-popUp-variables");
//const modalArray = document.getElementById ("modal-popUp-array");

//define functions & define to close the modals
/*const consoleButton = document.getElementById ("consoleButton");
const stringButton = document.getElementById ("stringButton");
const variableButton = document.getElementById ("variableButton");
const arrayButton = document.getElementById ("arrayButton");

const backButton = document.getElementById ("back-button-modal");
const backButtonTwo = document.getElementById ("back-button-modal-two");
const backButtonThree = document.getElementById ("back-button-modal-three");
const backButtonFour = document.getElementById ("back-button-modal-four");

consoleButton.addEventListener("click", function(){
    modalConsole.classList.add("is-active")
});

stringButton.addEventListener("click", function(){
    modalString.classList.add("is-active")
});

variablesButton.addEventListener("click", function(){
    modalVariables.classList.add("is-active")
});

arrayButton.addEventListener("click", function(){
    modalArray.classList.add("is-active")
});

backButton.addEventListener("click", function(){
    modalConsole.classList.remove("is-active")
    modalString.classList.remove("is-active")
    modalVariables.classList.remove("is-active")
    modalArray.classList.remove("is-active")
});

backButtonTwo.addEventListener("click", function(){
    modalConsole.classList.remove("is-active")
    modalString.classList.remove("is-active")
    modalVariables.classList.remove("is-active")
    modalArray.classList.remove("is-active")
});

backButtonThree.addEventListener("click", function(){
    modalConsole.classList.remove("is-active")
    modalString.classList.remove("is-active")
    modalVariables.classList.remove("is-active")
    modalArray.classList.remove("is-active")
});

backButtonFour.addEventListener("click", function(){
    modalConsole.classList.remove("is-active")
    modalString.classList.remove("is-active")
    modalVariables.classList.remove("is-active")
    modalArray.classList.remove("is-active")
});

// window.addEventListener("click", function(event){
//     if (event.target === modalConsole) {
//         modalConsole.classList.remove
//     }
//     if (event.target === modalString) {
//         modalString.classList.remove
//     }
//     if (event.target === modalVariables) {
//         modalVariables.classList.remove
//     }
//     if (event.target === modalArray) {
//         modalArray.classList.remove
//     }
// });


//For directory.html modal
<!-- <div class="modal" id="modal-popUp-strings"> <!--add `is-active` to class to test modal-->
      <!--back button to results-->
      <button class="modal-back" type="button" id="back-button-modal-two">Back</button>
      <!--Instructions-->
      <h3 id="Instructions">Drag and drop syntax box to matching output</h3>
      <!--draggable box-->
      <section class="draggable-box"><!--draggable box variable content here--></section>
      <!--option one of drag locaction-->
      <section class="location-box"><!--location box variable content here--></section>
      <!--option two of drag locaction-->
      <section class="location-box"><!--location box variable 2 content here--></section>
      <!--option three of drag locaction-->
      <section class="location-box"><!--location box variable 3 content here--></section>
      <!--words to show user they are inccorect/correct-->
      <h3 id="response"><!--user correct/incorrect--></h3>
  </div>

  <div class="modal" id="modal-popUp-variables"> <!--add `is-active` to class to test modal-->
    <!--back button to results-->
    <button class="modal-back" type="button" id="back-button-modal-three">Back</button>
    <!--Instructions-->
    <h3 id="Instructions">Drag and drop syntax box to matching output</h3>
    <!--draggable box-->
    <section class="draggable-box"><!--draggable box variable content here--></section>
    <!--option one of drag locaction-->
    <section class="location-box"><!--location box variable content here--></section>
    <!--option two of drag locaction-->
    <section class="location-box"><!--location box variable 2 content here--></section>
    <!--option three of drag locaction-->
    <section class="location-box"><!--location box variable 3 content here--></section>
    <!--words to show user they are inccorect/correct-->
    <h3 id="response"><!--user correct/incorrect--></h3>
</div>

<div class="modal" id="modal-popUp-array"> <!--add `is-active` to class to test modal-->
  <button class="modal-back" type="button" id="back-button-modal-four">Back</button>
  <h3 id="Instructions">Drag and drop syntax box to matching output</h3>
  <section class="draggable-box"><!--draggable box variable content here--></section>
  <section class="location-box"><!--location box variable content here--></section>
  <section class="location-box"><!--location box variable 2 content here--></section>
  <section class="location-box"><!--location box variable 3 content here--></section>
  <h3 id="response"><!--user correct/incorrect--></h3>
</div>*/