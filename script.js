// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

// Portfolio filter
const filterBtns = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.grid .item');

filterBtns.forEach(btn =>
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    items.forEach(item =>
      item.style.display = filter === 'all' || item.classList.contains(filter) ? 'block' : 'none'
    );
  })
);

// Contact form placeholder (edit for your backend)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! I will get back to you soon.');
  e.target.reset();
});
