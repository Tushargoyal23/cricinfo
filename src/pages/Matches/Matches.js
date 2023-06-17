import React from 'react'
import Scorecard from '../../components/Scorecard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Scores() {
    return (
        <div>
            <div className='margin-bottom: 100px'>
        <Navbar title='CricInfo'></Navbar>
      </div>
             <div className="row gx-5">
                 <div className="col-md-3">
                     <div className="p-3">
                         <Scorecard ></Scorecard>
                     </div>
                 </div>
             </div>
             <div class="">
        <Footer></Footer>
      </div>
      
         </div >
        
    )
}
