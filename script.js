// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('text').textContent = 'The text has been changed!';
});

// Modify CSS styles via JavaScript
document.getElementById('toggleStyleButton').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    textElement.style.color = textElement.style.color === 'blue' ? 'black' : 'blue';
    textElement.style.fontSize = textElement.style.fontSize === '20px' ? '16px' : '20px';
});

// Add a new element when a button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.textContent = 'This is a dynamically added element.';
    document.getElementById('container').appendChild(newElement);
});
