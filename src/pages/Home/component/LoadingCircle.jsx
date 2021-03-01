import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

LoadingCricle.propTypes = {};

function LoadingCricle() {
  return (
    <div className="container">
      <div className="dashed-loading"></div>
    </div>
  );
}

export default LoadingCricle;
