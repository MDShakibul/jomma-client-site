import BrandLogo from "../assets/images/Jomma_logo.png";
import UserIcon from "../assets/images/Icon_name.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-2 mb-3">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="#">
          <img src={BrandLogo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-dark px-3"
                aria-current="page"
                href="#"
                style={{ fontSize: "20px", fontWeight: "400" }}
              >
                Invest
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark px-3"
                aria-current="page"
                href="#"
                style={{ fontSize: "20px", fontWeight: "400" }}
              >
                Market
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark px-3"
                aria-current="page"
                href="#"
                style={{ fontSize: "20px", fontWeight: "400" }}
              >
                BO Prefund & Withdraw
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div>
              <img src={UserIcon} alt="" />
            </div>
            <div>
              <button className="px-4 py-1 bg-light ms-5" style={{ fontSize: '20px', color:'#2C7C7A', border:'2px solid #2C7C7A', borderRadius: '100px', fontWeight:'500' }}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
