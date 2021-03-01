import money from './money.svg';
import confetti from './confetti.svg';
import swipes_background from './swipes_graphic_background.svg';
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


export {
  MoneyGraphic,
  SwipesGraphic,
};