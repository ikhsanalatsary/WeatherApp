import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    // console.log(this);
    var cityName = ReactDOM.findDOMNode(this.refs.cityname);
    var city = cityName.value;
    if (city.length > 0 ) {
      cityName.value = '';
      this.props.onSearch(city);
    }
  }

  render() {
    return (
      <Col md={6} mdOffset={3}>
      <Form horizontal onSubmit={this.onFormSubmit}>
        <FormGroup controlId="formHorizontalName">
          <Col sm={10}>
            <FormControl type="text" name="cityname" ref="cityname" placeholder="City Name" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={4} sm={10}>
            <Button type="submit">
              Search
            </Button>
          </Col>
        </FormGroup>
      </Form>
      </Col>
    );
  }
}

export default WeatherForm;
