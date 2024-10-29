import './Hero.css';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className='hero'>
      <h1>Welcome to Green Bonsai</h1>
      <h2>Your one-stop shop for all bonsai needs</h2>
      <button className="shop-button">Shop Now</button>
      <button className="contact-button">Contact Us</button>
    </div>
  );
};

export default Hero;
