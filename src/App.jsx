import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from "./components/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Home/>
      <ToastContainer />
    </>
  );
}

export default App;
