let sidebar=document.querySelector('.header')

function openmenu(){
    sidebar.style.top="0px";
}
function closemenu(){
    sidebar.style.top="-600px";
}

// Animate skills progress bars when in view
function animateSkills() {
  const skillSection = document.getElementById('skills');
  const skillBoxes = document.querySelectorAll('.skillbox');
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;
  if (sectionPos < screenPos) {
    skillBoxes.forEach(box => box.classList.add('animated'));
    window.removeEventListener('scroll', animateSkills);
  }
}
window.addEventListener('scroll', animateSkills);
// Also trigger on load in case already in view
window.addEventListener('DOMContentLoaded', animateSkills);
