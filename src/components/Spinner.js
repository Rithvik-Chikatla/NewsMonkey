import React from 'react'
import loading from './Ellipsis-1.2s-201px.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} className="my-3" alt="Loading" style={{ width: "60px", height: "60px" }} />
    </div>
  )
}


export default Spinner
// function() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }