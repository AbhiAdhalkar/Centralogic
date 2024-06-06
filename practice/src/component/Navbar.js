import React from 'react'

function navbar() {
  return (
    <nav>
      <div className='navbox'>
        <span>
          Shopping Cart
          </span>
      </div>
      <div className='cart'>
        <span>
          <button>My Cart</button>
        </span>
      </div>
    </nav>
  )
}

export default navbar;