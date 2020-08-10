import React from 'react'
import Slider from 'react-slick';
import './Splash.scss'
import Dog1 from "./Dog1.jpg";
import Dog2 from "./Dog2.jpg";
import Dog3 from "./Dog3.jpg";


class SplashPage extends React.Component {



    render() {
        // const settings = {
        //     dots: true,
        //     fade: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        // };


        return (
            <div>
                <div className='SplashPage-Dog-Banner-Container'>
                    <div>
                        <h1>Make a difference, help save a life</h1>
                    </div>
                    <div className='SplashPage-Dog-Slider-Container'>
                        <span id='slider-image-1'></span>
                        <span id='slider-image-2'></span>
                        <span id='slider-image-3'></span>

                        <div className='SplashPage-Dog-Slider-Image'>
                            <img src={Dog1} className='slider-image' />
                            <img src={Dog2} className='slider-image' />
                            <img src={Dog3} className='slider-image' />
                        </div>
                        <div className='button-container'>
                            <a href="#slider-image-1" className='slider-button'></a>
                            <a href="#slider-image-2" className='slider-button'></a>
                            <a href="#slider-image-3" className='slider-button'></a>
                        </div>
                    </div>
                    {/* <Slider {...settings}>
                        <div>
                        <img src={Dog1} className='Dog' />
                        </div>
                        <div>
                        <img src={Dog2} className='Dog' />
                        </div>
                        <div>
                        <img src={Dog3} className='Dog' />
                        </div>
                    </Slider> */}
                </div>
            </div>
        )
    }

}


export default SplashPage;