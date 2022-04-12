import React from 'react'
import AuthButton from '../AuthButton'
import './navbar.css'
import GamesContext from '../../context/gameContext'

const Navbar = () => {
  const gameContext = React.useContext(GamesContext)
  const { searchGame, clear } = gameContext
  const [search, setSearch] = React.useState("")
  const [openSearch, setOpenSearch] = React.useState(false)

  React.useEffect(() => {
    if (search.length == 0) {
      clear()
    }
    // eslint-disable-next-line
  }, [search])



  const onChangeHandler = (e) => {
    // e.preventDefault();
    setSearch(e.target.value)
    if (search.length > 0) {
      searchGame(search);
      return;
    }
  }

  

  return (
    <div className='nav-container'>
      <div className='navbarLeft'>
        <img
          src='/assets/images/open-book.svg'
          alt='open-book'
          className='open-book'
        />
        <h4 className='naijakid'>9IJAKIDS</h4>
      </div>
      <div className='navbarRight'>
        <ul className='nav-ul'>
          <li className='nav-li'>Home</li>
          <li className='nav-li'>About</li>
          <li className='nav-li'>Games</li>
          <li className='nav-li'>Competition</li>
          <li className='nav-li'>
            <AuthButton name='Register' styles='register_color register_auth_nav' />
          </li>
          <li className=' nav-li iconBorder'>
            <i className='fas fa-search navbarIcon' onClick={() => {setOpenSearch(!openSearch)}}  />
            <div className={` ${openSearch ? "search__box" : "search_hide"}`}>
              <input type="text" name='search' value={search} onChange={onChangeHandler} className="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
