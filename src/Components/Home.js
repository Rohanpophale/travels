import React from 'react';
import '../Home.css';

export default function Home() {
  return (
    <>
      {/* home section starts */}
      <section className="home" id="Home">
        <div className="content">
          <span>Discover</span>
          <h1>Unexplored Destinations</h1>
          <a href="#Home"><button className="btni">Book Now</button></a>
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
          <video src="./media/videos/Japan.mp4" muted autoplay loop className="video"></video>
          <div className="aContent">
            <span>Why choose us?</span>
            <h3>Nature's Majesty <br /> Awaits You</h3>
            <a href="#Home"><button className="btnv">READ MORE</button></a>
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
            <div className="col-md-8"><a href="./destination_1.html"><img alt="" src="./media/IMAGES/6.jpg" width="100%" /><div className="overlay"><div className="text">Kerala</div></div></a></div>
            <div className="col-6-col-md-4"><a href="./destination_1.html"><img alt="" src="./media/IMAGES/1.jpg" width="100%" height="100%" /><div className="overlay"><div className="text">Kerala</div></div></a></div>
          </div>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <div className="row">
            <div className="col-6-col-md-5"><a href="#Home"><img alt="" src="./media/IMAGES/14.jpg" width="100%" /></a></div>
            <div className="col-6-col-md-6"><a href="#Home"><img alt="" src="./media/IMAGES/21.jpg" width="100%" /></a></div>
            <div className="col-6-col-md-7"><a href="#Home"><img alt="" src="./media/IMAGES/20.jpg" width="100%" /></a></div>
          </div>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <div className="row">
            <div className="col-6"><a href="#Home"><img alt="" src="./media/IMAGES/22.jpg" width="100%" /></a></div>
            <div className="col-7"><a href="#Home"><img alt="" src="./media/IMAGES/7.jpg" width="100%" /></a></div>
          </div>

          <div className="row">
            <div className="col-md-8"><a href="#Home"><img alt="" src="./media/IMAGES/18.jpg" width="100%" /></a></div>
            <div className="col-6-col-md-4"><a href="#Home"><img alt="" src="./media/IMAGES/9.jpg" width="100%" height="98.5%" /></a></div>
          </div>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <div className="row">
            <div className="col-6-col-md-5"><a href="#Home"><img alt="" src="./media/IMAGES/4.jpg" width="100%" /></a></div>
            <div className="col-6-col-md-6"><a href="#Home"><img alt="" src="./media/IMAGES/5.jpg" width="100%" /></a></div>
            <div className="col-6-col-md-7"><a href="#Home"><img alt="" src="./media/IMAGES/2.jpg" width="100%" /></a></div>
          </div>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <div className="row">
            <div className="col-6"><a href="#Home"><img alt="" src="./media/IMAGES/12.jpg" width="100%" /></a></div>
            <div className="col-7"><a href="#Home"><img alt="" src="./media/IMAGES/15.jpg" width="100%" /></a></div>
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
              <img alt="" src="./media/IMAGES/logo/Worldwide.png" className="services_logo" />
              <h3>Worldwide</h3>
            </div>
            <div className="box">
              <i className="fas-fa-hiking"></i>
              <img alt="" src="./media/IMAGES/logo/Adventure.png" className="services_logo" />
              <h3>Adventure</h3>
            </div>
            <div className="box">
              <i className="fas-fa-utensils"></i>
              <img alt="" src="./media/IMAGES/logo/Food_&_Drinks.png" className="services_logo" />
              <h3>Food & Drinks</h3>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <i className="fas-fa-hotels"></i>
              <img alt="" src="./media/IMAGES/logo/Affordable_hotels.png" className="services_logo" />
              <h3>Affordable Hotels</h3>
            </div>
            <div className="box">
              <i className="fas-fa-wallet"></i>
              <img alt="" src="./media/IMAGES/logo/Affordable_price.png" className="services_logo" />
              <h3>Affordable Prices</h3>
            </div>
            <div className="box">
              <i className="fas-fa-headset"></i>
              <img alt="" src="./media/IMAGES/logo/24x7_support.png" className="services_logo" />
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
          <h1>We record memories</h1>
        </div>
        <div className="g-container">
          <div className="g-row">
            <div className="g-box">
              <img alt="" src="./media/IMAGES/gallary/cr1.jpg" className="gallary_photo" />
              <span>Travel Spot</span>
              <h3>Destination Name</h3>
            </div>
            <div className="g-box">
              <img alt="" src="./media/IMAGES/gallary/cr2.jpg" className="gallary_photo" />
              <span>Travel Spot</span>
              <h3>Destination Name</h3>
            </div>
            <div className="g-box">
              <img alt="" src="./media/IMAGES/gallary/cr3.jpg" className="gallary_photo" />
              <span>Travel Spot</span>
              <h3>Destination Name</h3>
            </div>
            <div className="g-box">
              <img alt="" src="./media/IMAGES/gallary/cr4.jpg" className="gallary_photo" />
              <span>Travel Spot</span>
              <h3>Destination Name</h3>
            </div>
          </div>
          <div className="g-row">
            <div className="g-box">
              <img alt="" src="./media/IMAGES/gallary/cr1.jpg" className="gallary_photo" />
              <span>Travel Spot</span>
              <h3>Destination Name</h3>
            </div>
            <div className="g-box">
              <img alt="" src="./media/IMAGES/gallary/cr2.jpg" className="gallary_photo" />
              <span>Travel Spot</span>
              <h3>Destination Name</h3>
            </div>
            <div className="g-box">
              <img alt="" src="./media/IMAGES/gallary/cr3.jpg" className="gallary_photo" />
              <span>Travel Spot</span>
              <h3>Destination Name</h3>
            </div>
            <div className="g-box">
              <img alt="" src="./media/IMAGES/gallary/cr4.jpg" className="gallary_photo" />
              <span>Travel Spot</span>
              <h3>Destination Name</h3>
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
            <img alt="" src="./media/IMAGES/blogs/b1.jpg" className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>Lakshmi Ahuja</b></h4>
              <p>Overall its is a good experience. Me and my famaily never forget this experience </p>
              <a href="#Home"><button className="blogbtn">read more</button></a>
            </div>
          </div>
          <div className="blog_card">
            <img alt="" src="./media/IMAGES/blogs/b2.jpg" className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>ahmed rashid mohammed</b></h4>
              <p>Overall its is a good experience. Me and my famaily never forget this experience</p>
              <a href="#Home"><button className="blogbtn">read more</button></a>
            </div>
          </div>
          <div className="blog_card">
            <img alt="" src="./media/IMAGES/blogs/b3.jpg" className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>mr and mrs antony</b></h4>
              <p>Overall it is a good experience. Me and my famaily never forget this experience </p>
              <a href="#Home"><button className="blogbtn">read more</button></a>
            </div>
          </div>
          <div className="blog_card">
            <img alt="" src="./media/IMAGES/blogs/b4.jpg" className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>Johan wood</b></h4>
              <p>Overall its is a good experience. Me and my famaily never forget this experience </p>
              <a href="#Home"><button className="blogbtn">read more</button></a>
            </div>
          </div>
          <div className="blog_card">
            <img alt="" src="./media/IMAGES/blogs/b5.jpg" className="blog_img_edit" />
            <div className="blog_container">
              <h4><b>Paul Jane</b></h4>
              <p>Overall its is a good experience. Me and my famaily never forget this experience </p>
              <a href="#Home"><button className="blogbtn">read more</button></a>
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
            <a href="https://www.facebook.com/mctrgitofficial"><img alt="" src="./media/IMAGES/logo/facebook.png" className="media_icons" /></a>
            <a href="https://twitter.com/mctrgitofficial"><img alt="" src="./media/IMAGES/logo/twitter.png" className="media_icons" /></a>
            <a href="https://www.instagram.com/mctrgitofficial/"><img alt="" src="./media/IMAGES/logo/instagram.png" className="media_icons" /></a>
            <a href="https://www.linkedin.com/school/mctrgitofficial/"><img alt="" src="./media/IMAGES/logo/linkedin.png" className="media_icons" /></a>
            <a href="https://www.youtube.com/mctrgitofficial"><img alt="" src="./media/IMAGES/logo/youtube.png" className="media_icons" /></a>
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
            <li className="links2">Affordable hotels</li>
            <li className="links2">Affordable price</li>
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
        <img alt="" className="team" src="./media/IMAGES/logo/meet_team.png" />
        <img alt="" className="team" src="./media/IMAGES/logo/meet_team.png" />
        <img alt="" className="team" src="./media/IMAGES/logo/meet_team.png" />
        <img alt="" className="team" src="./media/IMAGES/logo/meet_team.png" />
      </footer>
      {/* footer section ends */}
    </>
  )
}