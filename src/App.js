import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from "./Pages/Main/Main";
import Header from "./PublicComponents/Header/Header";
import Footer from "./PublicComponents/Footer/Footer";
import NotFoundPage from "./Pages/NotFoundPage";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import News from "./Pages/News";
import Contacts from "./Pages/Contacts/Contacts";
class App extends Component {
  render() {
    return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={Main}/>
                    <Route exact path={"/news"} component={News}/>
                    <Route exact path={"/aboutus"} component={AboutUs}/>
                    <Route exact path={"/gallery"} component={Gallery}/>
                    <Route exact path={"/contacts"} component={Contacts}/>
                    <Route path={"*"} component={NotFoundPage}/> {/*if Not found page*/}
                </Switch>
                <Footer/>
            </BrowserRouter>
    );
  }
}
export default App;
