function goToCreatePage() {
  // take user to settings page
  window.location.href = "create-note.html";
}

function goToSettingsPage() {
  // take user to settings page
  window.location.href = "settings.html";
}

function goToHomePage() {
  // take user to home page
  window.location.href = "index.html";
}

function toggleTheme() {
  var body = document.getElementsByTagName("body")[0];
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme")
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme")
  }
}


// check if user is authenticated
//if (location.pathname.endsWith("/index.html")) {
//  var authenticated = getAuthentication();
//  if (authenticated !== true) {
//    location.href = "/login.html";
//  }
//}

// Get the saved notes from local storage
var notes = JSON.parse(localStorage.getItem('notes'));

// Get the notes container element
var notesContainer = document.getElementById('notes-container');

// If there are no saved notes, display a message
if (!notes || notes.length === 0) {
  notesContainer.innerHTML = '<p>No notes yet!</p>';
} else {
  // Otherwise, display each note in a list
  var notesList = '<ul>';
  for (var i = 0; i < notes.length; i++) {
    notesList += '<li>' + notes[i] + '</li>';
  }
  notesList += '</ul>';
  notesContainer.innerHTML = notesList;
}

