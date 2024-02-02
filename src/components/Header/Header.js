import React from 'react';
import css from './Header.module.css'

export default function Header() {
  return (
    <header>
      <div>
        <span className={css.logo}>Games</span>
        <ul className={css.nav}>
          <li className={css.nav_item}>About us</li>
          <li className={css.nav_item}>Contacts</li>
        </ul>
      </div>
      <div className={css.presentation}></div>
    </header>
  )
}
