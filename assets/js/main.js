'use strict';

const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const year = document.getElementById('year');
const desktopBreakpoint = window.matchMedia('(min-width: 901px)');
const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (year) {
  year.textContent = new Date().getFullYear();
}

function getSavedTheme() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Die Seite bleibt auch ohne verfügbaren Web Storage nutzbar.
  }
}

function applyTheme(theme) {
  const darkMode = theme === 'dark';
  body.classList.toggle('dark', darkMode);

  if (themeToggle) {
    themeToggle.textContent = darkMode ? '☀' : '◐';
    themeToggle.setAttribute(
      'aria-label',
      darkMode ? 'Helles Farbschema aktivieren' : 'Dunkles Farbschema aktivieren'
    );
    themeToggle.setAttribute('aria-pressed', darkMode.toString());
  }
}

const savedTheme = getSavedTheme();
applyTheme(savedTheme || (systemDarkMode.matches ? 'dark' : 'light'));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });
}

systemDarkMode.addEventListener('change', (event) => {
  if (!getSavedTheme()) {
    applyTheme(event.matches ? 'dark' : 'light');
  }
});

function closeMobileMenu({ restoreFocus = false } = {}) {
  if (!menuToggle || !mobileMenu) return;

  mobileMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
  menuToggle.setAttribute('aria-label', 'Navigation öffnen');

  if (restoreFocus) {
    menuToggle.focus();
  }
}

function openMobileMenu() {
  if (!menuToggle || !mobileMenu) return;

  mobileMenu.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.textContent = '×';
  menuToggle.setAttribute('aria-label', 'Navigation schliessen');

  const firstLink = mobileMenu.querySelector('a');
  if (firstLink) firstLink.focus();
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMobileMenu());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu({ restoreFocus: true });
    }
  });

  document.addEventListener('click', (event) => {
    if (
      mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  desktopBreakpoint.addEventListener('change', (event) => {
    if (event.matches) closeMobileMenu();
  });
}
