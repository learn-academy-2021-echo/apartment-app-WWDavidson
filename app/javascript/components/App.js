import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import CreateAccount from './pages/CreateAccount'
import "./components/Header.css"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props);
    
    
    
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
  
  
    
   
   
    return(
      
      <>
          <Router>
          <Header {...this.props} />
            <Switch>
              <Route exact path="/" component={Home} />
              
              <Route path="/apartmentindex" component={ApartmentIndex} />

              {/* <Route  path="/users/sign_up"  component={this.props.new_user_route}/> */}

              {/* <Route path="/apartmentshow" component={ApartmentShow} />
              <Route path="/apartmentedit" component={ApartmentEdit} />
              <Route component={NotFound}/> */}
            </Switch>
          </Router>

       
      </>
    )
  }
}

export default App




{/* < Home />
< ApartmentIndex />
< Header {...this.props} /> */}