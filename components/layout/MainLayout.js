import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';


const Mainlayout = ({children}) => {
  return (
    <div>
        <div>
           <Navbar/>
        </div>

        <div>
            {children}
        </div>

        <div>
            <Footer/>
        </div>






    </div>
  )
}

export default Mainlayout