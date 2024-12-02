const password = document.getElementById('password');
const message = document.getElementById('message');
const strenght = document.getElementById('strenght');

password.addEventListener('input', function () {
  if (password.value.length > 0) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
  if (password.value.length < 4) {
    strenght.innerHTML = 'weak';
    password.style.borderColor = '#ff5925'; //red
    message.style.color = '#ff5925';
  } else {
    if (password.value.length >= 4 && password.value.length < 8) {
      strenght.innerHTML = 'medium';
      password.style.borderColor = '#FFFF00'; //yelow
      message.style.color = '#FFFF00';
    }
  }
  if (password.value.length >= 8) {
    strenght.innerHTML = 'strong';
    password.style.borderColor = '#26D730'; // green
    message.style.color = '#26D730';
  }
});
