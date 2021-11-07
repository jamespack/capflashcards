import React from 'react';
import _ from 'lodash';
import AuthorizeFlashCard from './authorizeFlashCard';
import './FlashCard.scss';





class AuthorizeFlashCardContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: [],
        cardNumber: 0,
      };
      this.boundShowPrevCard = this.showPrevCard.bind(this);
      this.boundShowNextCard = this.showNextCard.bind(this);
    }
    

    
    showNextCard() {
      if ((this.state.cardNumber + 1) !== this.props.cards.length) {
        this.setState({cardNumber: this.state.cardNumber + 1});
      }
    }
    
    showPrevCard() {
      if (this.state.cardNumber !== 0) {
        this.setState({cardNumber: this.state.cardNumber - 1});
      }
    }
    
    setCard(card) {
      const newCards = this.state.cards.push(card);
      this.setState({cards: newCards});
    }
    
    generateDots() {
      const times = this.props.cards.length;
      console.log(times);
      let arr = [];
      _.times(times).forEach((num) => {
        const dotClass = num  === this.state.cardNumber ? 'active' : '';
        arr.push(
          <span 
            className={`card-container__dot fa fa-circle ${dotClass}`}
            onClick={() => this.setState({cardNumber: num})}
          />
        )
      });
      console.log(arr);
      return arr;
    }
    
    generateCards() {
      const cards = this.props.cards;
       const cardsList = cards.map((card) => {
          return (
            <AuthorizeFlashCard 
              front={card.Front}
              back={card.Back}
              showNextCard={this.boundShowNextCard}
              showPrevCard = {this.boundShowPrevCard}
              cardNumber={this.state.cardNumber}
            />
            );
        })
       return(cardsList[this.state.cardNumber]); 
    }
    render() {
      return (
        <div>
          {this.generateCards()}
          <div className='card-container__dots-wrapper'>
            {this.generateDots()}
          </div>
        </div>
     );
    }
  }

  export default AuthorizeFlashCardContainer;