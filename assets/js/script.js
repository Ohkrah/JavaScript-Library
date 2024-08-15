
//search value
const search = document.getElementById(`search`);
// Define ID for button
function validateSearch() {
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput.trim() === '') {
        alert('Search not found in library.');
    } else {
        // Proceed with your search logic
        console.log('Searching for: ' + searchInput);
    }
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
search.addEventListener(`click`, function(){
    storeData();
    if(getItemArray.includes(inputData)){
        window.location.href="directory.html";
    }
});