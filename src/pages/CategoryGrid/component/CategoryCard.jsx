import { Link } from 'react-router-dom';

export default function CategoryCard({
  images,
  discount_rate = ' - 36%',
  name = 'Product title',
  short_description = '121345',
  price,
  real_price,
  rating_average,
  inventory_status,
  review_count,
  specifications,
}) {
  function renderStart() {
    let list = [];
    for (let i = 1; i <= rating_average; i++) {
      // if(rating_average==0.5){
      //   return (<i className="demo-icon icon-star start-wcl " />)
      // }
      list.push(<i className="demo-icon icon-star " key={Math.random()} />);
    }

    if (rating_average - Math.round(rating_average) !== 0) {
      list.push(<i className="demo-icon icon-star-half-alt" key={Math.random()}></i>);
    }
    if (rating_average === 0) {
      list.push(
        <p key={rating_average++} style={{ fontWeight: 'bold' }}>
          Sản phẩm chưa có đánh giá
        </p>
      );
    } else if (5 - Math.round(rating_average) >= 1) {
      list.push(<i className="demo-icon icon-star start-wcl" key={Math.random()} />);
    }

    return list;
  }

  return (
    <div className="category-card ">
      <div className="card-img " style={{ position: 'relative' }}>
        <Link to="/thong-tin-san-pham">
          <img src={images[0].base_url} alt="" />
        </Link>
        <span className="percent">- {Math.round(100 - (parseInt(real_price) * 100) / parseInt(price))}%</span>
      </div>
      <div className="card-infor ">
        <div className="card-infor__left">
          <h2 className="title">{name}</h2>
          <span className="small-des">{short_description}</span>
          <div className="card-rating">{renderStart()}</div>
          <ul className="detail">
            {specifications[0]?.attributes
              .map((e) => {
                <li>
                  <span>{e.name}</span>
                  <span>
                    <strong>{e.value}</strong>
                  </span>
                </li>;
              })
              .slice(0, 4)}
            <li>
              <span>Lượt đánh giá</span>
              <span>
                <strong>{review_count}</strong>
              </span>
            </li>
            <li>
              <span>{specifications[0].attributes[0].name}</span>
              <span>{specifications[0].attributes[0].value}</span>
            </li>
            <li>
              <span>{specifications[0]?.attributes[1]?.name}</span>
              <span>{specifications[0]?.attributes[1]?.value}</span>
            </li>
            <li>
              <span>{specifications[0]?.attributes[2]?.name}</span>
              <span>
                <strong>{specifications[0]?.attributes[2]?.value}</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="card-infor__right">
          <span className="price">
            {real_price.toLocaleString('it-IT', {
              style: 'currency',
              currency: 'vnd',
            })}
          </span>
          <span className="sale-price">
            {price.toLocaleString('it-IT', {
              style: 'currency',
              currency: 'vnd',
            })}
          </span>
          <span className="ship-price">
            <strong>Free Shipping</strong>
          </span>
          <span className="delivery">Delivery in 1 day</span>
          <div className="btn-filter">
            <div className="main-btn">
              <Link to="thanh-toan-san-pham">
                Chi tiết <i className="demo-icon icon-down-dir" />
              </Link>
            </div>
            <div className="wish-btn">
              <Link to="thanh-toan-san-pham">
                Giỏ Hàng
                <i className="demo-icon icon-heart-empty" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
