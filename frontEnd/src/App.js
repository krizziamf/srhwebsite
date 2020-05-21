import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import BookAppointment from './component/BookAppointment';
import Footer from './component/Footer';
import TopBar from './component/TopBar';
import Privacy from './component/Privacy';
import Carousel from './component/Carousel';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Header />
        <Switch>
          <Route path="/bookappointment" render={() => <BookAppointment />}></Route>
          <Route path="/privacy" render={() => <Privacy />}></Route>
          <Route exact path="/" render={props => (
            <div>
              {/* <Carousel /> */}
              <BookAppointment />
              {/* <Home /> */}
              {/* <About /> */}

            </div>
          )}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
