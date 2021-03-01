export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__wrap">
            <div className="col-lg-6 footer__left">
              <div className="logo">
                <a href="#">
                  <img src="/assets/img/logo.svg" alt="logo" />
                </a>
              </div>
              <p>We earned a reputation of being good at what we do.</p>
              <p>Let us take your online shop to new dimension in success!</p>
              <div className="place">
                <i className="demo-icon icon-target" />
                <p>Comilla, Bangladesh 3500</p>
              </div>
              <div className="social">
                <span>kawsarahmed0210@gmail.com</span>
                <span>01647470457</span>
                <div className="social__icons">
                  <a href="#">
                    <i className="demo-icon icon-facebook" />
                  </a>
                  <a href="#">
                    <i className="demo-icon icon-instagram" />
                  </a>
                  <a href="#">
                    <i className="demo-icon icon-twitter" />
                  </a>
                  <a href="#">
                    <i className="demo-icon icon-linkedin-squared" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 footer__right">
              <div className="email col-lg-12">
                <h3>RECIVE EMAIL UPDATES</h3>
                <div className="search-container">
                  <form>
                    <input type="text" placeholder="Search.." name="search" />
                  </form>
                  <a href="#">Join</a>
                </div>
              </div>
              <div className="col-lg-4">
                <a href="#">
                  <h3>Shop</h3>
                </a>
                <a href="#">Shop</a>
                <a href="#">Collection</a>
                <a href="#">Outlet</a>
                <a href="#">Lookbook</a>
              </div>
              <div className="col-lg-4">
                <a href="#">
                  <h3>HELP</h3>
                </a>
                <a href="#">FAQ</a>
                <a href="#">Privecy Policy</a>
                <a href="#">Tearms and conditions</a>
                <a href="#">Return and Exchanges</a>
              </div>
              <div className="col-lg-4">
                <a href="#">
                  <h3>About</h3>
                </a>
                <a href="#">Journal</a>
                <a href="#">Our Story</a>
                <a href="#">Contact</a>
                <a href="#">Store Location</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
