const button = document.createElement('button');
button.className = 'my-button'; // add one or more classes, e.g. "my-button" or "btn primary"
button.textContent = 'Click me';
// give the button the id 'myBtn' so the snippet below will find it
button.id = 'myBtn';
document.body.appendChild(button);

// Quick snippet: attach a click listener to the button with id 'myBtn'.
// Tries to attach immediately; if not found, falls back to DOMContentLoaded.
function addMyBtnListener() {
    const el = document.getElementById('myBtn');
    if (!el) return false;
    el.addEventListener('click', () => {
        console.log("Button with id 'myBtn' clicked");
    });
    return true;
}

if (!addMyBtnListener()) {
    document.addEventListener('DOMContentLoaded', addMyBtnListener);
}

export {};



