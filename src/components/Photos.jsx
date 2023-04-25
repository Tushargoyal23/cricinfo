import React from 'react'

export default function photos(props) {
    return (
        <div className='container'>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src= {props.data ? props.data[0].urlToImage : "https://source.unsplash.com/random/300×300/?cricket"} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[0].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[0].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src= {props.data[1].urlToImage ? props.data[1].urlToImage : "https://source.unsplash.com/random/300×300/?cricket"} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[1].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[1].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={props.data ? props.data[2].urlToImage : "https://source.unsplash.com/random/300×300/?cricket"} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[2].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[2].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={props.data ? props.data[3].urlToImage : "https://source.unsplash.com/random/300×300/?cricket"} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[3].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[3].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
