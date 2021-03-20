import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';

Service.propTypes = {};

function Service(props) {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [values, setValues] = useState({
    free_ship_badge: false,
    is_best_price_guaranteed: false,
    support_p2h_delivery: false,
  });

  const queryaa = {};

  console.log('asdsf', match.url);

  console.log('afdsadfsfads', location.search);

  // const queryaa = {};

  // for (let i in values) {
  //   if (values[i] === true) {
  //     queryaa[i] = values[i];

  //     console.log('dfafd', queryaa);
  //   }
  // }

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));

    // console.log('dfafd', queryaa);

    // history.push({
    //   pathname: match.url,
    //   search: queryString.stringify(queryaa),
    // });
  };

  for (let i in values) {
    if (values[i] === true) {
      queryaa[i] = values[i];
    }
  }

  console.log(queryString.stringify(queryaa));

  // const parsed = queryString.parse(useLocation().search);

  const sort = { free_ship_badge: true, is_best_price_guaranteed: 1, support_p2h_delivery: 1 };
  // const [sort, setsort] = useState({ free_ship_badge: true, is_best_price_guaranteed: 1, support_p2h_delivery: 1 });
  // const sort = parsed.sort || 'real_price.1';

  return (
    <div className="brands">
      <div className="check2">
        <h2 className="title">Dịch vụ</h2>
        {[
          { value: 'free_ship_badge', lable: 'Miễn Phí Giao Hàng' },
          { value: 'is_best_price_guaranteed', lable: 'Rẻ Hơn Hoàn Tiền' },
          { value: 'support_p2h_delivery', lable: 'Giao Hàng Nhanh 2h' },
        ].map((service) => (
          <label className="filter-square" onChange={handleChange} key={service.value}>
            <span>{service.lable}</span>
            <input type="checkbox" checked={values[service]} name={service.value} />
            <span className="checkmark" />
          </label>
        ))}
        {/* <label className="filter-square" onClick={freeShip}>
          <span>Miễn Phí Giao Hàng</span>
          <input type="checkbox" checked={parsed.free_ship_badge} />
          <span className="checkmark" />
        </label>
        <label className="filter-square" onClick={bestPrice}>
          <span>Rẻ Hơn Hoàn Tiền</span>
          <input type="checkbox" checked={parsed.is_best_price_guaranteed === '1'} />
          <span className="checkmark" />
        </label>
        <label className="filter-square" onClick={delivery2h}>
          <span>Giao Hàng Nhanh 2h </span>
          <input type="checkbox" checked={parsed.support_p2h_delivery === '1'} />
          <span className="checkmark" />
        </label> */}
      </div>
    </div>
  );
}

export default Service;
