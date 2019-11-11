// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(data) {
    const headerDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const title = document.createElement('h1');
    const spanTemp = document.createElement('span');

    headerDiv.appendChild('spanDate');
    headerDiv.appendChild('title');
    headerDiv.appendChild('spanTemp');

    headerDiv.classList.add = 'header';
    spanDate.classList.add = 'date'
    spanTemp.classList.add = 'temp';

    
    return headerDiv;
}
const parent = document.querySelector('.header-container');
parent.appendChild.headerDiv;