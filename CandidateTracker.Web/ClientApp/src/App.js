import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Confirmed from './Pages/Confirmed';
import Details from './Pages/Details';
import Pending from './Pages/Pending';
import Refused from './Pages/Refused';
import { StatusContextComponent } from './StatusCount';
const App = () => {
    return(
        <StatusContextComponent>
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/addcandidate' component={AddCandidate} />
            <Route exact path='/pending' component={Pending} />
            <Route exact path='/details/:id' component={Details} />
            <Route exact path='/confirmed' component={Confirmed} />
            <Route exact path='/refused' component={Refused} />
        </Layout>
    </StatusContextComponent>
    )
   
};
export default App;