import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
export default function Card(props) {
    // let url = `https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png`
    // let url = `https://www.bing.com/images/search?view=detailV2&ccid=4Hot90qu&id=9A6FF29531EFAB44672A20C249F42F4EAEB3145E&thid=OIP.4Hot90quQK0OlPatVullbwHaFj&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp7461576.jpg&exph=900&expw=1200&q=rcb&simid=607997349017097065&FORM=IRPRST&ck=E5A5C097306482E33EC614B18DD133EA&selectedIndex=7`
    return (

        <div className='container'>

            <div className="card my-3" style= {{width :"18rem"}}>
                <img src ={props.Imgurl} className="card-img-top" alt="..." style={{ maxHeight: "150px", objectFit: "fill" }}/>
                    <div className="card-body bg-dark">
                        <Link to= {props.pageurl} ><h5 className="card-title" style={{color:'white'}}>{props.title}</h5></Link>
                    </div>
            </div>
        </div>
    )
}
