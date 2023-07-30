import React from 'react'
import Navbar from '../Navbar'
import './fanpage.css'
export default function Fanpage() {
  return (
    <div id='fanpage'>
        <div>
            <Navbar title='CricInfo'></Navbar>
        </div>
        <div id='fanbody'>
            <div>
                <img src="https://resources.pulse.icc-cricket.com/photo-resources/2022/11/21/7b107ece-1df0-434e-9238-162c96054126/GettyImages-1161914042.jpg?width=500&height=500" alt="" id='proimg' />
            </div>
            <div>
                <h1>International Cricket Fan page</h1>
            </div>
        </div>
        <div className='row' id='blogcontent'>
            <div className='col-md-12' id='blog'>
                <div id='blogs'>
                <div className='row'>
                    <p className='col' id='name'>#Naruto Osumaki</p>
                    <p className='col' id='time'>3:15 AM - 26 may 2023</p>
                </div>
                <div>
                    <div id='imageblock'>
                        <img src="https://static.toiimg.com/thumb/msid-66048235,width-1280,resizemode-4/66048235.jpg" alt="..." id='blogimage'/>
                    </div>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vitae? Assumenda doloribus nisi pariatur deserunt quibusdam ducimus optio ratione quidem veritatis corrupti? Odio sed nihil, perferendis delectus quas id nostrum.</h6>
                </div>
                </div>
            </div>
            {/* <div className='col-md-4' id='blogdetails'>
                <h1>Blog details</h1>
            </div> */}
        </div>
        <div className='row' id='blogcontent'>
            <div className='col-md-12' id='blog'>
                <div id='blogs'>
                <div className='row'>
                    <p className='col' id='name'>#Naruto Osumaki</p>
                    <p className='col' id='time'>3:15 AM - 26 may 2023</p>
                </div>
                <div>
                    <div id='imageblock'>
                        <img src="https://static.toiimg.com/photo/msid-95043363/95043363.jpg?pl=55694" alt="..." id='blogimage'/>
                    </div>
                    <div id='blogdet'>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vitae? Assumenda doloribus nisi pariatur deserunt quibusdam ducimus optio ratione quidem veritatis corrupti? Odio sed nihil, perferendis delectus quas id nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem dolorum hic officia quia similique repellat sapiente, temporibus recusandae laborum eaque veniam est iste, iusto, assumenda nisi illum optio debitis. Iusto!</h6>
                    </div>
                </div>
                </div>
            </div>
            {/* <div className='col-md-4' id='blogdetails'>
                <h1>Blog details</h1>
            </div> */}
        </div>
        {/* <div className='col' id='otherdet'>
            <h1> hello</h1>
        </div> */}
    </div>
  )
}
