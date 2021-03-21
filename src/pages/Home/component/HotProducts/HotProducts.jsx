import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './style.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation]);
HotProducts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default function HotProducts(data) {
  return (
    <Swiper
      speed={400}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop={true}
      lazy={true}
      preloadImages={false}
      grabCursor={true}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
        1170: {
          width: 1170,
          slidesPerView: 5,
        },
      }}
    >
      {data?.data.map((e, i) => (
        <SwiperSlide key={i} className="fashion__card">
          <div className="image">
            <Link to="/thong-tin-san-pham">
              <img src={e.images[0].base_url} alt={e.slug} className="swiper-lazy" />
            </Link>
            {Math.round(100 - (parseInt(e.real_price) * 100) / parseInt(e.price)) > 0 ? (
              <span className="percent">
                {Math.round(100 - (parseInt(e.real_price) * 100) / parseInt(e.price)) > 0
                  ? `- ${Math.round(100 - (parseInt(e.real_price) * 100) / parseInt(e.price))} %`
                  : ''}
              </span>
            ) : (
              ''
            )}
          </div>
          <div className="text">
            <Link to="/thong-tin-san-pham">
              <h3>{e.name}</h3>
            </Link>
            <div className="text__price">
              <span className="price">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(e.real_price)}
              </span>
              <span className="sale">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(e.price)}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
