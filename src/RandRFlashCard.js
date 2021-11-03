import React from 'react';

class RandRFlashCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        }
    }


    render() {
        const actionClass = this.state.showAnswer ? 'active' : '';
        const cardClass = this.state.showAnswer ? 'back' : '';



        return (
            <div
                className={`card ${cardClass}`}
                onClick={() => this.setState({ showAnswer: !this.state.showAnswer })}
            >
            <span className='card__counter'>{this.props.cardNumber+1}</span>
                {
                    this.state.showAnswer ? (
                        <div className={'card_content_back'}>
                            <p>{this.props.back}</p>
                        </div>
                    ) : (
                        <div className={'card_content_front'}>
                            {this.props.front}
                        </div>)
                }


                <div className={`card__actions ${actionClass} ${this.state.showAnswer ? 'card_actions_back' :'card_actions_front'}`}>
                    <div className='card__prev-button'
                        onClick={() => {
                            this.props.showPrevCard();
                            this.setState({ showAnswer: false });
                        }}
                    >
                        Prev
                    </div>
                    <div
                        className='card__next-button'
                        onClick={() => {
                            this.props.showNextCard();
                            this.setState({ showAnswer: false });
                        }}
                    >
                        Next
                    </div>
                </div>
            </div >

        );
    }


}

export default RandRFlashCard