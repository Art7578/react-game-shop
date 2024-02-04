import React, { Component } from 'react';
import css from './Genres.module.css'

export class Genres extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genres: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'action',
                    name: 'Action'
                },
                {
                    key: 'adventure',
                    name: 'Adventure'
                },
                {
                    key: 'battle royale',
                    name: 'Battle Royale'
                },
                {
                    key: 'survival',
                    name: 'Survival'
                },
                {
                    key: 'sports',
                    name: 'Sports'
                },
                {
                    key: 'racing',
                    name: 'Racing'
                },
                {
                    key: 'rpg',
                    name: 'RPG'
                },
                {
                    key: 'role-playing',
                    name: 'Role-playing'
                },
                {
                    key: 'moba',
                    name: 'MOBA'
                },
                {
                    key: 'strategy',
                    name: 'Strategy'
                },
                {
                    key: 'sandbox',
                    name: 'Sandbox'
                },
                {
                    key: 'social deduction',
                    name: 'Social deduction'
                },
                {
                    key: 'indie',
                    name: 'Indie'
                },
                {
                    key: 'mmorpg',
                    name: 'MMORPG'
                },
                {
                    key: 'space',
                    name: 'Space'
                },
                {
                    key: 'simulation',
                    name: 'Simulation'
                },
                {
                    key: 'first-person shooter',
                    name: 'First-Person Shooter'
                }
            ]
        }
    }

  render() {
    return (
      <div className={css.genres_container}>
        {this.state.genres.map(el => (
            <button className={css.genre_btn} key={el.key} onClick={() => this.props.chooseGenre(el.key)}>{el.name}</button>
        ))}
      </div>
    )
  }
}

export default Genres