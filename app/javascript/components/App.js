import React, { Component } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import ApartmentIndex from './pages/ApartmentIndex';
import ApartmentNew from './pages/ApartmentNew';
import CreateAccount from './pages/CreateAccount';
import mockApt from './mockApt';
import "./components/Header.css";
import "./pages/ApartmentIndex.css"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      apts: mockApt
    }
    
  }




  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    const { apts } = this.state

    console.log(apts)
    return(
      <>
        <Router>
          <Header {...this.props} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/apartmentindex" 
              render={(props) => <ApartmentIndex apts={apts} />} />


              // {/* <Route path="/apartmentshow" component={ApartmentShow} />  
              // <Route path="/apartmentedit" component={ApartmentEdit} />
              // <Route component={NotFound}/> */}
            </Switch>
        </Router>
      </>
    )
  }
}
export default App





