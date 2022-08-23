import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import NiftyHundredVolatility from '../../components/table/NiftyHundredVolatility'
import data from "../../data"
import { FirebaseFirestore } from '../../firebase'

export default function dataPage({BlogData}) {
    const tableData = BlogData[0];
    let allData = [];

    for (var key in tableData) {
        var element = tableData[key];
        allData.push(element)  
    }

    var ts = tableData.Date;
    var date_ts = new Date(ts)
    var date = date_ts.getDate() + "/" + date_ts.getMonth() + "/" + date_ts.getFullYear()

    return (
        <>
            <Header
                PageTitle="Data Dash | Home"
                PageDescription={data.meta.PageDescription} 
                PageViewport={data.meta.PageViewport} 
                OGType={data.meta.OGType} 
                OGSiteName={data.meta.OGSiteName} 
                OGImage={data.meta.OGImage} 
                TwitterCard={data.meta.TwitterCard} 
                TwitterTitle={data.meta.TwitterTitle} 
                TwitterDescription={data.meta.TwitterDescription} 
                FavIcon={data.meta.FavIcon}
            />
            <Navbar />
            <div className="grid_container">
                <div className="item2">
                    <SideBar />
                </div>
                <div className="item3 mt-5">

                    <h3 className="ml-5" style={{color: "red"}}><p>Date:- {date}</p></h3>
                    <NiftyHundredVolatility data={allData} />
                    
                </div>
            </div>
        </>
    )
}


export async function getStaticProps(context) {
    const querySnap = await FirebaseFirestore.collection("nifty100_volatility").orderBy('Date','desc').get()
    const BlogData = querySnap.docs.map(docSnap => {
      return { ...docSnap.data(),Date:docSnap.data().Date.toMillis() }
    })
    return{
      props: {
        BlogData 
      },
      revalidate: 3600
    };
  }