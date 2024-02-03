import React, { useState } from 'react';
import css from './Header.module.css'

export default function Header() {
  let [cartActive, setCartActive] = useState(false);

  return (
    <header className={css.header}>
      <div>
        <span className={css.logo}>Games</span>
        <ul className={css.nav}>
          <li className={css.nav_item}>About us</li>
          <li className={css.nav_item}>Contacts</li>
        </ul>
        <span onClick={() => setCartActive(cartActive = !cartActive)} className={`${css.cart_btn} ${cartActive && css.active}`}>🛒</span>

        {cartActive && (
          <div className={css.shop_cart}>

          </div>
        )}
      </div>
      <div className={css.presentation}></div>
    </header>
  )
}
