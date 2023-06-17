import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import './Players.css'
import Profilecard from '../../components/Profilecard'
import Footer from '../../components/Footer'
import SearchBox from '../../components/Searchbox'

export default function Players() {

    const [data, setData] = useState('');
    const fetchData = (searchQuery) => {
        fetch(`https://api.cricapi.com/v1/players?apikey=586a3d71-2711-41a3-a100-14ea6f0eeaf3&offset=0&search=${searchQuery}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => {
                console.error(error);
            });
    };
    //   if (!data || !data.data) {
    //     return <div>Loading...</div>;
    //   }
    return (
        <div className='conatainer' id='players'>
            {data ? console.log(data.data) : ""}
            {/* Nabvar */}
            <div>
                <Navbar title='CricInfo'></Navbar>
            </div>

            {/* Intro picture */}
            <div id='intro'>
                <img src="https://c4.wallpaperflare.com/wallpaper/615/654/332/team-india-national-cricket-team-indian-cricket-team-ms-dhoni-wallpaper-preview.jpg" alt="Your Photo" />
            </div>

            {/* Main content */}
            <div id='content'>

                {/* first heading */}
                <h1>Top Players</h1>

                {/* Searchbox */}
                <div id="search">
                    <SearchBox fetchData={fetchData}></SearchBox>
                </div>
                <hr></hr>

                {/* players */}
                {data && data.data ?
                    <div className='row'>
                        {data.data.map((item) => (

                            <div className=' col-md-4' id="pc">
                                <Profilecard title={item.name} imgurl='' id={item.id}></Profilecard>
                            </div>
                        ))}
                    </div> :
                    <div className='row'>
                        <div className=' col-md-4' id="pc">
                            <Profilecard title='Virat Kohli' imgurl='https://www.mykhel.com/thumb/220x100x220/cricket/players/8/3788.1666934063.jpg' id ={'c61d247d-7f77-452c-b495-2813a9cd0ac4'}></Profilecard>
                        </div>
                        <div className=' col-md-4'>
                            <Profilecard title='Steve Smith' imgurl='https://i.guim.co.uk/img/media/1059b0efc3c2dd88ff36f911575f89c250d48afc/226_456_1394_836/master/1394.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ce047a0586d70fb1a62bc3cb6eb4321d' id ={'96e1bad9-ac08-47c3-aba8-2c90d34fc09e'}></Profilecard>
                        </div>
                        <div className=' col-md-4'>
                            <Profilecard title='Ab de villiers' imgurl='https://www.bigbash.com.au/-/media/Players/Men/International/South%20Africa/AB-de-Villiers-CT17.ashx' id={'230b275d-0216-4594-b4e8-f73c9c12e12b'}></Profilecard>
                        </div>
                        <div className=' col-md-4'>
                            <Profilecard title='MS Dhoni' imgurl='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg' id={'b6e7aa41-b0bb-4b0f-8f59-59f729283be5'}></Profilecard>
                        </div>
                        <div className=' col-md-4'>
                            <Profilecard title='Jos Buttler' imgurl='https://newindian.in/wp-content/uploads/2022/11/311685874_434274825500388_1010016495122288657_n.jpg' id={'7567e305-1b40-4eee-9290-e2fcb8804496'}></Profilecard>
                        </div>
                        <div className=' col-md-4'>
                            <Profilecard title='David Warner' imgurl='https://www.cricket.com.au/-/media/5F6A8E500C2D4B539FFA905C8595951F.ashx'id={'08da6d78-2316-454b-a7f4-40479bdd9b27'}></Profilecard>
                        </div>
                        <div className=' col-md-4'>
                            <Profilecard title='Rohit Sharma' imgurl='https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1660993978762.jpg-org' id={'03bda674-3916-4d64-952e-00a6c19c01e1'}></Profilecard>
                        </div>
                        <div className=' col-md-4'>
                            <Profilecard title='Babar Azam' imgurl='https://www.mykhel.com/thumb/247x100x233/cricket/players/1/5601.jpg' id={'4ffc5d94-5a5f-4489-a09f-60e22090c810'}></Profilecard>
                        </div>
                        <div className=' col-md-4'>
                            <Profilecard title='Quinton de Kock' imgurl='https://www.mykhel.com/thumb/247x100x233/cricket/players/8/5648.jpg' id={'000f9f7c-cc24-4a85-8638-b013b0f4760e'}></Profilecard>
                        </div>

                    </div>}
            </div>
            <Footer></Footer>
            {/* <Playerinfo></Playerinfo> */}
        </div>
    )
}
