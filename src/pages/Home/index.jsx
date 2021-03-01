import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import homeProductApi from '../../Apis/homeProductApi';
import HotProducts from './component/HotProducts';
import LoadingCricle from './component/LoadingCircle';
import SaleProducts from './component/SaleProducts';
import './style.scss';

export default function Home() {
  const [homeProduct, sethomeProduct] = useState(null);
  const fetchProducts = async () => {
    const productList = await homeProductApi.getAll('');
    sethomeProduct(productList);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('adfafsd', homeProduct);

  if (!homeProduct) {
    return <LoadingCricle />;
  }

  return (
    <main className="homepage">
      <div className="banner">
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
      <div className="container">
        <h2 className="menu-title align-middle">Sản phẩm hot</h2>
        <HotProducts data={homeProduct?.hot} />
        <h2 className="menu-title align-middle">Sản phẩm được khuyến mãi nhiều</h2>
        <SaleProducts data={homeProduct?.discount} />

        {/* <div class="row fashion-row">
                <div class="col-lg-12 align-middle ">
                    <h2>
                        AVONE STYLES
                    </h2>
                    <p>Choose Your Favorite Color</p>
                </div>
            </div>
            <div class="avone">
                <div class="avone-left ">
                    <a href="#"=""><img src="/assets/img/avon.png" alt=""></a>
                </div>
                <div class="avone-right">
                    <a href="#"=""><img src="/assets/img/avontop.png" alt=""></a>
                    <a href="#"=""><img src="/assets/img/avonbot.png" alt=""></a>
                </div>
            </div> */}
      </div>
    </main>
  );
}
