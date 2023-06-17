import React from 'react'
import './Profilecard.css'
import { Link } from 'react-router-dom'
export default function Profilecard(props) {
    return (
        <div>

            <Link to={`/playersinfo/${props.id}`}>
                <div className='Conatiner' id='profile'>
                <div className="car" >
                    <div className='photo'>
                        <img src={props.imgurl ? props.imgurl : "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"} class="card-img-top" alt="..." />
                    </div>
                </div>
                <h3 id='name'>{props.title}</h3>
            </div>
            </Link>
        </div>
    )
}
// style={{ width: "18rem" }}