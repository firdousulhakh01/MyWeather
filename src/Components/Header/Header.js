import React from 'react'

function header() {
  const date = new Date().toDateString();
  return (
    <div className="row py-3 bg-secondary">
      <div className='col-sm text-center text-sm-start text-white'>MyWeather</div>
      <div className='col-sm text-center text-sm-end text-warning'>{date}</div>
    </div>
  )
}

export default header

