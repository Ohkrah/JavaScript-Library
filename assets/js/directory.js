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
/*temporarily add array to local storage to test functionality*/
let testArray = ["Array" , "data types"];
//Initialize searchValue variable
let searchValue;
localStorage.setItem("searchResult", JSON.stringify(testArray));
//intialize card example number
let cardExampleNum;
let DBExample;
//load search result from local storage
const searchResult = JSON.parse(localStorage.getItem(`searchResult`));
function searchCompare(){
    if (JSON.stringify(cards).includes(JSON.stringify(searchResult[0]))){
        searchValue = searchResult[0];
    }
    else {
        //take to error page
    }
}
//cards loader function
function cardLoader(){
    //Console Log
    if(searchValue == cards[0][4]){
        cardTitle.replaceChildren(cards[0][4]);
        description.replaceChildren(cards[0][0]);
        example.replaceChildren(cards[0][1]);
        LB1.replaceWith(cards[0][2][0]);
        LB2.replaceChildren(cards[0][2][1]);
        LB3.replaceChildren(cards[0][2][2]);
        DB.replaceChildren(cards[0][3]);
        cardExampleNum = 0;
    }

    //Data Types
    if(searchValue == cards[1][4]){
        cardTitle.replaceChildren(cards[1][4]);
        description.replaceChildren(cards[1][0]);
        example.replaceChildren(cards[1][1]);
        LB1.replaceChildren(cards[1][2][0]);
        LB2.replaceChildren(cards[1][2][1]);
        LB3.replaceChildren(cards[1][2][2]);
        DB.replaceChildren(cards[1][3]);
        cardExampleNum=1;
    }
    //Variables
    if(searchValue ==cards[2][4]){
        cardTitle.replaceChildren(cards[2][4]);
        description.replaceChildren(cards[2][0]);
        example.replaceChildren(cards[2][1]);
        LB1.replaceChildren(cards[2][2][0]);
        LB2.replaceChildren(cards[2][2][1]);
        LB3.replacChildren(cards[2][2][2]);
        DB.replaceChildren(cards[2][3]);
        cardExampleNum = 2;
    }
    //Arrays
    if(searchValue == cards[3][4]){
        cardTitle.replaceChildren(cards[3][4]);
        description.replaceChildren(cards[3][0]);
        example.replaceChildren(cards[3][1]);
        LB1.replaceChildren(cards[3][2][0]);
        LB2.replaceChildren(cards[3][2][1]);
        LB3.replaceChildren(cards[3][2][2]);
        DB.replaceChildren(cards[3][3]);
        cardExampleNum=3;
    }
}
//run functions 
searchCompare();
cardLoader();
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
    if(DBExample[cardExampleNum] === LBVariable[cardExampleNum]){
        valueMatch = true
    }
    else{
        valueMatch = false
    }
}
valueMatchTest();
//create function to test for all LB values match DB
function LBCheck(){
            //add event listener to recognize when draggable is on droppable
            LB1.addEventListener(`dragend`,function(){
                LB1Status=true;
            })
            LB2.addEventListener(`dragend`,function(){
                LB2Status=true;
            })
            LB3.addEventListener(`dragend`,function(){
                LB3Status=true;
            })
}

//intialize function to check status of each box and print out correct, if statement is true
const checkStatus = function(){
    if(LB1Status && valueMatch){$(`#response`).addClass("responseCorrect");
        response.replaceChildren("You are correct!!");
    }
    if(LB2Status && valueMatch){$(`#response`).addClass("responseCorrect")
        response.replaceChildren("You are correct!!");
    }
    if(LB3Status && valueMatch){$(`#response`).addClass("responseCorrect")
        response.replaceChildren("You are correct!!");
    }
     //change display message if user is correct in drag location 1
    else if (valueMatch === false){$(`#response`).addClass("responseIncorrect")
        response.replaceChildren("You are incorrect, try again");
    }
}

//Draggable/Droppable function from Jquery API
$( function() {
    $( "#draggableBox" ).draggable();
    $( ".location-box").droppable({
        drop: function( event, ui ) {
            LBCheck();
            valueMatchTest();
            checkStatus();
            UserCorrectTest();
      }
    });
  } );
//User correct test
function UserCorrectTest(){
    LBCheck();
    valueMatchTest();
    checkStatus();
}
