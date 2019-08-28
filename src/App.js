import React from 'react';
// import compose from 'recompose/compose'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Globalstyle } from './style';  // global style. not using
import { GlobalIconfont } from './static/iconfont/iconfont';
import 'assets/scss/material-kit-pro-react.scss?v=1.7.0'
import store from './store'
import Header from './common/header/index';
import Footer from './common/footer/index';
import Home from './pages/home';
import RegisterProgram from './pages/register_program';
import Donate from './pages/donate';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';

function App() {
    return (
        <Provider store={store}>
            <GlobalIconfont/>
            <BrowserRouter>
                <Header />

                <Route path='/' exact component={Home}></Route>
                <Route path='/donate' exact component={Donate}></Route>
                <Route path='/contact' exact component={Contact}></Route>
                <Route path='/gallery' exact component={Gallery}></Route>
                <Route path='/register-program' exact component={RegisterProgram}></Route>
                <Route path='/about' exact component={About}></Route>
                
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
