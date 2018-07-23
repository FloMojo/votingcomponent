import React from 'react';
import ChoiceBar from './ChoiceBar';

export default class VotingComponent extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        const {vote} = this.props;

        return (
            <div className="Row VotingRow Spacer">
                <div className="Head">
                    <h1  className="Title">{vote.title}
                        <div className="Badge">{vote.totalVotes} votes</div>
                    </h1>
                    <div className="Description Emphasis">{vote.description}</div>
                    {vote.choices.map(function(e){
                        return <ChoiceBar key={e.id} {...e}/> ;
                    })}
                </div>
            </div>
        );
    };
}