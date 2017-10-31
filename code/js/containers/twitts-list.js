import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {fetchData} from '../actions'

class TwittsList extends Component{
    componentWillMount(){
        this.props.fetchData()
    }
    showList () {
        const {twitts} = this.props
        return twitts.data.map ((twitt, key)=>{
            return (
                <div className="twittsList"  key={key}>
                    <Card className="twitt" style={{width: 600}}>
                        <CardHeader title={twitt.statuses.text} subtitle="Subtitle" 
                        avatar="" />
                        <CardText >
                            {twitt.statuses.text}
                        </CardText>
                    </Card>
                </div>  
            )
        });
    }
    render () {
        return (
            <div>
                {this.props.twitts.isFatching && <Text>Loading</Text>}
                {
                    this.props.twitts.data.length ? 
                    this.showList()
                    : null
                }
            </div>
        );
    }
}

function mapStateToProps (state){
    return{
        twitts: state.dataReducer
    };
}

function mapDispatchToProps (dispatch, ownProps){
    return{
        fetchData: () => dispatch(fetchData(ownProps.query))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (TwittsList);