import { HeartGraphic, Arrow, CreditCardGraphic, CardWinGraphic} from './graphics';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import {Link} from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './FAQ.css';

function Carousel() {

  return (
    <div className="carousel_div">
      <CarouselProvider
        naturalSlideWidth={13}
        naturalSlideHeight={11}
        totalSlides={3}
        isIntrinsicHeight={true}
      >
        <Slider>
          <Slide index={0}>
            <div className="slide">
              <div className="graphic_div">
                <CreditCardGraphic/>
              </div>
              <h2 className="carousel_h">Link a card & shop. Earn swipes</h2>
              <p className="carousel_text">No recipts, coupons, or hasle. Connect your card to earn swipes and win prizes!</p>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="slide">
              <div className="graphic_div">
                <CardWinGraphic/>
              </div>  
              <h2 className="carousel_h">Swipe right to win. Swipe left to skip.</h2>
              <p className="carousel_text">Swipe for instant prizes! Pick & match 6 lucky numbers to win the grand prize Tesla with winner(s) announced weekly</p>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="slide">
              <div className="graphic_div">
                <HeartGraphic/>
              </div>
              <h2 className="carousel_h">Play more and donate to ones in need!</h2>
              <p className="carousel_text">Playing more Swipe with option donations helps ones in need with healthy meals every time you play.</p>
            </div>
          </Slide>
        </Slider>
        <DotGroup className="dots" />
        
        <ButtonBack className="button_back"><Arrow angle={0} /></ButtonBack>
        <ButtonNext className="button_next"><Arrow angle={180} /></ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default function FAQ(props) {

  return (
    <div className="faq">
      <h1>FAQ</h1>
      <Carousel />
      <Link to="/waitlist" className='join_button'>Join the waitlist</Link>
    </div>
  );
}

