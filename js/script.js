const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah behavior default jika tombol berupa link

    // Hilangkan class active dari semua button
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Tambahkan class active pada button yg diklik
    button.classList.add('active');

    // Ambil target id dari data attribute
    const targetId = button.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    if(targetElement) {
      // Scroll smoothly ke section target
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Set waktu current di message output
function updateTime() {
  const now = new Date();
  document.getElementById('current-time').textContent = now.toString();
}
updateTime();
setInterval(updateTime, 1000);

// Form Submit handler
const form = document.getElementById('msgForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  // Ambil data dari form
  const name = form.name.value.trim() || '-';
  const birthdate = form.birthdate.value || '-';
  const gender = form.gender.value || '-';
  const message = form.message.value.trim() || '-';

  // Tampilkan data ke output
  document.getElementById('out-name').textContent = name;
  document.getElementById('out-birthdate').textContent = birthdate;
  document.getElementById('out-gender').textContent = gender;
  document.getElementById('out-message').textContent = message;
});
