import React from 'react';
import TwittsList from '../containers/twitts-list';
import Search from '../containers/search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Main = () => (
    <MuiThemeProvider>
        <div>
            <div className="topBar">
                <img className="icon" src="icons/twitter.svg" />
            </div>
            
            <div className="container">
                <Search />
            </div>
        </div>
    </MuiThemeProvider>
);

export default Main;