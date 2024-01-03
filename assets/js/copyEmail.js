// copyEmail.js
document.getElementById('contact-button-email').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
  
    var textToCopy = this.textContent;
  
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
  
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
  
    document.body.removeChild(textarea);
  
    alert('Email copied: ' + textToCopy);
  });