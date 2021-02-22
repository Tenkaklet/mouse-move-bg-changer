const body = document.body;
const value = document.querySelector('.value');
/*  Creates variables for x & y for know where our mouse is
    x is for horizontal values, and y for vertical ones
 */

let x = 0;
let y = 0;

// Add Event Listener for page. Listens for any mouse movement
body.addEventListener('mousemove', (event) => {
    //Takes the mouse movement we listened for and saves it into two variables
    x = event.clientX;
    y = event.clientY;
    // Set color values to background color
    body.style.backgroundColor = `rgb(${x}, ${y}, 100)`;
    value.innerHTML = `<h1>The color value is rgb(${x}, ${y}, 100)</h1>`;
});