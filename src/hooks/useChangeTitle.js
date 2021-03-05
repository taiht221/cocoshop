import React from 'react';
import PropTypes from 'prop-types';

useChangeTitle.propTypes = {
  props: PropTypes.string.isRequired,
};

function useChangeTitle(props) {
  const title = props;

  return (document.title = title);
}

export default useChangeTitle;
