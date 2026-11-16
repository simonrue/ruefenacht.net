'use strict';


const body =
    document.body;

const themeToggle =
    document.getElementById('theme-toggle');

const menuToggle =
    document.getElementById('menu-toggle');

const mobileMenu =
    document.getElementById('mobile-menu');

const year =
    document.getElementById('year');


/* =========================================
   COPYRIGHT YEAR
   ========================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   DARK MODE
   ========================================= */

const savedTheme =
    localStorage.getItem('theme');


if (savedTheme === 'dark') {

    body.classList.add('dark');

}


function updateThemeButton() {

    if (!themeToggle) {
        return;
    }

    const darkMode =
        body.classList.contains('dark');

    themeToggle.textContent =
        darkMode ? '☀' : '◐';

}


updateThemeButton();


if (themeToggle) {

    themeToggle.addEventListener(
        'click',
        () => {

            body.classList.toggle('dark');

            const darkMode =
                body.classList.contains('dark');

            localStorage.setItem(
                'theme',
                darkMode ? 'dark' : 'light'
            );

            updateThemeButton();

        }
    );

}


/* =========================================
   MOBILE MENU
   ========================================= */

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener(
        'click',
        () => {

            const open =
                mobileMenu.classList.toggle('open');

            menuToggle.setAttribute(
                'aria-expanded',
                open.toString()
            );

            menuToggle.textContent =
                open ? '×' : '☰';

        }
    );


    mobileMenu
        .querySelectorAll('a')
        .forEach(link => {

            link.addEventListener(
                'click',
                () => {

                    mobileMenu
                        .classList
                        .remove('open');

                    menuToggle.setAttribute(
                        'aria-expanded',
                        'false'
                    );

                    menuToggle.textContent =
                        '☰';

                }
            );

        });

}