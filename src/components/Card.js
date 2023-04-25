import React from 'react'

export default function Card(props) {
    let url = `https://source.unsplash.com/random/300×300/?${props.title}`
    // let url = `https://www.bing.com/images/search?view=detailV2&ccid=4Hot90qu&id=9A6FF29531EFAB44672A20C249F42F4EAEB3145E&thid=OIP.4Hot90quQK0OlPatVullbwHaFj&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp7461576.jpg&exph=900&expw=1200&q=rcb&simid=607997349017097065&FORM=IRPRST&ck=E5A5C097306482E33EC614B18DD133EA&selectedIndex=7`
    return (

        <div className='container' >

            <div className="card my-3" style= {{width :"18rem"}}>
                <img src ={url} className="card-img-top" alt="..." style={{ maxHeight: "250px", objectFit: "fill" }}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}
