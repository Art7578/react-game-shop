import React, { Component } from 'react';
import Game from '../Game/Game';
import css from './Games.module.css'

export class Games extends Component {
  render() {
    return (
      <main className={css.container}>
        {this.props.games.map(el => (
          <Game showGameInfo={this.props.showGameInfo} key={el.id} game={el} onAdd={this.props.onAdd}/>
        ))}
      </main>
    )
  }
}

export default Games