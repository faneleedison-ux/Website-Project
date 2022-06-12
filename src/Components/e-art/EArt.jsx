import "./eart.css";
import React, {useState} from "react";
import Covid2 from './images/Covid2.jpg'; //gives image path 
import Covid1 from './images/Covid1.jpg'; //gives image path 




export default function EArt() {

  const [isShown, setIsShown] =useState(false);

    return (
  
      <>
        
      
        <div className="eart">

        <span className="header"> The Corona Man</span>
           
      
                     
              <img className="images"
              
              src= {Covid1}

                onMouseEnter= {() => setIsShown (true)}
                onMouseLeave={() => setIsShown (false)} 
                height="500px"
                width="500px"
                >
                  
                
              </img>
             
           
         {isShown && (
          <div>
           <img className="images"
              src= {Covid2}
                height="500px"
                width="500px"
                >
                  
                
              </img>

              <span className="texts">
             
              
             Goodbye my normal <br/>
             Goodbye my sanity <br/>
             Goodbye world <br/>
             Goodbye air and sunshine <br/>
             Goodbye Mom <br/>
             Goodbye Dad <br/>
             Goodbye myself <br/>
             Do Not Hover For Too Long I Might Have To Say Goodbye To You Too
              </span>

            
          </div>
         )}   
           <span className="texts"> 
              <br/>
              <br/>
              <br/>
             To touch me is to commit suicide <br/>
             He has found me and so will he find you too <br/>
             If you move  <br/>
             If you breathe   <br/>
             If you look outside  <br/>
             If you touch someone  <br/>
             If you touch yourself <br/>
             If you hover over this image <br/>
             You will meet the corona man <br/>
             If you hover over this image <br/>
             That is how you will die  <br/>
             
              
              </span>
  
        
           
        
        </div>
      </>
    )
  }
  