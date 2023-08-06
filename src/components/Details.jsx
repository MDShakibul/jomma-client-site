import InvestIcon from "../assets/images/InvestIcon.png";
const Details = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center mt-5">
        <img src={InvestIcon} alt="" />
        <p
          className="mb-0 ms-2"
          style={{ fontSize: "36px", fontWeight: "600", color: "#E4572E" }}
        >
          Invest
        </p>
      </div>

      <div className="d-flex justify-content-around mt-5">
        <p className="mb-0 bottom-border">Stocks</p>
        <p className="mb-0" style={{ fontSize: "20px" }}>
          Bonds
        </p>
        <p className="mb-0" style={{ fontSize: "20px" }}>
          Mutual Funds
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#EAF2F2",
          margin: "5rem",
          padding: "2rem 5rem",
        }}
      >
        <div className="row">
          <div className="col-lg-6">
            <h1>Portfolio Value (TK)</h1>
          </div>
          <div className="col-lg-6">
            <h1 style={{ color: "#2C7C7A" }}>268.00</h1>
          </div>
          <div className="col-lg-6">
            <h1>Total Units</h1>
          </div>
          <div className="col-lg-6">
            <h1 style={{ color: "#2C7C7A" }}>15</h1>
          </div>
        </div>

        <p className="mb-0 mt-5" style={{ fontSize: '20px', fontWeight:'500' }}>since last week</p>
        <p style={{ fontSize: '20px', fontWeight:'500', color:'#389429' }}>0.87%</p>
      </div>
    </div>
  );
};

export default Details;
