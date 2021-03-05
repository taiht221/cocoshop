import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';

export default function ProductDetail() {
  return (
    <>
      <Breadcrumbs
        links={[
          { title: 'Home', link: '/' },
          { title: 'Fruit and vegetables', link: '/danh-sach-luoi' },
          { title: 'Carrots from Tomissy Farm' },
        ]}
      />
      <main className="product-detail">
        <div className="container">
          <div className="row product-detail__wrap">
            <div className="col-lg-6 product-detail__left">
              <div className="img">
                <img src="/assets/img/top-left.jpg" alt="" />
                <div className="percent">
                  <span className="percent">- 36 %</span>
                  <span>Free shiping</span>
                </div>
              </div>
              <div className="img">
                <img src="/assets/img/top-left.jpg" alt="" />
              </div>
              <div className="img">
                <img src="/assets/img/top-left.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 product-detail__right">
              <h2>Carrots from Tomissy Farm</h2>
              <div className="card-rating">
                <i className="demo-icon icon-star start-cl" />
                <i className="demo-icon icon-star start-cl" />
                <i className="demo-icon icon-star start-cl" />
                <i className="demo-icon icon-star start-cl" />
                <i className="demo-icon icon-star " />
                <span className="small-des">(1 customer review)</span>
              </div>
              <p className="des">
                Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full
                love to his Bio products. Tomisso’s carrots are growing on the fields naturally.
              </p>
              <table className="spec">
                <tbody>
                  <tr>
                    <th>SKU:</th>
                    <td>76645</td>
                    <th>Freshness:</th>
                    <td>1 days old</td>
                  </tr>
                  <tr>
                    <th>Category:</th>
                    <td>Vegetables</td>
                    <th>Buy by:</th>
                    <td>pcs, kgs, box, pack</td>
                  </tr>
                  <tr>
                    <th>Stock:</th>
                    <td>In Stock</td>
                    <th>Delivery:</th>
                    <td>in 2 days</td>
                  </tr>
                  <tr>
                    <th>Farm</th>
                    <td>Grocery Tarm Fields</td>
                    <th>Delivery area</th>
                    <td>Czech republic</td>
                  </tr>
                </tbody>
              </table>
              <div className="add-cart">
                <div className="add-cart__price">
                  <span className="price">36.99 USD</span>
                  <span className="sale-price">48.56</span>
                </div>
                <div className="quantity">
                  <input type="number" min={1} max={100} step={1} defaultValue={1} />
                  <span>Pcs</span>
                </div>
                <div className="btn-filter">
                  <a href="#" className="main-btn">
                    <i>+</i>
                    <span>Add to cart</span>
                  </a>
                </div>
              </div>
              <div className="wish-list">
                <i className="demo-icon icon-heart-empty" />
                <span>Add to my wish list</span>
              </div>
              <div className="tab-content">
                <div className="tabs">
                  <ul id="tabs__ul">
                    <li className="active" data-list="tab_1">
                      <p>Description</p>
                    </li>
                    <li data-list="tab_2">
                      <p>Reviews</p>
                      <span className="select-filter">320</span>
                    </li>
                    <li data-list="tab_3">
                      <p>Questions</p>
                      <span className="select-filter">320</span>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <div className="tab_content tab_1" id="tab_1">
                    <h3 className="title">Origins</h3>
                    <p className="des">
                      We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we
                      don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy
                      locally whenever possible.
                    </p>
                    <h3 className="title">How to cook</h3>
                    <p className="des">
                      From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and
                      colour to an enormous number of recipes.
                    </p>
                    <h3 className="title">Full of Vitamins!</h3>
                    <table>
                      <tbody>
                        <tr>
                          <th>Vitamins</th>
                          <th>Quantity</th>
                          <th>% DV</th>
                        </tr>
                        <tr>
                          <td>Vitamin A equiv.</td>
                          <td>735 μg</td>
                          <td>104 %</td>
                        </tr>
                        <tr>
                          <td>Thiamine (B1)</td>
                          <td>0.066 mg</td>
                          <td>6 %</td>
                        </tr>
                        <tr>
                          <td>Niacin (B3)</td>
                          <td>0.983 mg</td>
                          <td>7 %</td>
                        </tr>
                        <tr>
                          <td>Folate (Bg)</td>
                          <td>19 μg</td>
                          <td>5 %</td>
                        </tr>
                        <tr>
                          <td>Vitamin C</td>
                          <td>5.9 mg</td>
                          <td>7 %</td>
                        </tr>
                        <tr>
                          <td>Vitamin E</td>
                          <td>0.66 mg</td>
                          <td>4 %</td>
                        </tr>
                        <tr>
                          <td>Vitamin K</td>
                          <td>13.2</td>
                          <td>13 %</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab_content tab_2" id="tab_2" style={{ display: 'none' }}></div>
                  <div className="tab_content tab_3" id="tab_3" style={{ display: 'none' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row related-products">
            <div className="text">
              <h3>Related products</h3>
              <a href="#">
                More products <i>&gt;</i>
              </a>
            </div>
            <div className="related-products__wrap category__right">
              <div className="category-card ">
                <div className="card-img ">
                  <a href="#">
                    <img src="/assets/img/bot1.png" alt="" />
                  </a>
                  <span className="percent">- 36 %</span>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Product title</h2>
                    <span className="small-des">Space for a small product description </span>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">36.99 USD</span>
                    <span className="sale-price">48.56</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Buy now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-card ">
                <div className="card-img ">
                  <a href="#">
                    <img src="/assets/img/bot1.png" alt="" />
                  </a>
                  <span className="percent">- 36 %</span>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Product title</h2>
                    <span className="small-des">Space for a small product description </span>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">36.99 USD</span>
                    <span className="sale-price">48.56</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Buy now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-card ">
                <div className="card-img ">
                  <a href="#">
                    <img src="/assets/img/bot1.png" alt="" />
                  </a>
                  <span className="percent">- 36 %</span>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Product title</h2>
                    <span className="small-des">Space for a small product description </span>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">36.99 USD</span>
                    <span className="sale-price">48.56</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Buy now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-card ">
                <div className="card-img ">
                  <a href="#">
                    <img src="/assets/img/bot1.png" alt="" />
                  </a>
                  <span className="percent">- 36 %</span>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Product title</h2>
                    <span className="small-des">Space for a small product description </span>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">36.99 USD</span>
                    <span className="sale-price">48.56</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Buy now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
