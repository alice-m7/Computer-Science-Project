var noteForm = document.querySelector('#note-form');

noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    var noteInput = noteForm.elements["note-input"];
    var note = noteInput.value;
    // Save the note to local storage
    var notes = localStorage.getItem('notes') || '[]';
    notes = JSON.parse(notes);
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Redirect the user back to the home page
    window.location.href = "index.html";
});
var cancelButton = document.querySelector('.buttonCancel');

cancelButton.addEventListener('click', function() {
  window.location.href = 'index.html';
});

