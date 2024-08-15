//Location box status variables
let LB1Status=false;
let LB2Status=false;
let LB3Status=false;
//call response variable from document
let response=document.getElementById(`response`);
//Location Box Switch out variable
let LBVariable;
//Location Boxes
const DB = document.getElementById(`draggableBox`);
const LB = document.getElementsByClassName("location-box");
const LB1 = document.getElementById("locationBox1");
const LB2 = document.getElementById("locationBox2");
const LB3 = document.getElementById("locationBox3");
const description = document.getElementById(`description`);
const example = document.getElementById(`example`);
const cardTitle = document.getElementById(`cardTitle`);
//Console.log(): array/variables
const CLName = "Console.log";
const CLDescription = "A built-in function that allows you to output messages or values to the console";//Holds the description for the Console Log Card
const CLExample = `Console.log("Put string here");\nconsole output: Put string here`;//Holds the example for the Console Log Card
const CLLocationBox = ["Hello World", `"Hello World"`, null];//Holds all three location box values for the Console Log Card
const CLDraggableBox = `Console.log("Hello World")`;//Holds value for the Console Log cards Draggable box
const consoleLog = [CLDescription, CLExample, CLLocationBox, CLDraggableBox, CLName];//Arrary that holds the arrays/values of the above variables for easier access
//Data Types: array/variables
const DTName = "Data Types";
const DTDescription = "Data types A string is surrounded by quotes , A number can also be a decimal, A boolean are values that can be either true/false";
const DTExample = `const num = 4; \nconsole.log(num);\nconsole output: 4`;
const DTLocationBox = [ `"2"`,"2", "num"];
const DTDraggableBox = `let num = 2; \nconsole.log(num);`;
const dataTypes = [DTDescription, DTExample, DTLocationBox, DTDraggableBox, DTName];
//Variables: array/variables
const VName = "Variables";
const VDescription = "A variable is a container that is created to store , numbers, booleans";
const VExample = `const string = "4"; \nconsole.log(string.type);\nconsole output: String`;
const VLocationBox = ["2", `"2"`, "num"];
const VDraggableBox = `let num = 2; \nconsole.log(num.value);`;
const variables = [VDescription, VExample, VLocationBox, VDraggableBox, VName];
//Arrays: array/variables
const AName = "Array";
const ADescription = "An array will carry , strings , number, booleans for a variable";
const AExample = `const array = ["letters", "numbers", "symbols"]; \nconsole.log(array);\nconsole output: (3) ['letters', 'numbers', 'symbols']`;
const ALocationBox = ["2, 6, 7", `[2, 6, 7]`, "array"];
const ADraggableBox = `let array = [2, 6, 7]; \nconsole.log(array);`;
const arrays = [ADescription, AExample, ALocationBox, ADraggableBox, AName];
//Card array links
let cards = [consoleLog, dataTypes, variables, arrays];//holds the arrays that access the variables for card values
const cardNames = ["console log", "data types", "variables", "arrays"]
//Initialize searchValue variable
let searchValue;
localStorage.setItem("searchResult", localStorage.getItem(`getItemArray`));
//intialize card example number
let cardExampleNum;
let DBExample;
//variable to determine if modal has loaded
let modalLoad = false;
//iniitialize value to hold tryme button
const tryMe = document.getElementById(`tryMe`);
//load search result from local storage
const searchResult = JSON.parse(localStorage.getItem(`searchResult`));
console.log(JSON.stringify(searchResult[searchResult.length-1]));
console.log(JSON.stringify(cardNames));
function searchCompare(){
    if (JSON.stringify(cardNames).includes(JSON.stringify(searchResult[searchResult.length-1]))){
        searchValue = JSON.stringify(searchResult[searchResult.length-1]);
    console.log(searchValue)
    console.log(JSON.stringify(cards[0][4]))
    cardLoader();
    }
    else {
        //take to error page
        window.location.replace("file:///C:/Users/Deuce/Bootcamp/Projects/Project-1-/error.html#");
    }
}
//cards loader function
function cardLoader(){
    //Console Log
    if(searchValue == JSON.stringify(cardNames[0])){
        cardTitle.replaceChildren(cards[0][4]);
        description.replaceChildren(cards[0][0]);
        example.replaceChildren(cards[0][1]);
        LB1.replaceWith(cards[0][2][0]);
        LB2.replaceChildren(cards[0][2][1]);
        LB3.replaceChildren(cards[0][2][2]);
        DB.replaceChildren(cards[0][3]);
        cardExampleNum = 0;
        console.log("loading if statement");
        modalLoad=true;
    }

    //Data Types
    else if(searchValue == JSON.stringify(cardNames[1])){
        cardTitle.replaceChildren(cards[1][4]);
        description.replaceChildren(cards[1][0]);
        example.replaceChildren(cards[1][1]);
        LB1.replaceChildren(cards[1][2][0]);
        LB2.replaceChildren(cards[1][2][1]);
        LB3.replaceChildren(cards[1][2][2]);
        DB.replaceChildren(cards[1][3]);
        cardExampleNum=1;
        console.log("loading if statement");
        modalLoad=true;
    }
    //Variables
    else if(searchValue ==JSON.stringify(cardNames[2])){
        cardTitle.replaceChildren(cards[2][4]);
        description.replaceChildren(cards[2][0]);
        example.replaceChildren(cards[2][1]);
        LB1.replaceChildren(cards[2][2][0]);
        LB2.replaceChildren(cards[2][2][1]);
        LB3.replaceChildren(cards[2][2][2]);
        DB.replaceChildren(cards[2][3]);
        cardExampleNum = 2;
        console.log("loading if statement");
        modalLoad=true;
    }
    //Arrays
    else if(searchValue == JSON.stringify(cardNames[3])){
        cardTitle.replaceChildren(cards[3][4]);
        description.replaceChildren(cards[3][0]);
        example.replaceChildren(cards[3][1]);
        LB1.replaceChildren(cards[3][2][0]);
        LB2.replaceChildren(cards[3][2][1]);
        LB3.replaceChildren(cards[3][2][2]);
        DB.replaceChildren(cards[3][3]);
        cardExampleNum=3;
        console.log("loading if statement");
        modalLoad=true;
    }

}
//run functions 
searchCompare();
if (modalLoad){
    tryMe.addEventListener("click", activeModal);
}

