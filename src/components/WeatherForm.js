import React from "react";

function WeatherForm(props) {
  return (
    <div className="card card-body">
      <form onSubmit={props.getWeather}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="Your city name"
            autoFocus
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="country"
            placeholder="Your country name"
            autoFocus
          />
        </div>
        <button className="btn btn-success btn-block">Get Weather</button>
      </form>
    </div>
  );
}

export default WeatherForm;
