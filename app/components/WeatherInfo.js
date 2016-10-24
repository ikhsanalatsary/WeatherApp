import React from 'react';
import { Col } from 'react-bootstrap';

class WeatherInfo extends React.Component {
  render() {
    var { city, temp } = this.props;
    return (
      <Col md={8} mdOffset={4}>
        <h4>
          Di {city} bersuhu {temp} derajat Celcius
        </h4>
      </Col>
    );
  }
}

export default WeatherInfo;
