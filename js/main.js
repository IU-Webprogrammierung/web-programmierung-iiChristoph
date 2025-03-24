document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-list li'); // Alle Listenelemente holen
    
    // Event-Listener für den Hamburger-Button
    hamburger.addEventListener('click', (event) => {
      // Menü ein- oder ausblenden
      navList.classList.toggle('show');
      
      // Verhindern, dass das Click-Event auf das Dokument weitergegeben wird
      event.stopPropagation();
    });
  
    // Event-Listener für jedes Listenelement
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navList.classList.remove('show'); // Menü schließen
      });
    });
  
    // Event-Listener für Klick außerhalb des Menüs (Schließt das Menü)
    document.addEventListener('click', (event) => {
      if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
        navList.classList.remove('show'); // Menü schließen
        hamburger.innerHTML = '&#9776;'; // Hamburger-Symbol zurücksetzen
      }
    });

$('#up').on('click',function(){
      $('html, body').animate({
          scrollTop: 0
      }, 800);
  });

$('#up').on('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {  // 'Enter' oder 'Leertaste' wird geprüft
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  }
});

const toggleSwitch = document.getElementById("themeToggle");

// Zustand aus localStorage holen
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggleSwitch.checked);
  localStorage.setItem("theme", toggleSwitch.checked ? "dark" : "light");
});

window.addEventListener('DOMContentLoaded', function () {
  const skipLink = document.querySelector('.skip-link');
  skipLink.setAttribute('tabindex', '0'); // optional, falls nötig
  skipLink.focus(); // setzt den Fokus sofort
});
  });
  