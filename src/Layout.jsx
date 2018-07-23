import React from 'react';
import PropTypes from 'prop-types';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
        <div className="Background">
            <div className="Header">
                <div className="Title">
                Vote as a service
                </div>
            </div>

            <div className="Main">
                <div className="Container">
                {this.props.children}
                </div>
            </div>
        </div>
        );
    }
};

Layout.propTypes = {
    children : PropTypes.element.isRequired
};