
const toggle = document.getElementById('modeToggle');

    // Load saved theme
    window.onload = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
      }
    };

    // Toggle dark mode
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
