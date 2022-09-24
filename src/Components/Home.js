import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

export default function Home() {
  return (
    <>
      {/* navigation bar starts  */}
      <header class="nav_bar">
        <div class="logo">
          <h1>Maya Travels</h1>
        </div>
        <div class="nav">
          <a href="#Home">Home</a>
          <a href="#about">About us</a>
          <a href="#destination">destination</a>
          <a href="#service">service</a>
          <a href="#gallery">gallery</a>
          <a href="#blogs">blogs</a>
          <a href="#contact us">contact us</a>
        </div>
        <div class="book">
          <Link to="./login"><button class="booknow"><b>Login Here</b></button></Link>
        </div>
      </header>
      {/* navigation bar ends */}

      {/* home section starts */}
      <section class="home" id="Home">
        <div class="content">
          <span>Follow more</span>
          <h1>on unkonow place</h1>
          <a href="#"><button class="btni">Book Now</button></a>
        </div>
      </section>
      {/* home section ends */}

      {/* booking form section starts */}
      <section class="book-form" id="book-form">
        <form action="">
          <div class="inputBox">
            <span>Where to?</span>
            <input type="text" name="place" placeholder="place-name" value="" class="forminputs" />
          </div>
          <div class="inputBox">
            <span>When?</span>
            <input type="date" value="" class="forminputs" />
          </div>
          <div class="inputBox">
            <span>How many?</span>
            <input type="number" name="place" placeholder="number of travelers" value="" class="forminputs" />
          </div>
          <input type="submit" value="FIND" class="btnf" />
        </form>
      </section>
      {/* booking form section ends */}

      {/* About section starts */}
      <section class="about" id="about">
        <div class="heading-about">
          <span>About Us</span>
          <h1>Please Read</h1>
        </div>
        <div class="video-container">
          <video src="./media/videos/Japan.mp4" muted autoplay loop class="video"></video>
          <div class="aContent">
            <span>Why choose us ?</span>
            <h3>Nature's Majesty Awaits You</h3>
            <a href="#"><button class="btnv">READ MORE</button></a>
          </div>
        </div>
      </section>
      {/* About section ends */}

      {/* destination section start */}
      <section class="destination" id="destination">
        <div class="heading">
          <span>Our Destination</span>
          <h1>Make Your Destination</h1>
        </div>

        <div class="container-text-center">
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <div class="row">
            <div class="col-md-8"><a href="./destination_1.html"><img src="./media/IMAGES/6.jpg" width="100%" /><div class="overlay"><div class="text">Kerala</div></div></a></div>
            <div class="col-6-col-md-4"><a href="./destination_1.html"><img src="./media/IMAGES/1.jpg" width="100%" height="100%" /><div class="overlay"><div class="text">Kerala</div></div></a></div>
          </div>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <div class="row">
            <div class="col-6-col-md-5"><a href="#"><img src="./media/IMAGES/14.jpg" width="100%" /></a></div>
            <div class="col-6-col-md-6"><a href="#"><img src="./media/IMAGES/21.jpg" width="100%" /></a></div>
            <div class="col-6-col-md-7"><a href="#"><img src="./media/IMAGES/20.jpg" width="100%" /></a></div>
          </div>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <div class="row">
            <div class="col-6"><a href="#"><img src="./media/IMAGES/22.jpg" width="100%" /></a></div>
            <div class="col-7"><a href="#"><img src="./media/IMAGES/7.jpg" width="100%" /></a></div>
          </div>

          <div class="row">
            <div class="col-md-8"><a href="#"><img src="./media/IMAGES/18.jpg" width="100%" /></a></div>
            <div class="col-6-col-md-4"><a href="#"><img src="./media/IMAGES/9.jpg" width="100%" height="98.5%" /></a></div>
          </div>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <div class="row">
            <div class="col-6-col-md-5"><a href="#"><img src="./media/IMAGES/4.jpg" width="100%" /></a></div>
            <div class="col-6-col-md-6"><a href="#"><img src="./media/IMAGES/5.jpg" width="100%" /></a></div>
            <div class="col-6-col-md-7"><a href="#"><img src="./media/IMAGES/2.jpg" width="100%" /></a></div>
          </div>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <div class="row">
            <div class="col-6"><a href="#"><img src="./media/IMAGES/12.jpg" width="100%" /></a></div>
            <div class="col-7"><a href="#"><img src="./media/IMAGES/15.jpg" width="100%" /></a></div>
          </div>

        </div>
      </section>
      {/* destination section ends */}

      {/* service section starts */}
      <section class="service" id="service">
        <div class="heading">
          <span>Our Services</span>
          <h1>Seamless Experiences</h1>
        </div>

        <div class="box-container">
          <div class="row">
            <div class="box">
              <i class="fas-fa-globe"></i>
              <img src="./media/IMAGES/logo/Worldwide.png" class="services_logo" />
                <h3>Worldwide</h3>
                <p>type discription here</p>
            </div>
            <div class="box">
              <i class="fas-fa-hiking"></i>
              <img src="./media/IMAGES/logo/Adventure.png" class="services_logo" />
                <h3>Adventure</h3>
                <p>type discription here</p>
            </div>
            <div class="box">
              <i class="fas-fa-utensils"></i>
              <img src="./media/IMAGES/logo/Food_&_Drinks.png" class="services_logo" />
                <h3>Food & Drinks</h3>
                <p>type discription here</p>
            </div>
          </div>
          <div class="row">
            <div class="box">
              <i class="fas-fa-hotels"></i>
              <img src="./media/IMAGES/logo/Affordable_hotels.png" class="services_logo" />
                <h3>Affordable hotels</h3>
                <p>type discription here</p>
            </div>
            <div class="box">
              <i class="fas-fa-wallet"></i>
              <img src="./media/IMAGES/logo/Affordable_price.png" class="services_logo" />
                <h3>Affordable price</h3>
                <p>type discription here</p>
            </div>
            <div class="box">
              <i class="fas-fa-headset"></i>
              <img src="./media/IMAGES/logo/24x7_support.png" class="services_logo" />
                <h3>24x7 support</h3>
                <p>type discription here</p>
            </div>
          </div>
        </div>
      </section>
      {/* service section ends */}

      {/* gallery section starts */}
      <section class="gallery" id="gallery">
        <div class="heading">
          <span>Our gallery</span>
          <h1>We record memories</h1>
        </div>
        <div class="g-container">
          <div class="g-row">
            <div class="g-box">
              <img src="./media/IMAGES/gallary/cr1.jpg" class="gallary_photo" />
                <span>Traval sport</span>
                <h3>destination name</h3>
            </div>
            <div class="g-box">
              <img src="./media/IMAGES/gallary/cr2.jpg" class="gallary_photo" />
                <span>Traval sport</span>
                <h3>destination name</h3>
            </div>
            <div class="g-box">
              <img src="./media/IMAGES/gallary/cr3.jpg" class="gallary_photo" />
                <span>Traval sport</span>
                <h3>destination name</h3>
            </div>
            <div class="g-box">
              <img src="./media/IMAGES/gallary/cr4.jpg" class="gallary_photo" />
                <span>Traval sport</span>
                <h3>destination name</h3>
            </div>
          </div>
          <div class="g-row">
            <div class="g-box">
              <img src="./media/IMAGES/gallary/cr1.jpg" class="gallary_photo" />
                <span>Traval sport</span>
                <h3>destination name</h3>
            </div>
            <div class="g-box">
              <img src="./media/IMAGES/gallary/cr2.jpg" class="gallary_photo" />
                <span>Traval sport</span>
                <h3>destination name</h3>
            </div>
            <div class="g-box">
              <img src="./media/IMAGES/gallary/cr3.jpg" class="gallary_photo" />
                <span>Traval sport</span>
                <h3>destination name</h3>
            </div>
            <div class="g-box">
              <img src="./media/IMAGES/gallary/cr4.jpg" class="gallary_photo" />
                <span>Traval sport</span>
                <h3>destination name</h3>
            </div>
          </div>
        </div>
      </section>
      {/* gallery section ends */}

      {/* blogs section starts */}
      <section class="blogs" id="blogs">
        <div class="heading">
          <span>blogs and posts</span>
          <h1>untold stories</h1>
        </div>
        <div class="blog_card_main_container">
          <div class="blog_card">
            <img src="./media/IMAGES/blogs/b1.jpg" class="blog_img_edit" />
              <div class="blog_container">
                <h4><b>Lakshmi Ahuja</b></h4>
                <p>Overall its is a good experience. Me and my famaily never forget this experience </p>
                <a href="#"><button class="blogbtn">read more</button></a>
              </div>
          </div>
          <div class="blog_card">
            <img src="./media/IMAGES/blogs/b2.jpg" class="blog_img_edit" />
              <div class="blog_container">
                <h4><b>ahmed rashid mohammed</b></h4>
                <p>Overall its is a good experience. Me and my famaily never forget this experience</p>
                <a href="#"><button class="blogbtn">read more</button></a>
              </div>
          </div>
          <div class="blog_card">
            <img src="./media/IMAGES/blogs/b3.jpg" class="blog_img_edit" />
              <div class="blog_container">
                <h4><b>mr and mrs antony</b></h4>
                <p>Overall it is a good experience. Me and my famaily never forget this experience </p>
                <a href="#"><button class="blogbtn">read more</button></a>
              </div>
          </div>
          <div class="blog_card">
            <img src="./media/IMAGES/blogs/b4.jpg" class="blog_img_edit" />
              <div class="blog_container">
                <h4><b>Johan wood</b></h4>
                <p>Overall its is a good experience. Me and my famaily never forget this experience </p>
                <a href="#"><button class="blogbtn">read more</button></a>
              </div>
          </div>
          <div class="blog_card">
            <img src="./media/IMAGES/blogs/b5.jpg" class="blog_img_edit" />
            <div class="blog_container">
              <h4><b>Paul Jane</b></h4>
              <p>Overall its is a good experience. Me and my famaily never forget this experience </p>
              <a href="#"><button class="blogbtn">read more</button></a>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section ends */}

      {/* footer section starts */}
      <footer class="footer" id="contact us">
        <div class="top_part">
          <div class="footerlogo">
            <h1>Maya Travals</h1>
          </div>
          <div class="media-icons">
            <a href="https://www.facebook.com/mctrgitofficial"><img src="./media/IMAGES/logo/facebook.png" class="media_icons" /></a>
            <a href="https://twitter.com/mctrgitofficial"><img src="./media/IMAGES/logo/twitter.png" class="media_icons" /></a>
            <a href="https://www.instagram.com/mctrgitofficial/"><img src="./media/IMAGES/logo/instagram.png" class="media_icons" /></a>
            <a href="https://www.linkedin.com/school/mctrgitofficial/"><img src="./media/IMAGES/logo/linkedin.png" class="media_icons" /></a>
            <a href="https://www.youtube.com/mctrgitofficial"><img src="./media/IMAGES/logo/youtube.png" class="media_icons" /></a>
          </div>
        </div>
        <hr />
        <div class="footerbottom">
          <ul class="links1">
            <li class="links2 headline" >Menu</li>
            <li class="links2"><a href="#Home">Home</a></li>
            <li class="links2"><a href="#about">About us</a></li>
            <li class="links2"><a href="#destination">destination</a></li>
            <li class="links2"><a href="#service">service</a></li>
            <li class="links2"><a href="#gallery">gallery</a></li>
            <li class="links2"><a href="#blogs">blogs</a></li>
            <li class="links2"><a href="#contact us">contact us</a></li>
          </ul>
          <ul class="links1">
            <li class="links2 headline">Services</li>
            <li class="links2">Worldwide</li>
            <li class="links2">Adventure</li>
            <li class="links2">Food & Drinks</li>
            <li class="links2">Affordable hotels</li>
            <li class="links2">Affordable price</li>
            <li class="links2">24x7 support</li>
          </ul>
          <ul class="links1">
            <li class="links2 headline">Our team</li>
            <li class="links2"><a href="./meet_the_team.html#team_member1">Pranav G</a></li>
            <li class="links2"><a href="./meet_the_team.html#team_member2">Murtaza B</a></li>
            <li class="links2"><a href="./meet_the_team.html#team_member3">Rohan P</a></li>
            <li class="links2"><a href="./meet_the_team.html#team_member4">Harish Y</a></li>
          </ul>
          <ul class="links1">
            <li class="links2 headline">Our Handals</li>
            <li class="links2"><a href="#">ghasghasepranav@gmail.com</a></li>
            <li class="links2"><a href="#">murtazaburhani62@gmail.com</a></li>
            <li class="links2"><a href="#">pophaler763@gmail.com</a></li>
            <li class="links2"><a href="#">harishyadav8444@gmail.com</a></li>
          </ul>
          <ul class="box_input-box">
            <li class="links2 headline">Subscribe</li>
            <li><input type="text" placeholder="Enter your email" class="feedback1" /></li>
            <li><input type="button" value="Subscribe" class="feedback2" /></li>
          </ul>
        </div>
        <h2><i>Meet the team</i></h2>
        <img class="team" src="./media/IMAGES/logo/meet_team.png" />
          <img class="team" src="./media/IMAGES/logo/meet_team.png" />
            <img class="team" src="./media/IMAGES/logo/meet_team.png" />
              <img class="team" src="./media/IMAGES/logo/meet_team.png" />
              </footer>
              {/* footer section ends */}
          </>
          )
}