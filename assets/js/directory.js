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

/* >>> this is for the example button when is clicked pop up will show , target with vanilla JS or Jquery? 
function theFunction(){
const popup = document.getElementbyId("popUp");
popup.toogle("show");
} */