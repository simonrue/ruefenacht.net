'use strict';


const body = document.body;

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
    year.textContent = new Date().getFullYear();
}


/* =========================================
   DARK MODE
   ========================================= */

const savedTheme =
    localSto*age.getItem('theme');


if (savedT*eme === 'dark') {
    body.classLi*t.add('dark');
    themeToggle.tex*Content = '☀';
}


if (themeToggle* {

    themeToggle.addEventListen*r('click', () => {

        body.c*assList.toggle('dark');

        c*nst darkMode =
            body.cl*ssList.contains('dark');

        *ocalStorage.setItem(
            'theme',
            darkMode ? 'dark' : 'light'
        );

        themeToggle.textContent =
            darkMode ? '☀' : '◐';

    });
}


/* =========================================
   MOBILE MENU
   ========================================= */

if (menuToggle && mobileMenu) {*
    menuToggle.addEventListener('*lick', () => {

        const open*=
            mobileMenu.classList*toggle('open');

        menuToggl*.setAttribute(
            'aria-e*panded',
            open.toString*)
        );

        menuToggle.t*xtContent =
            open ? '×'*: '☰';
    });


    mobileMenu
  *     .querySelectorAll('a')
      * .forEach(link => {

            l*nk.addEventListener('click', () =>*{

                mobileMenu.clas*List.remove('open');

            *   menuToggle.setAttribute(
      *             'aria-expanded',
    *               'false'
           *    );

                menuToggle*textContent = '☰';
            });*        });
}
