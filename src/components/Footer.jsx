import FaceBook from '../assets/images/Faceboon_icon.png';
import Linkedin from '../assets/images/Linkedin_icon.png';
import Twiter from '../assets/images/Twiter_icon.png';
import Instagram from '../assets/images/Instagram_icon.png';
const Footer = () => {
    return (
        <div className="footer-gradient-color mt-5">
        <div className="container">

        <div className="row py-4">
            <div className="col-lg-4 col-sm-6 col-sm-12">
                <div className='mb-3'>
                    <img className='me-4' src={FaceBook} alt="" />
                    <img className='me-4' src={Linkedin} alt="" />
                    <img className='me-4' src={Twiter} alt="" />
                    <img className='me-4' src={Instagram} alt="" />
                </div>
                <p className='mb-1' style={{ fontSize:'14px', color:'#fff'}}>Privacy Policy</p>
                <p className='mb-1' style={{ fontSize:'14px', color:'#fff'}}>Terns & Conditions</p>
            </div>
            <div className="col-lg-4 col-sm-6 col-sm-12">
                <p className='mb-1' style={{ fontSize:'14px', color:'#fff'}}>Invest</p>
                <p className='mb-1' style={{ fontSize:'14px', color:'#fff'}}>Market</p>
                <p className='mb-1' style={{ fontSize:'14px', color:'#fff'}}>BO Prefund & Withdraw</p>
                <p className='mb-1' style={{ fontSize:'14px', color:'#fff'}}>Finamce Planner</p>
                <p className='mb-1' style={{ fontSize:'14px', color:'#fff'}}>FAQs</p>
            </div>
            <div className="col-lg-4 col-sm-6 col-sm-12">
                <p className='mb-1' style={{ fontSize:'20px', color:'#fff', fontWeight:'600'}}>With to Us with your questions</p>
                <button className="px-5 py-1 mt-2" style={{ fontSize: '20px', fontWeight:'600', color:'#fff', border:'2px solid #fff', borderRadius: '100px', backgroundColor:'transparent' }}>Go to Help Page</button>
            </div>
        </div>


        <p className='text-center mb-0 pb-2' style={{ fontSize:'14px', color:'#fff'}}>Jomma is a service of Jomma Limited, a private limited company registered under the Companies Act 1994. Trade License: 000223</p>

        </div>
            
        </div>
    );
};

export default Footer;