import { Link } from 'react-router-dom';

export default function CateroryTitle({ title = 'Fruit and vegetables', total = '117' }) {
  return (
    <div className="row category-list--title">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="view">
        <Link to="/danh-sach">
          <i>
            <img src="/assets/img/layer.svg" alt="" />
          </i>
          Lưới
        </Link>
        <Link to="/danh-sach">
          <i>
            <img src="/assets/img/layer2.svg" alt="" />
          </i>
          Cột
        </Link>
        <span>
          <i>{total}</i> Products
        </span>
      </div>
    </div>
  );
}
