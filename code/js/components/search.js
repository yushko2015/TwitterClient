import React from 'react';
import TwittsList from '../containers/twitts-list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SearchPage= (props) => {
    return (
        <MuiThemeProvider>
        <div>
            <h2> Twitts </h2>
             <hr />
            <TwittsList query={props.params['q']} />
        </div>
        </MuiThemeProvider>
    )
}

export default SearchPage;