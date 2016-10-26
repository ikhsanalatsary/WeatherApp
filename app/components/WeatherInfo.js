import React from 'react';
import { Col } from 'react-bootstrap';

const WeatherInfo = ({ city, desc, temp, icon }) => {
  return (
    <Col md={8} mdOffset={4}>
      <h3>
        Weather in {city} is {desc}
      </h3>
      <h3>
        <img src={'http://openweathermap.org/img/w/' + icon + '.png'} />

        {temp} °C
      </h3>
    </Col>
  );
}

export default WeatherInfo;
