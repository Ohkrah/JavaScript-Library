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





function storeData (event){
    event.preventDefault();

    const getItemArray = JSON.parse(localStorgae.getItem('getItemArray')) || [];
    const inputData = document.getElementById('searchInput').value;
  
    const keyValues ={
        syntax: inputData,
    }
 inputData.push(keyValues);
    
    localStorage.setItem('getItemArray',JSON.stringify(getItemArray));

    window.location.href="directory.html";
}

// add a event to the search button is clicked using its ID 
