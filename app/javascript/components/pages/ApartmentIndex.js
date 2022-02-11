import React, { Component } from 'react';
// import { NavLink } from 'reacter-router-dom';


class ApartmentIndex extends Component {
  
  
  render() {
    const { apts } = this.props
  
  

  
    
      return (
          <div className="aptindex">
            <h3 className="indexheader">Apartments available in your area</h3>
            
            {apts && apts.map(apt => { 
              return(


                <ul className="indexbod" key={apt.id}> 
                <li>{apt.street}&nbsp;
                ${apt.price}</li>
                </ul>
                              
                
                  
              )
                  
            })}


          </div>
        
          
          
          
        )
      }
    }  
    export default ApartmentIndex
          
          
          
          
          
