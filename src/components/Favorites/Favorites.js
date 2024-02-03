import React, { Component } from 'react';
import css from './Favorites.module.css';

export class Favorites extends Component {
  render() {
    return (
      <div className={css.favotite}>
        <img className={css.img} src={process.env.PUBLIC_URL + "/img/" + this.props.game.img} alt={this.props.game.title}/>
        <h2 className={css.title}>{this.props.game.title}</h2>
        <p className={css.price}>{this.props.game.price}</p>
        <span className={css.delete} onClick={() => this.props.onDelete(this.props.game.id)}>🗑️</span>
      </div>
    )
  }
}

export default Favorites