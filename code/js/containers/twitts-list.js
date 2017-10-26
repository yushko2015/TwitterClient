import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TwittsList extends Component{
    showList () {
        return this.props.twitts.map ((twitt)=>{
            return (
                <li>{twitt.tweet.text}</li>
            )
        });
    }
    render () {
        return (
            <ul>
                {this.showList()}
            </ul>
        );
    }
}

function mapStateToProps (state){
    return{
        twitts: state.twitts
    };
}

export default connect (mapStateToProps) (TwittsList);