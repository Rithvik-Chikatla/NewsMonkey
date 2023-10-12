import React from 'react'
import loading from './Ellipsis-1s-200px.gif'

const SpinnerDark = () => {
    return (
        <div className='text-center'>
          <img src={loading} className="my-3" alt="Loading" style={{ width: "60px", height: "60px" }} />
        </div>
      )
}
export default SpinnerDark