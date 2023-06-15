import React from 'react'
import Card from './Card'

export default function Clubs() {
    return (
        <div>
            <div className='ipl' id='ipl'>

                <div className='container '>
                    <h1 style={{ color: 'white' }}> IPL Season Clubs </h1>
                    <div className='row'>

                        <div className=' col-md-3'>
                            <Card title="Royal Challengers Banglore" Imgurl='https://i.pinimg.com/736x/5a/28/03/5a28034cd9351127ff690a1ad5fdad1e.jpg' pageurl='/rcb'></Card>
                        </div>
                        <div className='col-md-3'>
                            <Card title="Chennai Super kings" Imgurl='https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/csk-logo-25032201.jpg' pageurl='/rcb'></Card>
                        </div>
                        <div className='col-md-3'>
                            <Card title="Mumbai Indians" Imgurl='https://i.pinimg.com/originals/c7/3f/29/c73f2949902c9313c3b154aa4b64abd1.jpg' pageurl='/rcb'></Card>
                        </div>
                        <div className='col-md-3'>
                            <Card title="Gujrat Titans" Imgurl='https://tse1.mm.bing.net/th?id=OIP.DXNDJzjBE_PWMH1OG38uvgHaFS&pid=Api&P=0' pageurl='/rcb'></Card>
                        </div>
                        <div className='col-md-3'>
                            < Card title="Rajasthan Royal " Imgurl='https://www.cricbuzz.com/a/img/v1/650x0/i1/c134277/cms-img.jpg' pageurl='/rcb'></Card>
                        </div><div className='col-md-3'>
                            <Card title="Lucknow Supergiants" Imgurl='https://www.iplticket.co.in/wp-content/uploads/2022/03/IPL-Tickets-Lucknow.jpg' pageurl='/rcb'></Card>
                        </div>
                        <div className='col-md-3'>
                            <Card title="Punjab Kings" Imgurl='https://www.logotaglines.com/wp-content/uploads/2016/07/punjab-kings-logo-370x297.jpeg' pageurl='/rcb'></Card>
                        </div><div className='col-md-3'>
                            <Card title="Delhi Capitals" Imgurl='https://tse3.mm.bing.net/th?id=OIP.4sWLTFi8rfX3UEgTk3NznAHaHa&pid=Api&P=0' pageurl='/rcb'></Card>
                        </div><div className='col-md-6'>
                            <Card title="Sunrisers Hydrabad " Imgurl='https://wallpapercave.com/wp/wp7494289.jpg' pageurl='/rcb'></Card>
                        </div><div className='col-md-6'>
                            <Card title="Kolkata Knight Riders" Imgurl='https://www.whoistheownerof.com/wp-content/uploads/2018/02/Owner-of-Kolkata-Knight-Riders-Team-India-KKR-Wiki-Logo.jpg' pageurl='/rcb'></Card>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
