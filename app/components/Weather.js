import React from 'react';
import swal from 'sweetalert';
import WeatherForm from 'WeatherForm';
import WeatherInfo from 'WeatherInfo';
import * as weatherMap from 'weatherMap';
import LazyLoading from 'LazyLoading';

const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      isLoading: false
    }
  }

  handleSearch(city) {
    city = capitalize(city);

    this.setState({isLoading: true});
    weatherMap
      .getTemp(city)
      .then(temp => {
        this.setState({
          city,
          temp,
          isLoading: false
        });
      }, (error) => {
        swal("Oops...", error, "error");
      });
  }

  render() {
    var { city, isLoading, temp } = this.state;
    const WeatherLoading = () => {
      if (isLoading) {
        return <LazyLoading />
      } else if (city && temp) {
        return <WeatherInfo city={city} temp={temp} ></WeatherInfo>
      }
    }

    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        <br />
        {WeatherLoading()}
      </div>
    );
  }
}

export default Weather;
