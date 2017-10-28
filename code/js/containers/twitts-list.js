import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class TwittsList extends Component{
    showList () {
        return this.props.twitts.map ((twitt)=>{
            return (
                <div className="twittsList">
                    <Card className="twitt" style={{width: 600}}>
                        <CardHeader  title={twitt.tweet.user.name} subtitle="Subtitle" 
                        avatar="images/ok-128.jpg"/>
                        <CardText >
                            {twitt.tweet.text}
                        </CardText>
                    </Card>
                </div>  
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