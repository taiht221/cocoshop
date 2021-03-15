import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
Baner.propTypes = {};

function Baner(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="banner ">
          <img src="/assets/img/baner.jpg" alt="banner" />
          <div className="banner__text">
            <span>Chào mừng các bạn đến với</span>
            <b>cocoshop</b>
            <p>Trang thương mại điện tử</p>
            <div className="banner__btn">
              <Link to="/the-loai">
                <span>Tìm hiểu thêm</span>
              </Link>
              <Link to="/the-loai">
                <span>Shop now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baner;
