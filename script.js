const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const msgError = document.getElementById('msgError');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  // Reset errors
  nameError.textContent = '';
  emailError.textContent = '';
  msgError.textContent = '';
  formMessage.textContent = '';

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Enter a valid email.';
    valid = false;
  }

  // Message validation
  if (messageInput.value.trim() === '') {
    msgError.textContent = 'Message cannot be empty.';
    valid = false;
  }

  if (valid) {
    // Fake JSON endpoint simulation
    setTimeout(() => {
      formMessage.textContent = '✅ Message sent successfully!';
      form.reset();
    }, 1000);
  }
});
