import React from 'react';
import PropTypes from 'prop-types';


class ChoiceBar extends React.Component{
    constructor({choice,votes,percentage}){
        super({choice,votes,percentage});
    }
    
    render(){
        return (
            <div className="ChoiceBar">
                <div className="Progress" style={{ width : this.props.percent}}>
                    <div className="ChoiceBarTitle">{this.props.choice}</div>
                </div>
                <div className="ChoiceBarBadge">{this.props.count}</div>
            </div>
        );    
    }

}
ChoiceBar.defaultProps = {
    choice : "Default Text"
};
ChoiceBar.propTypes = {
    choice :         PropTypes.string.isRequired,
    votes :         PropTypes.number.isRequired,
    percentage :    PropTypes.number.isRequired 
};
export default ChoiceBar;
/*
const ChoiceBar = function ({choice,votes,percentage}){
    return (
        <div className="ChoiceBar">
            <div className="Progress" style={{ width : {percentage}}}>
                <div className="ChoiceBarTitle">{choice}</div>
            </div>
            <div className="ChoiceBarBadge">{votes}</div>
        </div>
    );
}

ChoiceBar.propTypes = {
    choice :         PropTypes.string.isRequired,
    votes :         PropTypes.number.isRequired,
    percentage :    PropTypes.number.isRequired 
};
ChoiceBar.defaultProps = {
    choice : "Default Text"
};

export default ChoiceBar;
*/