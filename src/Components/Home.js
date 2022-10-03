import React from 'react';
import '../Home.css';

import fback4 from "../media/IMAGES/fback4.jpg";

import img1 from "../media/IMAGES/1.jpg";
import img2 from "../media/IMAGES/2.jpg";
import img4 from "../media/IMAGES/4.jpg";
import img5 from "../media/IMAGES/5.jpg";
import img6 from '../media/IMAGES/6.jpg'
import img7 from '../media/IMAGES/7.jpg'
import img9 from '../media/IMAGES/9.jpg'
import img12 from '../media/IMAGES/12.jpg'
import img14 from "../media/IMAGES/14.jpg";
import img15 from "../media/IMAGES/15.jpg";
import img18 from "../media/IMAGES/18.jpg";
import img20 from "../media/IMAGES/20.jpg";
import img21 from "../media/IMAGES/21.jpg";
import img22 from "../media/IMAGES/22.jpg";

import worldwide from "../media/IMAGES/logo/Worldwide.png";
import adventure from "../media/IMAGES/logo/Adventure.png";
import foodDrinks from "../media/IMAGES/logo/Food_&_Drinks.png";
import hotels from "../media/IMAGES/logo/Affordable_hotels.png";
import price from "../media/IMAGES/logo/Affordable_price.png";
import support from "../media/IMAGES/logo/24x7_support.png";

import cr1 from "../media/IMAGES/gallary/cr1.jpg";
import cr2 from "../media/IMAGES/gallary/cr2.jpg";
import cr3 from "../media/IMAGES/gallary/cr3.jpg";
import cr4 from "../media/IMAGES/gallary/cr4.jpg";
import cr5 from "../media/IMAGES/gallary/cr5.jpg";
import cr6 from "../media/IMAGES/gallary/cr6.jpg";
import cr7 from "../media/IMAGES/gallary/cr7.jpg";
import cr8 from "../media/IMAGES/gallary/cr8.jpg";

import blog1 from "../media/IMAGES/blogs/b1.jpg";
import blog2 from "../media/IMAGES/blogs/b2.jpg";
import blog3 from "../media/IMAGES/blogs/b3.jpg";
import blog4 from "../media/IMAGES/blogs/b4.jpg";
import blog5 from "../media/IMAGES/blogs/b5.jpg";

import facebook from "../media/IMAGES/logo/facebook.png";
import twitter from "../media/IMAGES/logo/twitter.png";
import instagram from "../media/IMAGES/logo/instagram.png";
import linkedin from "../media/IMAGES/logo/linkedin.png";
import youtube from "../media/IMAGES/logo/youtube.png";

import pranav from "../media/IMAGES/our_team/pranav.jpeg";
import murtaza from "../media/IMAGES/our_team/murtaza.jpeg";
import rohan from "../media/IMAGES/our_team/rohan.jpeg";
import harish from "../media/IMAGES/our_team/harish.jpeg";

