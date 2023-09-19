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
    // Determine the next page based on the selected option
    if (selectedOption === 'left') {
        window.location.href = "Security2.html";
    } else if (selectedOption === 'right') {
        window.location.href = "Security3.html";
    } else {
        alert('Please select an option.');
    }
}
function handleNextClick1() {
    // Determine the next page based on the selected option
    if (selectedOption === 'left') {
        window.location.href = "Ethic 1.html";
    } else if (selectedOption === 'right') {
        window.location.href = "Ethic 2.html";
    } else {
        alert('Please select an option.');
    }
}
function handleNextClick2() {
    var popup = document.getElementById('video-popup');
    popup.style.display = 'block';
  }
  
  function closePopup() {
    var popup = document.getElementById('video-popup');
    popup.style.display = 'none';
  }





