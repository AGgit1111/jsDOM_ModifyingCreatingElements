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