export default function Home() {
  return (
    <>
      {/* home section starts */}
      <section className="home" id="Home">
        <div className="content">
          <span>Discover</span>
          <h1>Unexplored Destinations</h1>
          {/* <a href="#Home"><button className="btni">Book Now</button></a> */}
        </div>
      </section>
      {/* home section ends */}

      {/* booking form section starts */}
      <section className="book-form" id="book-form">
        <form action="">
          <div className="inputBox">
            <span>Where to?</span>
            <input type="text" name="place" placeholder="Destination" className="forminputs" />
          </div>
          <div className="inputBox">
            <span>When?</span>
            <input type="date" placeholder='Date' className="forminputs" />
          </div>
          <div className="inputBox">
            <span>How many?</span>
            <input type="number" name="place" placeholder="No. of Travelers" className="forminputs" />
          </div>
          <button className='btnf'>Search</button>
        </form>
      </section>
      {/* booking form section ends */}

      {/* About section starts */}
      <section className="about" id="about">
        <div className="heading-about">
          <h1>About Us</h1>
          <span>We at Maya Travels are dedicated towards providing a smooth and memorable travel experience to all our customers. </span>
        </div>
        <div className="video-container">
          <img alt="" src={fback4} className="video" />
          <div className="aContent">
            <span>Why choose us?</span>
            <h3>Nature's Majesty <br /> Awaits You</h3>
            {/* <a href="#Home"><button className="btnv">Read more</button></a> */}
          </div>
        </div>
      </section>
      {/* About section ends */}

      {/* destination section start */}
      <section className="destination" id="destination">
        <div className="heading">
          <span>Destinations</span>
          <h1>Plan your Vacation</h1>
        </div>

        <div className="container-text-center">
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <div className="row">
            <div className="col-md-8"><a href="./destination_1.html"><img alt="" src={img6} width="100%" /><div className="overlay"><div className="text">Kerala</div></div></a></div>
            <div className="col-6-col-md-4"><a href="./destination_1.html"><img alt="" src={img1} width="100%" height="100%" /><div className="overlay"><div className="text">Kerala</div></div></a></div>
          </div>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <div className="row">
            <div className="col-6-col-md-5"><a href="#Home"><img alt="" src={img14} width="100%" /></a></div>
            <div className="col-6-col-md-6"><a href="#Home"><img alt="" src={img21} width="100%" /></a></div>
            <div className="col-6-col-md-7"><a href="#Home"><img alt="" src={img20} width="100%" /></a></div>
          </div>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <div className="row">
            <div className="col-6"><a href="#Home"><img alt="" src={img22} width="100%" /></a></div>
            <div className="col-6"><a href="#Home"><img alt="" src={img7} width="100%" /></a></div>
          </div>

          <div className="row">
            <div className="col-md-8"><a href="#Home"><img alt="" src={img18} width="100%" /></a></div>
            <div className="col-6-col-md-4"><a href="#Home"><img alt="" src={img9} width="100%" height="98.5%" /></a></div>
          </div>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <div className="row">
            <div className="col-6-col-md-5"><a href="#Home"><img alt="" src={img4} width="100%" /></a></div>
            <div className="col-6-col-md-6"><a href="#Home"><img alt="" src={img5} width="100%" /></a></div>
            <div className="col-6-col-md-7"><a href="#Home"><img alt="" src={img2} width="100%" /></a></div>
          </div>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <div className="row">
            <div className="col-6"><a href="#Home"><img alt="" src={img12} width="100%" /></a></div>
            <div className="col-6"><a href="#Home"><img alt="" src={img15} width="100%" /></a></div>
          </div>

        </div>
      </section>
      {/* destination section ends */}

      {/* service section starts */}
      <section className="service" id="service">
        <div className="heading">
          <span>Our Services</span>
          <h1>Seamless Experiences</h1>
        </div>

        <div className="box-container">
          <div className="row">
            <div className="box">
              <i className="fas-fa-globe"></i>
              <img alt="" src={worldwide} className="services_logo" />
              <h3>Worldwide</h3>
            </div>
            <div className="box">
              <i className="fas-fa-hiking"></i>
              <img alt="" src={adventure} className="services_logo" />
              <h3>Adventure</h3>
            </div>
            <div className="box">
              <i className="fas-fa-utensils"></i>
              <img alt="" src={foodDrinks} className="services_logo" />
              <h3>Food & Drinks</h3>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <i className="fas-fa-hotels"></i>
              <img alt="" src={hotels} className="services_logo" />
              <h3>Luxury Hotels</h3>
            </div>
            <div className="box">
              <i className="fas-fa-wallet"></i>
              <img alt="" src={price} className="services_logo" />
              <h3>Reasonable Prices</h3>
            </div>
            <div className="box">
              <i className="fas-fa-headset"></i>
              <img alt="" src={support} className="services_logo" />
              <h3>24x7 Support</h3>
            </div>
          </div>
        </div>
      </section>
      {/* service section ends */}

      {/* gallery section starts */}
      <section className="gallery" id="gallery">
        <div className="heading">
          <span>Gallery</span>
          <h1>Moments to Remember</h1>
        </div>
        <div className="g-container">
          <div className="g-row">
            <div className="g-box">
              <img alt="" src={cr1} className="gallary_photo" />
              <span>Baga Beach</span>
              <h3>Goa</h3>
            </div>
            <div className="g-box">
              <img alt="" src={cr2} className="gallary_photo" />
              <span>Hawa Mahal</span>
              <h3>Jaipur</h3>
            </div>
            <div className="g-box">
              <img alt="" src={cr3} className="gallary_photo" />
              <span> Dal Lake</span>
              <h3>Kashmir</h3>
            </div>
            <div className="g-box">
              <img alt="" src={cr4} className="gallary_photo" />
              <span>Golden Temple</span>
              <h3>Amritsar</h3>
            </div>
          </div>
          <div className="g-row">
            <div className="g-box">
              <img alt="" src={cr5} className="gallary_photo" />
              <span>Salong Valley</span>
              <h3>Manali</h3>
            </div>
            <div className="g-box">
              <img alt="" src={cr6} className="gallary_photo" />
              <span> Taj Mahal</span>
              <h3>Agra</h3>
            </div>
            <div className="g-box">
              <img alt="" src={cr7} className="gallary_photo" />
              <span>Lotus Temple</span>
              <h3>Delhi</h3>
            </div>
            <div className="g-box">
              <img alt="" src={cr8} className="gallary_photo" />
              <span>Marine Drive</span>
              <h3>Mumbai</h3>
            </div>
          </div>
        </div>
      </section>
      {/* gallery section ends */}

      {/* blogs section starts */}
      <section className="blogs" id="blogs">
        <div className="heading">
          <span>Blogs and Posts</span>
          <h1>Memorable Experiences</h1>
        </div>
        <div className="blog_card_main_container">
          <div className="blog_card">
            <img alt="" src={blog1} className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>Lakshmi Ahuja</b></h4>
              <p>Overall its is a good experience. Me and my famaily never forget this experience </p>
              <a href="#Home"><button className="blogbtn">Read more</button></a>
            </div>
          </div>
          <div className="blog_card">
            <img alt="" src={blog2} className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>Rashid Ahmed</b></h4>
              <p>Overall its is a good experience. Me and my famaily never forget this experience</p>
              <a href="#Home"><button className="blogbtn">Read more</button></a>
            </div>
          </div>
          <div className="blog_card">
            <img alt="" src={blog3} className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>Anthony D'souza</b></h4>
              <p>Overall it is a good experience. Me and my famaily never forget this experience </p>
              <a href="#Home"><button className="blogbtn">Read more</button></a>
            </div>
          </div>
          <div className="blog_card">
            <img alt="" src={blog4} className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>Abhishek Roy</b></h4>
              <p>Overall its is a good experience. Me and my famaily never forget this experience </p>
              <a href="#Home"><button className="blogbtn">Read more</button></a>
            </div>
          </div>
          <div className="blog_card">
            <img alt="" src={blog5} className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>Manish Shah</b></h4>
              <p>Overall its is a good experience. Me and my famaily never forget this experience </p>
              <a href="#Home"><button className="blogbtn">Read more</button></a>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section ends */}

      {/* footer section starts */}
      <footer className="footer" id="contact us">
        <div className="top_part">
          <div className="footerlogo">
            <h1>Maya Travels</h1>
          </div>
          <div className="media-icons">
            <a href="https://www.facebook.com/mctrgitofficial"><img alt="" src={facebook} className="media_icons" /></a>
            <a href="https://twitter.com/mctrgitofficial"><img alt="" src={twitter} className="media_icons" /></a>
            <a href="https://www.instagram.com/mctrgitofficial/"><img alt="" src={instagram} className="media_icons" /></a>
            <a href="https://www.linkedin.com/school/mctrgitofficial/"><img alt="" src={linkedin} className="media_icons" /></a>
            <a href="https://www.youtube.com/mctrgitofficial"><img alt="" src={youtube} className="media_icons" /></a>
          </div>
        </div>
        <hr />
        <div className="footerbottom">
          <ul className="links1">
            <li className="links2 headline" >MENU</li>
            <li className="links2"><a href="#Home">Home</a></li>
            <li className="links2"><a href="#about">About Us</a></li>
            <li className="links2"><a href="#destination">Destinations</a></li>
            <li className="links2"><a href="#service">Services</a></li>
            <li className="links2"><a href="#gallery">Gallery</a></li>
            <li className="links2"><a href="#blogs">Blogs</a></li>
            <li className="links2"><a href="#contact us">Contact Us</a></li>
          </ul>
          <ul className="links1">
            <li className="links2 headline">SERVICES</li>
            <li className="links2">Worldwide</li>
            <li className="links2">Adventure</li>
            <li className="links2">Food & Drinks</li>
            <li className="links2">Luxury Hotels</li>
            <li className="links2">Reasonable Prices</li>
            <li className="links2">24x7 support</li>
          </ul>
          <ul className="links1">
            <li className="links2 headline">OUR TEAM</li>
            <li className="links2"><a href="./meet_the_team.html#team_member1">Pranav Ghasghase</a></li>
            <li className="links2"><a href="./meet_the_team.html#team_member2">Murtaza Burhani</a></li>
            <li className="links2"><a href="./meet_the_team.html#team_member3">Rohan Pophale</a></li>
            <li className="links2"><a href="./meet_the_team.html#team_member4">Harish Yadav</a></li>
          </ul>
          <ul className="links1">
            <li className="links2 headline">DEVELOPER'S DESK</li>
            <li className="links2"><a href="#Home">ghasghasepranav@gmail.com</a></li>
            <li className="links2"><a href="#Home">murtazaburhani62@gmail.com</a></li>
            <li className="links2"><a href="#Home">pophaler763@gmail.com</a></li>
            <li className="links2"><a href="#Home">harishyadav8444@gmail.com</a></li>
          </ul>
          <ul className="links1">
            <li className="links2 headline">SUBSCRIBE</li>
            <li><input type="text" placeholder="Your Email" className="feedback1" /></li>
            <li><input type="button" value="Subscribe" className="feedback2" /></li>
          </ul>
        </div>
        <h2><i>Meet the Team</i></h2>
        <div className='photos'>
          <img alt="" className="team" src={pranav} />
          <img alt="" className="team" src={murtaza} />
          <img alt="" className="team" src={rohan} />
          <img alt="" className="team" src={harish} />
        </div>
      </footer>
      {/* footer section ends */}
    </>
  )
}