import React from 'react';

class PTaskFlashCard extends React.Component {
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
            <span className='card__counter'>{this.props.front.taskNumber}</span>
                {
                    this.state.showAnswer ? (
                        <div className={'card_content_back'}>
                            <div className={'taskDescription'}>
                                <h3>Task Description</h3>
                                <span>{this.props.back.taskDescription}</span>
                            </div>
                            <div className={'primaryResponsibility'}>
                                <h3>Primary Responsibility</h3>
                                <span>{this.props.back.primaryResponsibility.join(', ')}</span>
                            </div>
                            <div className={'sdlcMapping'}>
                                <h3>SDLC Mapping</h3>
                                <span><b>New:</b> {this.props.back.sdlcAlignment.New}</span>
                                <span><b>Existing:</b> {this.props.back.sdlcAlignment.Existing}</span>
                            </div>
                        </div>
                    ) : (
                        <div className={'card_content_front'}>
                            {this.props.front.taskName}
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

export default PTaskFlashCard