import React from "react";
import "./Splash.scss";
import Slider from "react-slick";
// import Dog1 from "./Dog1.jpg";
// import Dog2 from "./Dog2.jpg";
// import Dog3 from "./Dog3.jpg";
// import Dog4 from "./Dog4.jpg";
// import Dog5 from "./Dog5.jpg";
// import Dog6 from "./Dog6.jpg";
// import Dog7 from "./Dog7.jpg";
// import Dog8 from "./Dog8.jpg";
import DogBanner1 from "./DogBanner1.jpg";
import DogBanner2 from "./DogBanner2.jpg";
import DogBanner3 from "./DogBanner3.png";
import Donation from './donate.png'
import adoption from './adoption.png'
import volunteer from './volunteer.png'

class SplashPage extends React.Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   variableWidth: true,
    //   autoplay: true,
    //   autoplaySpeed: 5000,
    };

    return (
      <div>
            <div className='splash-page-main-content-container'>
                <div>
                    <div>
                        <h1>Make a difference, help save a life</h1>
                    </div>
                </div>
                <div id='test'>
                <Slider {...settings}>
                    <div>
                        <img src={DogBanner1} alt="d1" className="Dog" />
                    </div>
                    <div>
                        <img src={DogBanner2} alt="d1" className="Dog" />
                    </div>
                    <div>
                        <img src={DogBanner3} alt="d1" className="Dog" />
                    </div>
                    {/* <div>
                        <img src={Dog8} alt="d2" className="Dog" />
                    </div>
                    <div>
                        <img src={Dog3} alt="d3" className="Dog" />
                    </div> */}
                </Slider>
                </div>
            </div>

            <div>
                <div className='helpful-information-banner-container'>
                    <div id='helpful-information-banner-parts'>
                        <img src={adoption} alt=""/>
                        <h1>Adopt a dog</h1>
                        <p>We have may dogs currently up for adoption. Show some love and 
                            help these cuties find the home they deserve. Adopt one of them today
                        </p>
                    </div>
                    <div id='helpful-information-banner-parts'>
                        <img src={Donation} alt="" />
                        <h1>Donate</h1>
                        <p>Maintaining this shelter takes alot of money. If you aren't able to adopt one you can 
                            always help by donating to this cost. Donate today
                        </p>
                    </div>
                    <div id='helpful-information-banner-parts'>
                        <img src={volunteer} alt="" />
                        <h1>Volunteer</h1>
                        <p>If you can't adopt and you can't donate but still want to help you can always give your time 
                            and volunteer. Checkout what you can do for these cuties here
                        </p>
                    </div>
                </div>
            </div>
            <div className='splash-page-footer-container'>
                <div className='splash-page-footer-parts'>
                    <h1>ABOUT FIND MY PAWRENTS</h1>
                    <div>FAQS</div>
                    <div>Partnerships</div>
                    <div>Terms of Service</div>
                    <div>Mobile Site and Apps</div>
                    <div>Market</div>
                    <div>Appointments</div>
                    <div>Site Visits</div>
                    <div>Contact Us</div>
                </div>
                <div className='splash-page-footer-parts'>
                    <h1>DOG ADOPTIONS</h1>
                    <div>FAQS</div>
                    <div>Dog Adoptions</div>
                    <div>Contracts</div>
                    <div>Other Adoption sites</div>
                    <div>Sponserships</div>
                    
                </div>
                <div className='splash-page-footer-parts'>
                    <h1>DOG CARE</h1>
                    <div>Dog Breeds</div>
                    <div>Helping Dogs</div>
                    <div>Donate</div>
                    <div>Ask a Question</div>
                </div>
                {/* <div className='splash-page-footer-newsletter'>
                    <h1>To get the latest information on dog adoption sign up for the FIND MY PAWRENTS newsletter</h1>
                    <button>SIGN UP</button>
                </div> */}
            </div>
      </div>
    );
  }
}

export default SplashPage;
