import * as React from 'react';

export const ROOT_THEME_CLASS = 'replit-ui-theme-root';
export type Themes = 'light' | 'dark';

export function getCurrentTheme(): Themes {

  // const root = document.querySelector('.' + ROOT_THEME_CLASS);
  const root = document.getElementById('root');

  return root.classList.contains('dark') ? 'dark' : 'light';
}

export function switchTheme() {

  console.log('switching themes!');
  const root = document.getElementById('root');
  console.log(root);
 
  const currentTheme = getCurrentTheme();
  console.log(currentTheme);

    if (currentTheme === 'dark') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
}

