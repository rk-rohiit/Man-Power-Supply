
//Loader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-wrapper");
    loader.style.display = "none"; // Hide the loader
});

// Open Join Now Button

function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

  // Curosel
  
  // Block Inspect Mode

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('Inspect mode is disabled.');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        e.preventDefault();
        alert('Developer tools are disabled.');
    }
});