import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Main from './Main';
import Login from './login/login';

const App = () => {
    return(
        <Router>
            <Scene key="root">
            <Scene key="Main" component={Main} title="Main" hideNavBar={true}  initial={true} />
            <Scene key="login" component={Login} title="login" hideNavBar={true}/>
            </Scene>
        </Router>
    )
}
export default App;