import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openCart } from '../../redux/actions/cartAction';
import { getCategory } from '../../redux/actions/categoryAction';
import './style.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Register from 'pages/Auths/Register';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import Login from 'pages/Auths/Login';
export default function Header() {
  let cart = useSelector((store) => store.cart);
  let categorytitle = useSelector((store) => store.category.categoryData);
  const [form, setForm] = useState('login');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
      fontSize: 'inherit',
    },
    closeButton: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  }));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <header className="header">
      <div className="container">
        {/* <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar> */}
        <div className="row">
          <div className="header__top ">
            <div className="header__top--left ">
              <span>Chat with us</span>
              <span>+420 336 775 664</span>
              <span>info@freshnesecom.com</span>
            </div>
            <div className="header__top--right">
              <Button
                color="inherit"
                className={classes.button}
                onClick={() => {
                  setForm('login');
                  handleClickOpen();
                }}
              >
                Đăng nhập
              </Button>
              <Button
                color="inherit"
                className={classes.button}
                onClick={() => {
                  setForm('register');
                  handleClickOpen();
                }}
              >
                Đăng ký
              </Button>
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
            <div className="search-container">
              <form>
                <input type="text" placeholder="Tìm kiếm sản phẩm" name="search" />
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
            <button href="#" onClick={() => dispatch(openCart())}>
              <i className="demo-icon icon-shopping-basket" />
              {cart.list.length > 0 && <span className="number-basket">{cart.list.length}</span>}
            </button>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>{form === 'login' ? <Login /> : <Register />}</DialogContent>
      </Dialog>
    </header>
  );
}
