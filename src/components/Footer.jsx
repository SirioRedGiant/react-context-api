import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5 border-top border-warning border-4">
      <div className="container">
        <div className="row g-4">
          {/*//note  Colonna 1: Brand */}
          <div className="col-md-4">
            <h5 className="fw-bold text-warning mb-3">Sirio's Businesses</h5>
            <p className="small text-secondary">
              The world's first e-commerce that doesn't actually want your
              money, but will take it anyway. No refunds, no regrets, no hope.
            </p>
          </div>

          {/*//note  Colonna 2: Link Inutili */}
          <div className="col-md-4 text-md-center">
            <h5 className="fw-bold mb-3 text-warning">
              Useful links (they aren't)
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-secondary text-decoration-none hover-warning"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-secondary text-decoration-none"
                >
                  Our merch! Today isn't bad...if you really care, make it
                  quick!
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-secondary text-decoration-none"
                >
                  Who's to blame
                </Link>
              </li>
            </ul>
          </div>

          {/*//note  Colonna 3: Contatti finti */}
          <div className="col-md-4 text-md-end">
            <h5 className="fw-bold mb-3 text-warning">
              Get in touch (good luck)
            </h5>
            <p className="small mb-1"> 123 Flooded Garage</p>
            <p className="small mb-1">
              📞 +77-0000001234 we have also business cards(We use it as a
              coaster)
            </p>
            <p className="small">📧 support@ignore-you.com</p>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        {/*//note  Copyright & Slogan */}
        <div className="text-center small text-secondary">
          <p className="mb-0">
            © {new Date().getFullYear()} Sirio's Businesses & Secrets. All
            rights reserved to us. You get nothing.
          </p>
          <span
            className="fst-italic opacity-50"
            style={{ fontSize: "0.7rem" }}
          >
            Made with tears and too much CSS.
          </span>
        </div>
      </div>
    </footer>
  );
}
