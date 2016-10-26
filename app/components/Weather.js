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
      .then(data => {
        this.setState({
          city: data.name,
          desc: data.weather[0].main,
          icon: data.weather[0].icon,
          temp: data.main.temp,
          isLoading: false
        });
      }, (error) => {
        swal("Oops...", error, "error");
      });
  }

  render() {
    var { city, desc, icon, isLoading, temp } = this.state;
    const WeatherLoading = () => {
      if (isLoading) {
        return <LazyLoading />
      } else if (city && temp) {
        return <WeatherInfo city={city} temp={temp} icon={icon} desc={desc}></WeatherInfo>
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
