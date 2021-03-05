import React from 'react';
import PropTypes, { number } from 'prop-types';

useRenderStart.propTypes = {
  props: PropTypes.number.isRequired,
};

function useRenderStart(props) {
  let list = [];
  for (let i = 1; i <= props; i++) {
    // if(props==0.5){
    //   return (<i className="demo-icon icon-star start-wcl " />)
    // }
    list.push(<i className="demo-icon icon-star " key={Math.random()} />);
  }

  if (props - Math.round(props) !== 0) {
    list.push(<i className="demo-icon icon-star-half-alt" key={Math.random()}></i>);
  }
  if (props === 0) {
    list.push(
      <p key={props++} style={{ fontWeight: 'bold' }}>
        Sản phẩm chưa có đánh giá
      </p>
    );
  } else if (5 - Math.round(props) >= 1) {
    list.push(<i className="demo-icon icon-star start-wcl" key={Math.random()} />);
  }

  return list;
}

export default useRenderStart;
