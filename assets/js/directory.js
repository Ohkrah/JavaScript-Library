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
let cards = [consoleLog, dataTypes, variables, arrays];

