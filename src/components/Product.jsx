import { useState, useEffect } from "react";
import Filter from "../assets/images/Filter_Icon.png";
import Loss from "../assets/images/Loss_rate.png";
import Profite from "../assets/images/Profite_rate.png";
import Done from "../assets/images/Done.png";
import Add from "../assets/images/Add.png";
import Cancel from "../assets/images/Cancel.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchData();
  }, []);



  const handleImageClick = (addProduct) => {
    const isIdIncluded = selectedProducts.some(
      (product) =>
        product.product_id === addProduct.product_id &&
        product.product_name === addProduct.product_name
    );

    if (isIdIncluded) {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter(
          (item) => item?.product_id !== addProduct?.product_id
        )
      );
    } else setSelectedProducts((prevSelected) => [...prevSelected, addProduct]);
  };

  const handleSaveTransaction = () => {
    function mapSelectedProducts(selectedProducts) {
      return new Promise((resolve) => {
        const convertedArray = selectedProducts.map((product) => ({
          user_id: 1,
          product_id: product.product_id,
          order_amount: product.unit_price,
        }));
        resolve(convertedArray);
      });
    }

    mapSelectedProducts(selectedProducts)
      .then((convertedArray) => {
        const postData = async () => {
          try {
            const response = await fetch(
              `http://localhost:5000/v1/api/add-products`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(convertedArray),
              }
            );
            const responseData = await response.json();
            return responseData;
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

        postData()
          .then((responseData) => {
            if (responseData?.status === 200) {
              setSelectedProducts([]);
              toast.success("Save successfully");
            } else {
              toast.error("Save failed");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const filtered = products?.filter(
      (product) =>
        product.product_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        product.product_code.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handelClearSearch = () =>{
    setSearchQuery('')
    fetchData();
  }

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/v1/api/products`);
      const jsonData = await response.json();
      setProducts(jsonData?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const handleSorting = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Sort the products based on the sortOrder
  useEffect(() => {
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) => {
      const orderMultiplier = sortOrder === "asc" ? 1 : -1;
      return orderMultiplier * (a.product_id - b.product_id);
    });
    setFilteredProducts(sortedProducts);
  }, [sortOrder]);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <p className="mb-0 bottom-border">Buy Requests</p>
        <p className="mb-0 ms-5" style={{ fontSize: "20px" }}>
          Sell Request
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center my-5 ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="custom-input"
          placeholder="Select Stock"
        />
        <button className="btn-rest ms-5 px-5 py-2" onClick={handelClearSearch}>Clear</button>
      </div>

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
            <th scope="col" className="table-title" onClick={handleSorting} style={{ cursor: 'pointer' }}>
              <img src={Filter} alt="" /> <br />
              Filter
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts?.map((product) => (
            <tr key={product?.product_id}>
              <td>
                <p
                  className="mb-0"
                  style={{ fontSize: "36px", fontWeight: "600" }}
                >
                  {product?.product_code}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginTop: "5px",
                  }}
                >
                  {product?.product_name}
                </p>
              </td>
              <td>
                <p
                  className="mb-0"
                  style={{ fontSize: "36px", fontWeight: "600" }}
                >
                  {product?.unit_price}
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
                    {product?.gain_loss}%
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
                    {product?.year_to_date}%
                  </span>
                </div>
              </td>
              <td style={{ verticalAlign: "middle" }}>
                {
                  selectedProducts.includes(product) ? <img src={Done} alt="" />  : <img onClick={() => handleImageClick(product)} src={Add} alt="" style={{ cursor: 'pointer' }}/> 
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProducts?.length > 0 && (
        <div className="mt-4" style={{ backgroundColor: "#fceeea" }}>
          <div className="container py-4">
            <div className="row">
              {selectedProducts?.map((product, index) => (
                <div key={index} className="col-lg-3">
                  <button
                    className="px-3 py-1"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#2C7C7A",
                      border: "2px solid #2C7C7A",
                      borderRadius: "100px",
                      backgroundColor: "#fceeea",
                    }}
                    onClick={() => handleImageClick(product)}
                  >
                    {product?.product_code}{" "}
                    <img style={{ marginTop: "-5px" }} src={Cancel} alt="" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-center mt-5">
        <button
          className="btn-rest ms-5 px-5 py-2"
          onClick={handleSaveTransaction}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Product;
