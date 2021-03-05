import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CategoryName from '../../components/CategoryName/CategoryName';
import FilterChoose from '../../components/FilterChoose/FilterChoose';
import Pagination from '../../components/Pagination/Pagination';
import Price from '../../components/Price/Price';
import Rating from '../../components/Rating/Rating';
import RowFilter from '../../components/RowFilter/RowFilter';
import { getProduct } from '../../redux/actions/productAction';
import queryString from 'query-string';
import Brands from 'components/Brands/Brands';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle';
import './style.scss';
import useChangeTitle from 'hooks/useChangeTitle';
import useGetTitle from 'hooks/useGetTitle';
import ProductsLoading from './component/CategoryLoading/ProductsLoading';
import CategoryList from './component/ListView/CategoryList';
import CategoryGrid from './component/GridView/CategoryGrid';
import LoadingCard from './component/CategoryLoading/LoadingCard';

export default function Category() {
  const dispatch = useDispatch();
  const parsed = queryString.parse(useLocation().search);
  const [layout, setLayout] = useState('grid');
  const Products = useSelector((state) => state.product.Productdata);
  const routerMatch = useRouteMatch();
  const Categories = useSelector((state) => state.category.categoryData);
  const [loading, setLoading] = useState(false);
  const categoryName = useGetTitle(Categories);
  const documentTitle = useChangeTitle(categoryName);
  const slug = routerMatch.params.slug;
  console.log(Products.data, loading);

  useEffect(() => {
    dispatch(
      getProduct({
        id: slug?.substr(slug?.lastIndexOf('id') + 2),
        pageQueryParam: parsed.page,
        sortQueryParam: parsed.sort,
      })
    );

    return documentTitle === undefined ? null : documentTitle, setLoading(false);
  }, [routerMatch]);
  useEffect(() => {
    if (!Products.data && Categories.data === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [Products.data]);

  const setLayoutList = () => {
    setLayout('list');
  };
  const setLayoutGrid = () => {
    setLayout('grid');
  };
  return loading ? (
    <LoadingCard />
  ) : (
    <>
      <Breadcrumbs links={[{ title: 'Trang chủ', link: '/' }, { title: categoryName }]} />
      <main className={layout === 'list' ? 'category-page category-list' : 'category-page category-grid'}>
        <div className="container">
          <CategoryTitle
            cateName={categoryName}
            setLayoutList={setLayoutList}
            setLayoutGrid={setLayoutGrid}
            productCount={Products.paginate?.count}
          />
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
                layout === 'grid' ? <CategoryGrid {...e} key={i} /> : <CategoryList {...e} key={i} />
              )}
              <Pagination
                paginate={Products.paginate}
                renderLink={(e) => {
                  if (slug === undefined) {
                    return '/the-loai' + `?page=${e}`;
                  } else {
                    return `/the-loai/${slug}` + `?page=${e}`;
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
