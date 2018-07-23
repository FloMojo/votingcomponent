import React from 'react';
import ChoiceBar from './ChoiceBar';

export default class VotingComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = props;

        //this.percentage = this.props.count * (100 / this.totalVotes);
    };

    registerChoiceClick(c){
        console.log(`Click registered for ${c.id}`);
        console.log(this.state);

        this.setState(function(oldState,oldProps){
            oldState.vote.choices = oldState.vote.choices.map(function(el){
                if(el.id === c.id){
                    el.count++;
                }
                return el;
                
            });
            return oldState;
        });
    }

    render(){
        const {vote} = this.state;
        const totalVotes = vote.choices.reduce(function(acc,curr){
            return acc + curr.count;
        },0);
        var handler = this.registerChoiceClick.bind(this);

        return (
            <div className="Row VotingRow Spacer">
                <div className="Head">
                    <h1  className="Title">{vote.title}
                        <div className="Badge">{this.totalVotes} votes</div>
                    </h1>
                    <div className="Description Emphasis">{vote.description}</div>
                    {vote.choices.map(function(e){
                        var percentage = e.count * (100 / totalVotes);
                        console.log({percentage, totalVotes});
                        
                        return <ChoiceBar key={e.id} choice={e.choice} percent={e.count * (100 / totalVotes)} count={e.count} onClickHandler={function(){return handler(e)}}/> ;
                    })}
                </div>
            </div>
        );
    };
}