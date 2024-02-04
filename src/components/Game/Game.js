import React, { Component } from 'react';
import css from './Game.module.css';

export class Game extends Component {
  render() {
    return (
      <div className={css.game}>
        <img className={css.img} src={process.env.PUBLIC_URL + "/img/" + this.props.game.img} alt={this.props.game.title} onClick={() => this.props.showGameInfo(this.props.game)}/>
        <h2 className={css.item}>{this.props.game.title}</h2>
        <p className={`${css.item} ${css.genre}`}>Genre: {this.props.game.genre.toLocaleString(",")}</p>
        <p className={`${css.item} ${css.price}`}>{this.props.game.price}</p>
        <div className={css.add_to_cart} onClick={() => this.props.onAdd(this.props.game)}>+</div>
      </div>
    )
  }
}

export default Game