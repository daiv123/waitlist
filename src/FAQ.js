import {/* HeartGraphic,*/ Arrow, CreditCardGraphic, CardWinGraphic} from './graphics';
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
        totalSlides={2}
        isIntrinsicHeight={true}
      >
        <Slider>
          <Slide index={0}>
            <div className="slide">
              <div className="graphic_div">
                <CreditCardGraphic/>
              </div>
              <h2 className="carousel_h">Link a card & shop. Earn swipes & win!</h2>
              <p className="carousel_text">No receipts, coupons, or hassle. Just connect your card, shop and earn swipes to win prizes!</p>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="slide">
              <div className="graphic_div">
                <CardWinGraphic/>
              </div>  
              <h2 className="carousel_h">Swipe right to win. Swipe left to skip.</h2>
              <p className="carousel_text">Swipe right to instantly win cash and a grand prize vacation to Hawaii for you and a friend!</p>
            </div>
          </Slide>
          {/* <Slide index={2}>
            <div className="slide">
              <div className="graphic_div">
                <HeartGraphic/>
              </div>
              <h2 className="carousel_h">Play more and donate to ones in need!</h2>
              <p className="carousel_text">Playing more Swipe with option donations helps ones in need with healthy meals every time you play.</p>
            </div>
          </Slide> */}
        </Slider>
        <DotGroup className="dots" />
        
        <ButtonBack className="button_back"><Arrow angle={0} /></ButtonBack>
        <ButtonNext className="button_next"><Arrow angle={180} /></ButtonNext>
      </CarouselProvider>
      <FaqList />
    </div>
  );
}

function FaqList() {
  return (
    <div className="FaqList">
      <h3>What is Booj?</h3>
      <p>Booj is a rewards app that gives you instant prizes every day.</p>
      <p>Win instant prizes totaling $30,000 and the grand prize trip to Hawaii by shopping at your favorite retailers and brands.</p>

      <h3>How do I win prizes?</h3>
      <p>Play the game! Swipe right to win. Swipe left to skip a card. Make sure to choose wisely because you only have a limited number of swipes. </p>

      <h3>What are my odds?</h3>
      <p>The odds of winning the instant prizes are 1 in 2 (50%). </p>
      <p>Best part is that we’re doing this for free! No payment required. </p>
      
      <h3>How do I earn swipes?</h3>
      <p>The main way to earn swipes is by shopping at your favorite retailers. </p>
      <p>Earn free swipes every week. You can also earn extra swipes by inviting friends or following our socials.</p>

      <h3>How do I earn swipes through shopping?</h3>
      <p>Simply connect your card and shop at retailers!</p>
      <p>You’ll automatically earn swipes based on your spending as you shop in-store or online using your linked card. </p>

      <h3>Why are you doing this?</h3>
      <p>We’ve built Booj because we've experienced firsthand problems with today’s reward apps/programs. </p>
      <p>High thresholds to redeem rewards, poor deals, and taking away your hard-earned points because they've expired, we understand it all.</p>
      <p>Booj aims to make the shopping/rewards experience instantaneous and enjoyable. </p>

      <h3>My favorite retailer/brand is not on Booj!</h3>
      <p>Please let us know. We’ll try to onboard your favorite retailer/brand ASAP!</p>

      <h3>Where can I contact you?</h3>
      <p>Contact us jung.patrick@gobooj.com or let us know on Twitter @gobooj with your questions, suggestions, or feedback!</p>

    </div>
  )
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

