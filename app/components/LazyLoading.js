import React from 'react';
import Loading from 'react-loading';
import { Col } from 'react-bootstrap';

const LazyLoading = () => {
  return (
    <Col md={8} mdOffset={5}>
      <Loading type='bars' color='#E2E2E2' />
      </Col>
  );
};

export default LazyLoading;
