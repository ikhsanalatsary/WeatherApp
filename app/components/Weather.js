import React from 'react';
import swal from 'sweetalert';
import WeatherForm from 'WeatherForm';
import WeatherInfo from 'WeatherInfo';
import * as weatherMap from 'weatherMap';

const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

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
    city = capitalize(city);
    weatherMap
      .getTemp(city)
      .then(temp => {
        console.log(temp);
        this.setState({
          city,
          temp,
        });
      }, (error) => {
        swal("Oops...", error, "error");
      });
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
