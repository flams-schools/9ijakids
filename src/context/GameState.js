import React, { useReducer } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'

const GameState = (props) => {
  const initialState = { games: [] }
  const [state, dispatch] = useReducer(gameReducer, initialState)

  const getGames = async () => {
    try {
      const result = await fetch(
        'https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter'
      )
      const data = await result.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <GameContext.Provider value={{ games: state.games, getGames }}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameState