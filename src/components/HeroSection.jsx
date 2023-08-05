import Balance from "../assets/images/Balnce.png";
const HeroSection = () => {
  return (
    <div className="gradient-color">
      <div className="container">
        <div className="d-flex justify-content-between py-5">
          <div>
            <p className="text-white">since last week</p>
            <p
              className="text-white mb-0"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              Portfolio Value
            </p>
            <div className="d-flex align-items-center mb-2">
              <img src={Balance} alt="" />
              <span
                className="ms-2 text-white"
                style={{ fontSize: "36px", fontWeight: "600" }}
              >
                0.00
              </span>
            </div>

            <p
              className="text-white mb-0"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              BO A/C Balance(Cash)
            </p>
            <div className="d-flex align-items-center">
              <img src={Balance} alt="" />
              <span
                className="ms-2 text-white"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                0.00
              </span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <div className="d-flex justify-content-end">
              <button className="px-4 py-2 bg-white" style={{ fontSize: '20px', color:'#2C7C7A', border:'2px solid #ffffff', borderRadius: '100px', fontWeight:'500' }}>Prefund Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
