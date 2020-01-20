import React from "react";

function WeatherInfo(props) {
  return (
    <div>
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}

      {props.temperature ? (
        <div className="card card-body mt-2 animated fadeInUp">
          {props.city && props.country && (
            <p>
              <i className="fas fa-location-arrow" /> Location: {props.city},{" "}
              {props.country}
            </p>
          )}
          {props.temperature && (
            <p>
              <i className="fas fa-temperature-low" /> Temperature:{" "}
              {props.temperature} ℃, {props.description}
            </p>
          )}
          {props.humidity && (
            <p>
              <i className="fas fa-water" /> Humidity: {props.humidity}%
            </p>
          )}
          {props.wind_speed && (
            <p>
              <i className="fas fa-wind" /> Wind Speed: {props.wind_speed}km/h
            </p>
          )}
        </div>
      ) : (
        <div className="card card-body mt-2 text-center" />
      )}
    </div>
  );
}

export default WeatherInfo;
