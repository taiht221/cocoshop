import React, { createRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import CartPopup from './CartPopup';
import './style.scss';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openCart, closeCart } from '../redux/actions/cartAction';
import { getCategory } from '../redux/actions/categoryAction';

export default function Header() {
  let cart = useSelector((store) => store.cart);
  let categorytitle = useSelector((store) => store.category.categoryData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="header__top ">
            <div className="header__top--left ">
              <span>Chat with us</span>
              <span>+420 336 775 664</span>
              <span>info@freshnesecom.com</span>
            </div>
            <div className="header__top--right">
              <a href="#">Blog</a>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>
        <div className="row header__mid">
          <div className="logo ">
            <Link to="/">
              <img src="/assets/img/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="search ">
            <a href="#">
              All categories <i className="demo-icon icon-down-dir" />
            </a>
            <div className="search-container">
              <form>
                <input type="text" placeholder="Search Products, categories ..." name="search" />
              </form>
              <button type="submit">
                <i className="demo-icon icon-search" />
              </button>
            </div>
            <nav className="nav">
              <ul className="cate-top">
                {categorytitle
                  .map((e, i) => (
                    <li key={i}>
                      <Link to={`/the-loai/${e.slug}`}>{e.title}</Link>
                    </li>
                  ))
                  .slice(0, 3)}
              </ul>
            </nav>
          </div>
          <div className="icons ">
            <a href="#">
              <i className="demo-icon icon-adult" />
            </a>
            <a href="#" onClick={() => dispatch(openCart())}>
              <i className="demo-icon icon-shopping-basket" />
              {cart.list.length > 0 && <span className="number-basket">{cart.list.length}</span>}
            </a>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </header>
  );
}
