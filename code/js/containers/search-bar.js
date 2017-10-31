import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ReactQueryParams from 'react-query-params';
import { withRouter } from 'react-router';

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {query: ""};
   
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      onChange(e) {
        var val = e.target.value;
        this.setState({query: val});
    }
    handleSubmit(e) {
        e.preventDefault();
        const { query } = this.state;
        this.props.router.push({ pathname: `search/${query}`})
      }

    render (){
        
        return (
                       
            <div className="searchBar">
               <TextField value={this.state.query} onChange={this.onChange} hintText="Search" floatingLabelText="Search in Twitter" style = {{width: 620}} /> <br/>
               <RaisedButton href="search"  onClick={this.handleSubmit} className="searchButton" label="Search" primary={true} />
            
            </div>
            
        );
    }
}



function mapStateToProps (state){
    return{
        state
    };
}

export default withRouter(connect(mapStateToProps)(Search));