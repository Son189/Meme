import React from 'react';
import FacebookImage from './images/fb.png';
import TwitterImage from './images/twitter.png';
import InstagramImage from './images/insta.png';
import sk from './images/pov.jpg'

const Contact = () => {
  return (
    <div className='ctss'>
        <img src= {sk} alt= 'mwahahah'></img>
      <h1>Contact Us</h1>
      <p>Phone Number: </p>
        <p>0728306031/0729563326</p>
      <p>Social Media: 
        <a href="https://www.facebook.com/yourusername">
          <img src={FacebookImage} alt="Facebook Image" />
        </a>
        <a href="https://www.twitter.com/yourusername">
          <img src={TwitterImage} alt="Twitter Image" />
        </a>
        <a href="https://www.instagram.com/yourusername">
          <img src={InstagramImage} alt="Instagram Image" />
        </a>
      </p>
      
      <p>Location: </p>
      <p>Head Office Justic Building Karen 1st floor</p>
      <p>Email: <a href="mailto:you@example.com">threemuskateers@gmail.com</a></p>
    </div>
  );
};

export default Contact;