//run the modal
function modalOpperation(){


//Modal back button
const modal = document.getElementById(`modal-popUp`);
const modalBackButton = document.getElementById(`back-button-modal`);
modalBackButton.addEventListener(`click`, function (modal){
    document.getElementById(`modal-popUp`).classList.remove("is-active");
});
//detect if draggable matches correct location box and set valueMatch to hold this boolean
let valueMatch;
const LBVariableArray = [0, 1, 2, 0];
const LBCorrectAnswer = [$(CLLocationBox[0]), $(DTLocationBox[1]), $(VLocationBox[2]), $(ALocationBox[0])];
DBExample = [$(CLLocationBox[0]), $(DTLocationBox[1]), $(VLocationBox[2]), $(ALocationBox[0])];
LBVariable = LBVariableArray[cardExampleNum];
function valueMatchTest(){
    if(DBExample[cardExampleNum] === LBVariable){
        valueMatch = true
    }
    else{
        valueMatch = false
    }
}
valueMatchTest();
//create function to test for all LB values match DB
//function LBCheck(){
            //add event listener to recognize when draggable is on droppable
            LB1.addEventListener(`mouseenter`,function(){
                LB1Status=true;
            })
            LB2.addEventListener(`mouseenter`,function(){
                LB2Status=true;
            })
            LB3.addEventListener(`mouseenter`,function(){
                LB3Status=true;
            })
//}

//intialize function to check status of each box and print out correct, if statement is true
const checkStatus = function(){
    console.log(179, LB1Status, LB2Status, LB3Status, valueMatch);
    if(LB1Status && valueMatch){$(`#response`).addClass("responseCorrect");
        $(`#response`).removeClass("responseIncorrect");
        response.replaceChildren("You are correct!!");
    }
    if(LB2Status && valueMatch){$(`#response`).addClass("responseCorrect")
        $(`#response`).removeClass("responseIncorrect");
        response.replaceChildren("You are correct!!");
    }
    if(LB3Status && valueMatch){$(`#response`).addClass("responseCorrect")
        $(`#response`).removeClass("responseIncorrect");
        response.replaceChildren("You are correct!!");
    }
     //change display message if user is correct in drag location 1
    else if (valueMatch === false){$(`#response`).addClass("responseIncorrect")
        $(`#response`).removeClass("responseCorrect");
        response.replaceChildren("You are incorrect, try again");
    }
}

//Draggable/Droppable function from Jquery API
$( function() {
    $( "#draggableBox" ).draggable();
    $( ".location-box").droppable({
        drop: function( event, ui ) {
        
        userCorrectTest();
      }
    });
  } );
//User correct test
function userCorrectTest(){
    //LBCheck();
    valueMatchTest();
    checkStatus();
    console.log(LB1Status, LB2Status, LB3Status);
}

}
//function to activate modal
function activeModal(){
    console.log("registering click");
    document.getElementById(`modal-popUp`).classList.add("is-active");
    modalOpperation();
}

/* >>> this is for the example button when is clicked pop up will show , target with vanilla JS or Jquery? 
function theFunction(){
const popup = document.getElementbyId("popUp");
popup.toogle("show");
} */

//Bradyn JS Code

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