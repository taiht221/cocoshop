import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Brands from '../../components/Brands';
import Breadcrumbs from '../../components/Breadcrumbs';
import CategoryName from '../../components/CategoryName';
import FilterChoose from '../../components/FilterChoose';
import Pagination from '../../components/Pagination';
import Price from '../../components/Price';
import Rating from '../../components/Rating';
import RowFilter from '../../components/RowFilter';
import { getProduct } from '../../redux/actions/productAction';
import CategoryCard from './component/CategoryCard';
import CategoryGCard from './component/CategoryGCard';
import LoadingCard from './component/LoadingCard';
import queryString from 'query-string';

export default function CategoryGrid() {
  const parsed = queryString.parse(useLocation().search);
  let [layout, setLayout] = useState('list');
  // let [data, setData] = useState(null);
  // let [products, setProducts] = useState(null);

  const dispatch = useDispatch();

  const Products = useSelector((state) => state.product.Productdata);
  // console.log("abc", Products.paginate);
  let routerMatch = useRouteMatch();
  // let param = useParams();
  // console.log(param);
  const Categories = useSelector((state) => state.category.categoryData);
  // console.log(Categories);

  // console.log("cate", Categories);

  // console.log("route", routerMatch);
  // console.log('route2',routerMatch.params.slug.substr(routerMatch.params.slug.lastIndexOf('id')+2));
  // console.log('route3',routerMatch.params.slug.indexOf('id'));

  useEffect(() => {
    dispatch(
      getProduct({
        id: routerMatch.params.slug?.substr(routerMatch.params.slug?.lastIndexOf('id') + 2),
        pageQueryParam: parsed.page,
        sortQueryParam: parsed.sort,
      })
    );
  }, [routerMatch]);

  let cateName = 'Danh sách sản phẩm';

  if (routerMatch.params.slug === undefined) {
    cateName = cateName;
  } else {
    cateName = Categories.find(
      (e) => e.id === parseInt(routerMatch.params.slug.substr(routerMatch.params.slug.lastIndexOf('id') + 2))
    );
    cateName = cateName?.title;
  }

  // usePagination(Products.paginate,4)
  // console.log("aaaa",usePagination(Products.paginate,4))
  if (!Products || !Categories) {
    return <LoadingCard />;
  }

  return (
    <>
      <Breadcrumbs links={[{ title: 'Trang chủ', link: '/' }, { title: cateName }]} />
      <main className={layout == 'list' ? 'category-list' : 'category-grid'}>
        <div className="container">
          <div className="row category-list--title">
            <div>
              {/* {Categories?.map((e,i) =>
                e? (
                  <h2 key={i}>{e.title}</h2>
                ) : (
                  <h2>Danh sách sản phẩm</h2>
                )
              )} */}
              <h2>{cateName}</h2>
            </div>
            <div className="view">
              <div
                onClick={() => {
                  setLayout('grid');
                }}
              >
                <i>
                  <img src="/assets/img/layer.svg" alt="" />
                </i>
                Lưới
              </div>
              <div
                onClick={() => {
                  setLayout('list');
                }}
              >
                <i>
                  <img src="/assets/img/layer2.svg" alt="" />
                </i>
                Danh sách
              </div>
              <span>
                <i>{Products.paginate?.count}</i> Sản phẩm
              </span>
            </div>
          </div>
          <RowFilter />
          <FilterChoose />
          <div className="row category__wrap">
            <div className="col-lg-3 category__left">
              <CategoryName data={Categories} />
              <Brands />
              <Rating />
              <Price />
              <div className="btn-filter">
                <div className="main-btn">
                  <span>Apply</span>
                </div>
                <div className="reset-btn">
                  <span>Reset</span>
                </div>
              </div>
            </div>
            <div className="col-lg-9 category__right">
              {Products.data?.map((e, i) =>
                layout == 'grid' ? <CategoryGCard {...e} key={i} /> : <CategoryCard {...e} key={i} />
              )}
              <Pagination
                paginate={Products.paginate}
                renderLink={(e) => {
                  if (routerMatch.params.slug === undefined) {
                    return '/the-loai' + `?page=${e}`;
                  } else {
                    return `/the-loai/${routerMatch.params.slug}` + `?page=${e}`;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
