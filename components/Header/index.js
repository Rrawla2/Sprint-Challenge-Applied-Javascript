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

const parent = document.querySelector('.header-container');


function Header() {

    const headerDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const title = document.createElement('h1');
    const spanTemp = document.createElement('span');

    headerDiv.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    spanDate.textContent = 'SMARCH 28, 2019';
    spanTemp.textContent = '98°';
    title.textContent = 'Lambda Times';

    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(title);
    headerDiv.appendChild(spanTemp);
    parent.appendChild(headerDiv);

    return headerDiv;
}

Header();
