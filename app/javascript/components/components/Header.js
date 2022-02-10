import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NavItem } from 'reactstrap'

class Header extends Component {
   

  render() {

    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
console.log(logged_in)

return(
<>
      <svg xmlns="http://www.w3.org/2000/svg" className="apt-logo" width="175" height="175" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
        <path fill="blue" fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
        <path fill="gold" d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
      </svg> 
    <header>
        <h1 className="headerHeader">Wolliz</h1>
          <h2 className="subHeader">Find your next apartment here</h2>
          <div className="headerNav">
          <NavLink to="/"> Home </NavLink>
              &nbsp; &nbsp;
          <NavLink to="/apartmentindex"> Available apartments</NavLink>
              &nbsp; &nbsp;
          <a href={new_user_route}> Create Account </a>
              &nbsp; &nbsp;
          {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        </div>
    </header>
  </>
  )
 }
}
export default Header
        
    

      




    


  

      
         
          
         
          
          
     
   
    









