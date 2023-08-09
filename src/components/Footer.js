import { Link } from "react-router-dom";
import {FaTelegramPlane,FaInstagramSquare,FaPinterestSquare } from 'react-icons/fa';
import {AiFillFacebook,AiFillTwitterSquare} from 'react-icons/ai';


export default function Footer() {
  return (
    <footer>
        <div className="footer-side">
            <h2>BarberShop</h2>
            <p>Jln Cempaka Wangi No 22, Jakarta - Indonesia</p>
            <p><b>Phone :</b>(+62)21-2002-2012</p>
        </div>
        <div className="footer-side">
            <h2>Working Hours</h2>
            <h3>Monday-Friday:</h3>
            <span>09.00-20.00</span>
            <h3>Saturday-Sunday:</h3>
            <span>Closed</span>
        </div>
        <div className="footer-side">
            <h2>Quick Links</h2>
            <Link to='/'>Home</Link>
            <Link to='/Service'>Service</Link>
            <Link to='/Shop'>Shop</Link>
            <Link to='/Queuing'>Queuing</Link>
            <Link to='/Contacts'>Contacts</Link>
        </div>
        <div className="footer-side">
            <h2>Newsletter</h2>
            <p>Sign up our newsletter to get update information, news and free insight.</p>
            <label>
                <input type="email" placeholder="Your Email" />
                <button><FaTelegramPlane /></button>
            </label>
            <div className="social">
                    <FaInstagramSquare />
                    <AiFillFacebook />
                    <AiFillTwitterSquare />
                    <FaPinterestSquare />
                </div>
        </div>
    </footer>
  )
}
