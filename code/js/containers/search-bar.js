import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Search extends Component{
    render (){
        
        return (
                       
            <div className="searchBar">
               <TextField hintText="Search" floatingLabelText="Search in Twitter" style = {{width: 620}} /> <br/>
               <a href="/search"> <RaisedButton className="searchButton" label="Search" primary={true} /></a>
            
            </div>
            
        );
    }
}

function mapStateToProps (state){
    return{
        state
    };
}

export default connect (mapStateToProps) (Search);