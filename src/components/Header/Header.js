import React, { useState } from 'react';
import css from './Header.module.css'
import Favorites from '../Favorites/Favorites';

const showOrders = (props) => {
  return (<>
    {props.favorites.map(el => (
      <Favorites key={el.id} className={css.game} game={el}/>
    ))}
  </>)
}

const showNothing = () => {
  return (<div className={css.empty}>
    <h2>No games</h2>
  </div>)
}

export default function Header(props) {
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
            {props.favorites.length > 0 
            ? showOrders(props)
            : showNothing()}
          </div>
        )}
      </div>
      <div className={css.presentation}></div>
    </header>
  )
}
