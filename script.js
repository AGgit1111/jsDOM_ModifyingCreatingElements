// MODIFYING ELEMENTS
// Changing text content:
const pDesc = document.getElementById('pDescription');
pDesc.textContent = 'This text is modified in the JS file';

// Changing HTML content:
const pDiv1Text = document.getElementById('pDiv1Text');
pDiv1Text.innerHTML = '<h3>p is now changed to h3 from JS file';

// Changing attributes:
const div2Class = document.querySelector('.div2');
div2Class.setAttribute('class', 'divTwo');
console.log(div2Class); // See console in browser.

// Adding and removing classes:
const div3ClassChange = document.querySelector('.div3Class');
div3ClassChange.classList.add('divThree');
console.log(div3ClassChange);
div3ClassChange.classList.remove('divThree');
console.log(div3ClassChange);
// Toggling (click button on browser page)
const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu')
toggleButton.addEventListener('click', function () {
    menu.classList.toggle('hidden');
});

// Changing styles:
const pDiv2Text = document.getElementById('pDiv2Text');
pDiv2Text.style.color = 'blue';
pDiv2Text.style.backgroundColor = 'yellow';

// CREATING AND ADDING ELEMENTS
// Creating a new element:
const p1 = document.createElement('p');
console.log(p1);

// Setting attributes and content for the new element:
p1.setAttribute('id', 'p1');
p1.textContent = 'Here is p1, added to the new div attribute through JS';
console.log(p1);

// Appending the new element to the DOM:
const div4 = document.getElementById('div4');
div4.appendChild(p1);
console.log(div4, p1);

// Inserting a new element at a specific position:
const p2 = document.getElementById('p2');
div4.insertBefore(p1, p2);

p1.textContent = 'Here is p1, added to the new div attribute through JS. UPDATE: Successfully moved above p2';
console.log(p1.textContent);

// Removing an element:
const pDiv3Text = document.getElementById('pDiv3Text');
const div3 = document.getElementById('div3');
div3.removeChild(pDiv3Text);
console.log(div3);
