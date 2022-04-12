import React from 'react'
import AuthButton from '../AuthButton'
import './intro.css'

const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='intro-Top'>
        <div className='intro-Top-Left'>
          <h4 className='l1'>Learning is Fun</h4>
          <h2 className='l2'>Learn New Skills Online</h2>
          <h2 className='l2'>Find Best Courses</h2>
          <div className='btn-intro'>
            <AuthButton name='Register' styles='register_color register' />
            <AuthButton name='Login' styles='login' />
          </div>
        </div>
        <div className='intro-Top-Right'>
          <img
            src='/assets/images/Top-Banner.png'
            alt='topbanner'
            className='center-img'
          />
        </div>
      </div>
      <div className='intro-Bottom'>
        <img src='assets/images/Timer.png' alt='timer' className='timer' />
      </div>
    </div>
  )
}

export default Intro
