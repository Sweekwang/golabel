import { Fragment } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import GoTerm from './pages/goterm/GoTerm';
import Information from './pages/information/information';
import Footer from './components/footer/footer';
import Download from './pages/download/download';
import Disclaimer from './pages/disclaimer/disclaimer';
import Policy from './pages/policy/policy';
import Team from './pages/team/team';
import Features from './pages/features/features';
import Release from './pages/release/release';


function App() {
  return (
    <Fragment>
      <Navbar/>
      <div id="page-container">
        <BrowserRouter>
      <Switch>
        <Route exact path="/"><Redirect to="golabel"/></Route>
        <Route exact path="/golabel"><Home/></Route>
        <Route exact path="/golabel/goterm/:goId"><GoTerm/></Route>
        <Route exact path="/golabel/information/:info"><Information/></Route>
        <Route exact path="/golabel/download"><Download/></Route>
        <Route exact path="/golabel/disclaimer"><Disclaimer/></Route>
        <Route exact path="/golabel/policy"><Policy/></Route>
        <Route exact path="/golabel/team"><Team/></Route>
        <Route exact path="/golabel/features"><Features/></Route>
        <Route exact path="/golabel/release"><Release/></Route>
        <Route exact path="*"><Redirect to="golabel"/></Route>
      </Switch>
      </BrowserRouter>
      <Footer/>
      </div>
    </Fragment>
  );
}

export default App;
