import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherInfo from 'WeatherInfo';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      city: this.props.city,
      temp: this.props.temp,
    }
  }

  handleSearch(city) {
    console.log(city);
    this.setState({
      city,
      temp: 24,
    })
  }

  render() {
    var { city, temp } = this.state;
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        <br />
        <WeatherInfo city={city} temp={temp} ></WeatherInfo>
      </div>
    );
  }
}

Weather.defaultProps = {
  city:'Jakarta',
  temp: 27,
}

export default Weather;
