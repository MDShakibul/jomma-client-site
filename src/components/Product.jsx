import Filter from "../assets/images/Filter_Icon.png";
import Loss from "../assets/images/Loss_rate.png";
import Profite from "../assets/images/Profite_rate.png";
import Done from "../assets/images/Done.png";
import Add from "../assets/images/Add.png";
import Cancel from "../assets/images/Cancel.png";
const Product = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <p className="mb-0 bottom-border">Buy Requests</p>
        <p className="mb-0 ms-5" style={{ fontSize: "20px" }}>
          Sell Request
        </p>
      </div>
      <form className="d-flex justify-content-center align-items-center my-5 ">
        <input
          type="text"
          name=""
          id=""
          className="custom-input"
          placeholder="Select Stock"
        />
        <button className="btn-rest ms-5 px-5 py-2">Clear</button>
      </form>

      <table className="table table-striped container" id="my-custom-table">
        <thead>
          <tr>
            <th scope="col" className="table-title">
              Stocks
            </th>
            <th scope="col" className="table-title">
              Unite Price (TK) <br /> Gain/Loss(%)
            </th>
            <th scope="col" className="table-title">
              Year to Date <br />
              (%)
            </th>
            <th scope="col" className="table-title">
              <img src={Filter} alt="" /> <br />
              Filter
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p
                className="mb-0"
                style={{ fontSize: "36px", fontWeight: "600" }}
              >
                GP
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "5px",
                }}
              >
                Grameenphone
              </p>
            </td>
            <td>
              <p
                className="mb-0"
                style={{ fontSize: "36px", fontWeight: "600" }}
              >
                86.00
              </p>
              <div className="d-flex align-items-center">
                <img src={Loss} alt="" style={{ marginTop: "5px" }} />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#EE1818",
                    margin: "5px 0 0 10px",
                  }}
                >
                  0.43%
                </span>
              </div>
            </td>
            <td style={{ verticalAlign: "middle" }}>
              <div className="d-flex align-items-center">
                <img src={Profite} alt="" style={{ marginTop: "5px" }} />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#389429",
                    margin: "5px 0 0 10px",
                  }}
                >
                  18.70%
                </span>
              </div>
            </td>
            <td style={{ verticalAlign: "middle" }}>
              <img src={Done} alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="mb-0"
                style={{ fontSize: "36px", fontWeight: "600" }}
              >
                GP
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "5px",
                }}
              >
                Grameenphone
              </p>
            </td>
            <td>
              <p
                className="mb-0"
                style={{ fontSize: "36px", fontWeight: "600" }}
              >
                86.00
              </p>
              <div className="d-flex align-items-center">
                <img src={Loss} alt="" style={{ marginTop: "5px" }} />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#EE1818",
                    margin: "5px 0 0 10px",
                  }}
                >
                  0.43%
                </span>
              </div>
            </td>
            <td style={{ verticalAlign: "middle" }}>
              <div className="d-flex align-items-center">
                <img src={Profite} alt="" style={{ marginTop: "5px" }} />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#389429",
                    margin: "5px 0 0 10px",
                  }}
                >
                  18.70%
                </span>
              </div>
            </td>
            <td style={{ verticalAlign: "middle" }}>
              <img src={Add} alt="" />
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ backgroundColor: "#fceeea" }}>
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-2">
              <button className="px-3 py-1" style={{ fontSize: '20px', fontWeight:'600', color:'#2C7C7A', border:'2px solid #2C7C7A', borderRadius: '100px', backgroundColor:'#fceeea' }}>GP <img style={{ marginTop:'-5px' }} src={Cancel} alt="" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
      <button className="btn-rest ms-5 px-5 py-2">Next</button>
      </div>
    </>
  );
};

export default Product;
