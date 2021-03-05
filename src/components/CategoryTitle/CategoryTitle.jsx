import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
CategoryTitle.propTypes = {
  cateName: PropTypes.string,
  setLayoutList: PropTypes.func.isRequired,
  setLayoutGrid: PropTypes.func.isRequired,
  productCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CategoryTitle.defaultProps = {
  cateName: 'Danh sách sản phẩm',
  productCount: '???',
};
export default function CategoryTitle({ cateName, setLayoutList, setLayoutGrid, productCount }) {
  return (
    <div className="row category-list--title">
      <div>
        <h2>{cateName}</h2>
      </div>
      <div className="view">
        <div
          onClick={() => {
            setLayoutList();
          }}
        >
          <i>
            <img src="/assets/img/layer.svg" alt="" />
          </i>
          Lưới
        </div>
        <div
          onClick={() => {
            setLayoutGrid();
          }}
        >
          <i>
            <img src="/assets/img/layer2.svg" alt="" />
          </i>
          Danh sách
        </div>
        <span>
          <i>{productCount}</i> Sản phẩm
        </span>
      </div>
    </div>
  );
}
