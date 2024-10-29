import './Navbar.css';
import logo from '../../assets/logo.png'; // Adjust path as needed


const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        <img src={logo} alt="Green Bonsai" />
        <span className="logo-text">Green Bonsai</span>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Shop</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Wishlist</li>
      </ul>
      <div className="nav-icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-cart"></i>
        <button className="nav-contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
