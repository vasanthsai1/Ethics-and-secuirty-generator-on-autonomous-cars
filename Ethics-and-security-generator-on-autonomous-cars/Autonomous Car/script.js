function scrollFunction() {
    let footer = document.querySelector("footer");
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        footer.style.transform = "translateY(0)";
    } else {
        footer.style.transform = "translateY(100%)";
    }
}

let selectedOption = null; // Track the selected option

function toggleSave(elem) {
    const imageButtons = document.querySelectorAll('.image-button');

    // Remove the 'selected' and 'selected-green' class from all image buttons
    imageButtons.forEach(button => {
        button.classList.remove('selected');
        button.classList.remove('selected-green');
    });

    // Determine the type of the clicked button and highlight it
    if (elem === imageButtons[0]) {
        selectedOption = 'left';
        elem.classList.add('selected'); // Add the blue highlight
    } else {
        selectedOption = 'right';
        elem.classList.add('selected-green'); // Add the green highlight
    }
}

function handleNextClick() {
    window.location.href = "EthicalScenario2.html";
}

function handleNextClick1() {
    window.location.href = "EthicalScenario3.html";
}

function handleEndClick() {
    window.location.href = "Home.html";
}


function handleEndClick() {
    window.location.href = "Home.html"; // Replace "Home.html" with the actual filename of your home page, if different
}

  
  function closePopup() {
    var popup = document.getElementById('video-popup');
    popup.style.display = 'none';
  }

  





