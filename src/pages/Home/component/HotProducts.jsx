import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

HotProducts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default function HotProducts(data) {
  return (
    <Swiper
      speed={400}
      spaceBetween={10}
      slidesPerView={5}
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop={true}
      lazy={true}
      preloadImages={false}
      grabCursor={true}
    >
      {data?.data.map((e, i) => (
        <SwiperSlide key={i} className="fashion__card">
          <div className="image">
            <Link to="/thong-tin-san-pham">
              <img src={e.images[0].base_url} alt={e.slug} className="swiper-lazy" />
            </Link>
            <span className="percent">- {Math.round(100 - (parseInt(e.real_price) * 100) / parseInt(e.price))}%</span>
          </div>
          <div className="text">
            <Link to="/thong-tin-san-pham">
              <h3>{e.name}</h3>
            </Link>
            <div className="text__price">
              <span className="price">
                {e.price.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}{' '}
              </span>
              <span className="sale">
                {e.real_price.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
{
  /* <Swiper
        speed={400}
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        grabCursor={true}
      >
        <SwiperSlide>
          {data?.data.map((e, i) => {
            <div>
              <div className="image">
                <Link to="/thong-tin-san-pham">
                  <img src={e.images[0].base_url} alt="women" />
                </Link>
              </div>
              <div className="text">
                <Link to="/thong-tin-san-pham">
                  <h3>{e.name}</h3>
                </Link>
                <span className="price">{e.real_price}</span>
                <span className="sale">{e.price}</span>
              </div>
            </div>;
          })}
        </SwiperSlide>
      </Swiper> */
}
