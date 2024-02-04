import React, { Component } from 'react';
import css from './GameInformation.module.css'

export class GameInformation extends Component {
  render() {
    return (
      <div className={css.game_backdrop}>
        <div className={css.full_game}>
          <img className={css.img} src={process.env.PUBLIC_URL + "/img/" + this.props.game.img} alt={this.props.game.title} onClick={() => this.props.showGameInfo(this.props.game)}/>
          <h2 className={css.item}>{this.props.game.title}</h2>
          <p className={`${css.item} ${css.genre}`}>Developer: {this.props.game.developer}</p>
          <p className={`${css.item} ${css.genre}`}>Genre: {this.props.game.genre.toLocaleString(",")}</p>
          <p className={`${css.item} ${css.genre}`}>Publisher: {this.props.game.publisher}</p>
          <p className={`${css.item} ${css.genre}`}>Release Date: {this.props.game.release_date}</p>
          <p className={`${css.item} ${css.genre}`}>Platforms: {this.props.game.platforms.toLocaleString(",")}</p>
          <p className={`${css.item} ${css.genre}`}>Game Modes: {this.props.game.game_modes.toLocaleString(",")}</p>
          <p className={`${css.item} ${css.genre}`}>{this.props.game.description}</p>
          <p className={`${css.item} ${css.price}`}>{this.props.game.price}</p>
          <div className={css.add_to_cart} onClick={() => this.props.onAdd(this.props.game)}>+</div> 
        </div>
      </div>
    )
  }
}

export default GameInformation