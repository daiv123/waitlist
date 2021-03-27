import money from './money.svg';
import confetti from './confetti.svg';
import swipes_background from './swipes_graphic_background.svg';
import booj_logo from './booj.svg';
import win_graphic from './win.svg';
import arrow_left from './arrow_left.svg';
import card_win from './card_win.svg';
import credit_card from './credit_card.svg';
import heart from './heart.svg';
import './graphics.css';

function MoneyGraphic(props) {
  return (
  <div class="money_div">
    <img class="money" alt="money" src={money}/>
    <img class="confetti" alt="confetti" src={confetti}/>
  </div>
  );
}

function SwipesGraphic(props) {
  return (
    <div class="swipes_div">
      <img class="swipes_background" alt="lines" src = {swipes_background}/>
      <p class="swipes_word">SWIPES!</p>
    </div>
  );
}

function BoojLogo(props) {
  return (
    <div class="booj_div">
      <img class="booj_logo" alt="BOOJ" src = {booj_logo}/>
    </div>
  );
}

function WinGraphic(props) {
  return (
    <div class="win_div">
      <img class="win_graphic" alt="WIN" src = {win_graphic}/>
    </div>
  );
}

function Arrow(props) {
  return (
    <div class="arrow"  >
      <img class="array_graphic" alt="<" src={arrow_left} style={{transform: `rotate(${props.angle}deg)`}}/>
    </div>
  )
}

function CreditCardGraphic() {
  return (
    <div class="credit_card_div">
      <img class="credit_card_graphic" alt="CREDIT CARD" src = {credit_card}/>
    </div>
  );
}

function CardWinGraphic() {
  return (
    <div class="card_win_div">
      <img class="card_win_graphic" alt="CARD WIN" src = {card_win}/>
      <span class="_sss">$$$</span>
      <span class="_s">$</span>
      <span class="win">WIN!</span>
    </div>
  );
}
function HeartGraphic() {
  return (
    <div class="heart_div">
      <img class="heart_graphic" alt="HEART" src = {heart}/>
    </div>
  );
}
export {
  MoneyGraphic,
  SwipesGraphic,
  BoojLogo,
  WinGraphic,
  Arrow,
  CreditCardGraphic,
  CardWinGraphic,
  HeartGraphic,
};