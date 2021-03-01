import { spawn } from 'child_process';
import { Link } from 'react-router-dom';

export default function CategoryGCard({
  images,
  discount = ' - 36%',
  name = 'Product title',
  short_description = '121345',
  price,
  real_price,
  rating_average,
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
    <div className="category-card">
      <div className="card-img ">
        <Link to="/">
          <img src={images[0].base_url} alt="" />
        </Link>
        <span className="percent">- {Math.round(100 - (parseInt(real_price) * 100) / parseInt(price))}%</span>
      </div>
      <div className="card-infor ">
        <div className="card-infor__left">
          <h2 className="title">{name}</h2>

          <span className="small-des">{short_description}</span>
          <div className="card-rating">
            {/* {
            [1,2,3,4,5].map((i)=>{
              if(i<Math.round(rating_average)){
                return (<i className="demo-icon icon-star " />)
              }else{
                  return (<i className="demo-icon icon-star start-wcl " />)
              }
            }
            )
          } */}
            {renderStart()}
          </div>
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
          <div className="btn-filter">
            <Link to="/" className="main-btn">
              <span>Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
