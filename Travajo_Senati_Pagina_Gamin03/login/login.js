// Capturar el formulario de login
const form = document.getElementById('login-form');
// Agregar un evento al enviar el formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario
  // Redirigir a la página de venta
  window.location.href = 'pagina_venta.html';
});