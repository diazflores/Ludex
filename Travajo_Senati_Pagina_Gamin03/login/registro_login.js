  const form = document.getElementById('register-form');
    const notification = document.getElementById('notification');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the actual form submission
      notification.style.display = 'block'; // Shows notification
      setTimeout(() => {
        notification.style.display = 'none';
        window.location.href = "login.html"; // Redirects to login page after registration
      }, 3000);
    });