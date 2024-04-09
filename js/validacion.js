document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
  
    form.addEventListener('submit', function(event) {
      const emailInput = document.getElementById('email');
      const email = emailInput.value.trim();
  
      if (!isValidEmail(email)) {
        event.preventDefault(); // Evitar el envío del formulario si el correo no es válido
        alert('Por favor, ingresa un correo electrónico válido.');
      }
    });
  
    function isValidEmail(email) {
      // Expresión regular para validar el formato de correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });