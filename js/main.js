let vantaEffect = null;

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  const navItems = document.querySelectorAll('.nav-list li');
  const toggleSwitch = document.getElementById("themeToggle");

  // Dark Mode Zustand aus localStorage
  const isDarkMode = localStorage.getItem("theme") === "dark";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  // VANTA initialisieren
  if (typeof VANTA !== "undefined" && typeof THREE !== "undefined") {
    vantaEffect = VANTA.WAVES({
      el: ".vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      zoom: 0.84,
      color: isDarkMode ? "#000000" : "#a2a2a2"
    });
  }

  // Toggle-Switch Event
  toggleSwitch.addEventListener("change", () => {
    const darkNow = toggleSwitch.checked;
    document.body.classList.toggle("dark-mode", darkNow);
    localStorage.setItem("theme", darkNow ? "dark" : "light");

    if (vantaEffect) vantaEffect.destroy();

    vantaEffect = VANTA.WAVES({
      el: ".vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      zoom: 0.84,
      color: darkNow ? "#000000" : "#a2a2a2"
    });
  });

  // Hamburger-Menü
  hamburger.addEventListener('click', (event) => {
    navList.classList.toggle('show');
    event.stopPropagation();
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navList.classList.remove('show');
    });
  });

  document.addEventListener('click', (event) => {
    if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
      navList.classList.remove('show');
      hamburger.innerHTML = '&#9776;';
    }
  });

  // Scroll to top
  $('#up').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
  });

  $('#up').on('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      $('html, body').animate({ scrollTop: 0 }, 800);
    }
  });

  // Skip-Link Fokus
  const skipLink = document.querySelector('.skip-link');
  skipLink.setAttribute('tabindex', '0');
  skipLink.focus();

  fetch('./quotes.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('quoteContainer'); // Daten aus JSON laden und übe quoteContainer in Variable speichern

    data.forEach(quote => {
      const blockquote = document.createElement('blockquote'); //Schleife zum generieren der Blockquotes mit Klasse quote-card
      blockquote.classList.add('quote-card');

      const p = document.createElement('p');
      p.textContent = `“${quote.text}“ – ${quote.author}`; //Text für die Karte aus quote.json in p Tags schreiben

      blockquote.appendChild(p);
      container.appendChild(blockquote);
    });
  })
  .catch(error => {
    console.error('Fehler beim Laden der Zitate:', error);
  });



});
