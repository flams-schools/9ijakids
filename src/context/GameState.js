import React, { useReducer } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'

const GameState = (props) => {
  const initialState = { games: [], search: [] }
  const [state, dispatch] = useReducer(gameReducer, initialState)

  const getGames = async () => {
    try {
      const result = await fetch(
        '/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter',
        { headers: { Accept: 'application/json' } }
      )
      const data = await result.json()
      // console.log(data)
      dispatch({ type: 'GET_GAMES', payload: data })
    } catch (error) {
      console.log(error)
    }
  }

  const searchGame = (data) => {
    const {games} = state
    const result = games.filter(item => item.Topic.includes(data) || item.Subject.includes(data) || item.Level.includes(data)  )
    dispatch({ 
      type: "SEARCH_RESULT",
      payload: result
    })
  }

  const clear = () => {
    dispatch({ type: "STATE_CLEAR"})
  }

  return (
    <GameContext.Provider value={{ games: state.games, search: state.search, getGames, searchGame, clear }}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameState
