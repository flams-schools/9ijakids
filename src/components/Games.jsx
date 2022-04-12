import React, { useContext, useEffect } from 'react'
import GamesContext from '../context/gameContext'
import Card from './Card'

const Games = () => {
  const gameContext = useContext(GamesContext)
  const { games, getGames, search } = gameContext

  console.log(search)
  useEffect(() => {
    getGames()
    // eslint-disable-next-line
  }, [])

  const renderItem = (game, index) => {
    return <Card game={game} key={index} />
  } 

  return search.length > 0 ? 
    search.map((item, index) => renderItem(item, index)) 
    : games.map((item, index) => renderItem(item, index))
  
}

export default Games
