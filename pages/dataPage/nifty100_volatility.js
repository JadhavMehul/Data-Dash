import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import data from '../../data'
import { FirebaseFirestore } from '../../firebase'
import SideBarMaster from '../../components/SideBarMaster'
import NiftyHundredVolatility from '../../components/table/NiftyHundredVolatility'

export default function nifty100_volatility({BlogData}) {
    const sortingValue = 'Daily Volitality'

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
                    <SideBarMaster />
                </div>
                <div className="item3 mt-5">

                    <h3 className="ml-5" style={{color: "red"}}><p>Date:- {date}</p></h3>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            Sort Table
                        </button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={() => setSortingValue('Symbol')}>Symbol: Alphabetical Order</button>
                            <button className="dropdown-item" onClick={() => setSortingValue('Daily Volitality')}>Daily Volitality: Largest to Smallest</button>
                            <button className="dropdown-item" onClick={() => setSortingValue('Yearly Volitality')}>Yearly Volitality: Largest to Smallest</button>
                        </div>
                    </div>

                    <table className="table table-striped w-75">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">Daily Volitality</th>
                                <th scope="col">Yearly Volitality</th>
                                <th scope="col">Daily Volitality in %</th>
                                <th scope="col">Yearly Volitality in %</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allData.sort((a, b) => a[sortingValue] < b[sortingValue] ? 1 : -1).map((data, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data.Symbol}</td>
                                        <td>{data['Daily Volitality']}</td>
                                        <td>{data['Yearly Volitality']}</td>
                                        <td>{(data['Daily Volitality'] * 100).toFixed(2)}</td>
                                        <td>{(data['Yearly Volitality'] * 100).toFixed(2)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

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