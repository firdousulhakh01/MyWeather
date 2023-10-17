import React from 'react'

function WeatherData(props) {
  return (
    <div className="row mt-4">
      <div className="col"></div>
      <div className="col-9 col-md-7 col-xl-5 border border-danger-subtle border-3 rounded-3 bg-white">
        <div className="row mb-3 mt-2">
          <div className="col text-warning">{props.geoCo.place} - {props.geoCo.country}</div>
        </div>
        <div className="row mb-md-2">
          <div className="col-md">Temperature: {props.wethrDa.tem} &deg;C</div>
          <div className="col-md-7">Feels-like Temperature: {props.wethrDa.feel_tem} &deg;C</div>
        </div>
        <div className="row mb-2">
          <div className="col-md">Pressure: {props.wethrDa.pre} hPa</div>
          <div className="col-md-7">Humidity: {props.wethrDa.hum} %</div>
        </div>
      </div>
      <div className="col"></div>

    </div>
  )
}

export default WeatherData
