let currentSection = 0;
const sections = document.querySelectorAll('.section');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function changeSection(direction) {
    sections[currentSection].classList.remove('active');
    currentSection += direction;

    if (currentSection < 0) {
        currentSection = 0; 
    }
    
    if (currentSection >= sections.length) {
        currentSection = sections.length - 1; 
    }

    sections[currentSection].classList.add('active');
    updateButtonStates();
}

function updateButtonStates() {
    if (currentSection === sections.length - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
    
    if (currentSection === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
}

updateButtonStates();

