// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:

const topics = document.querySelector('.topics')

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        //console.log(response.data.topics)
    response.data.topics.forEach((arrayItem) => {
        let newTab = createTab(arrayItem);
        topics.appendChild(newTab);
        });
    })
    .catch(error => {
        console.log("The data was not returned", error)
    })

function createTab(data) {

    const tab = document.createElement('div');

    tab.textContent = data;

    tab.classList.add('tab');

    return tab;
}



    
      