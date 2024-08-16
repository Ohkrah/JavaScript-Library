
//search button value
const searchButton = document.getElementById(`search`);
// Define ID for button
function validateSearch() {
    const searchInput = document.getElementById('searchInput')?.value;
    let isValidSearch = false;

    if (!searchInput.trim()) {
        alert('Search not found in library.');
    } else {
        // Proceed with your search logic
        console.log('Searching for: ' + searchInput);
        isValidSearch=true;
    }
    return isValidSearch;
}

//function to clear search history
function clearSearchHistory(){
    localStorage.clear();
}

//added variable to store array values in local storage and access them 
const getItemArray = JSON.parse(localStorage.getItem('getItemArray')) || [];
let inputData = document.getElementById('searchInput').value;


function storeData (event){
    
    
   
    inputData = document.getElementById('searchInput').textContent;
    
    const keyValues =document.getElementById('searchInput').value;

    getItemArray.push(keyValues);
    
    localStorage.setItem('getItemArray',JSON.stringify(getItemArray));
    

}

// add a event to the search button is clicked using its ID 
searchButton.addEventListener(`click`, function(){
    storeData();
    const isValidSearch = validateSearch();
    console.log(44)
    if(isValidSearch && getItemArray.includes(inputData)){
        console.log(46)
        window.location.replace("./directory.html");
    }
});